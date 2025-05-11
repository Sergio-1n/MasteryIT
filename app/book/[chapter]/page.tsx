'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { chapters } from '../../../chapters';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';
// import { useTheme } from 'next-themes';

export default function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  // const { theme } = useTheme();
  // const [bgImage, setBgImage] = useState('/bg.jpg');
  const searchParams = useSearchParams();
  const sectionId = searchParams.get('section');

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     setBgImage('/bg-dark.jpg');
  //   } else {
  //     setBgImage('/bg.jpg');
  //   }
  // }, [theme]);

  useEffect(() => {
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Очистить параметр section после скролла
        const url = new URL(window.location.href);
        url.searchParams.delete('section');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, [sectionId]);

  const cardStyle =
    'bg-gray-100 dark:bg-cyan-600 dark:text-gray-200 md:p-4 p-2 backdrop-blur shadow-md rounded-xl transition hover:shadow-cyan-200 hover:scale-[1.02] duration-200';
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
            className='mb-4 text-base sm:text-lg leading-relaxed'
            dangerouslySetInnerHTML={{ __html: block }}
          />
        ))}
      </>
    );
  };

  return (
    <main
      className='min-h-screen bg-cyan-100 dark:bg-cyan-800 text-gray-900 px-4 sm:px-4 sm:py-16 pb-18 pt-4'
      // style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className='dark:bg-black/60 dark:text-gray-200 max-w-3xl w-full mx-auto bg-white/90 p-6 rounded-2xl shadow-md backdrop-blur'>
        <h1 className='text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-center'>
          {chapter.title}
        </h1>

        <div className='pb-8'>
          {showFullChapter
            ? renderContent(chapter.content)
            : renderContent(chapter.content, 1)}

          <button
            className={`${cardStyle} text-blue-600 hover:underline mt-2`}
            onClick={() => setShowFullChapter(!showFullChapter)}
          >
            {showFullChapter ? 'Hide' : 'Read more'}
          </button>
        </div>

        {chapter.sections.map(section => (
          <div key={section.id} id={section.id} className='mb-10'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
              {section.title}
            </h2>

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
              className={`${cardStyle} text-blue-600 hover:underline mt-2`}
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
              className='bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition'
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {getNextChapter(chapter.id) && (
            <Link
              href={`/book/${getNextChapter(chapter.id)}`}
              className='bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition ml-auto'
            >
              Next →
            </Link>
          )}
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
