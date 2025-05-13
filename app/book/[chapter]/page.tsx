'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { chapters } from '../../../chapters';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';

export default function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const searchParams = useSearchParams();
  const sectionId = searchParams.get('section');

  useEffect(() => {
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const url = new URL(window.location.href);
        url.searchParams.delete('section');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, [sectionId]);

  const { chapter: chapterId } = use(params);
  const chapter = chapters.find(ch => ch.id === chapterId);

  const [showFullChapter, setShowFullChapter] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  if (!chapter) return notFound();

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderContent = (html: string, limit?: number) => {
    const blocks = html.split('\n').filter(Boolean);
    const visible = typeof limit === 'number' ? blocks.slice(0, limit) : blocks;

    return (
      <>
        {visible.map((block, idx) => (
          <div
            key={idx}
            className='mb-4'
            dangerouslySetInnerHTML={{ __html: block }}
          />
        ))}
      </>
    );
  };

  return (
    <main className='sm:py-16 md:py-16 px-4 py-4 pb-18 flex flex-col items-center transition-all'>
      <div className='max-w-4xl w-full space-y-4'>
        <div className='bg-white text-left md:text-xl dark:bg-black/60 backdrop-blur shadow-xl rounded-2xl p-6'>
          <h1 className='text-center mb-4'>{chapter.title}</h1>

          <div className='pb-4'>
            {showFullChapter
              ? renderContent(chapter.content)
              : renderContent(chapter.content, 1)}

            <button
              className='cta-button mt-2'
              onClick={() => setShowFullChapter(!showFullChapter)}
            >
              {showFullChapter ? 'Hide' : 'Read more'}
            </button>
          </div>

          {chapter.sections.map(section => (
            <div key={section.id} id={section.id} className='mb-10'>
              <h2 className='mb-4'>{section.title}</h2>

              <div className='aspect-video mb-4'>
                <iframe
                  src={
                    section.videoUrl.includes('embed')
                      ? section.videoUrl
                      : section.videoUrl.replace('watch?v=', 'embed/')
                  }
                  title={section.title}
                  className='w-full h-full rounded-lg'
                  allowFullScreen
                />
              </div>

              {expandedSections[section.id]
                ? renderContent(section.content)
                : renderContent(section.content, 2)}

              <button
                className='cta-button mt-2'
                onClick={() => toggleSection(section.id)}
              >
                {expandedSections[section.id] ? 'Hide' : 'Read more'}
              </button>
            </div>
          ))}

          <div className='mt-12 flex justify-between items-center'>
            {getPrevChapter(chapter.id) ? (
              <Link
                href={`/book/${getPrevChapter(chapter.id)}`}
                className='cta-button'
              >
                ← Previous
              </Link>
            ) : (
              <div />
            )}

            {getNextChapter(chapter.id) && (
              <Link
                href={`/book/${getNextChapter(chapter.id)}`}
                className='cta-button ml-auto'
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function getPrevChapter(id: string) {
  const idx = chapters.findIndex(ch => ch.id === id);
  return chapters[idx - 1]?.id;
}

function getNextChapter(id: string) {
  const idx = chapters.findIndex(ch => ch.id === id);
  return chapters[idx + 1]?.id;
}
