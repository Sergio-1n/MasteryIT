import { notFound } from 'next/navigation';
import { chapters } from '../../../chapters';

export default function ChapterPage({
  params,
}: {
  params: { chapter: string };
}) {
  const chapter = chapters.find(ch => ch.id === params.chapter);

  if (!chapter) return notFound();

  return (
    <main className='max-w-2xl mx-auto py-10 px-4'>
      <h1 className='text-3xl font-bold mb-6'>{chapter.title}</h1>
      <p className='text-lg whitespace-pre-line'>{chapter.content}</p>

      <div className='mt-10 flex justify-between'>
        {getPrevChapter(chapter.id) && (
          <a
            href={`/book/${getPrevChapter(chapter.id)}`}
            className='text-blue-500 hover:underline'
          >
            ← Previous
          </a>
        )}
        {getNextChapter(chapter.id) && (
          <a
            href={`/book/${getNextChapter(chapter.id)}`}
            className='ml-auto text-blue-500 hover:underline'
          >
            Next →
          </a>
        )}
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
