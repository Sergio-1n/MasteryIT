'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../../../../chapters';
import { BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function ChapterModal() {
  const { theme } = useTheme();
  const [bgImage, setBgImage] = useState('/bg.jpg');

  useEffect(() => {
    // Заменить путь на нужный тебе
    if (theme === 'dark') {
      setBgImage('/bg-dark.jpg');
    } else {
      setBgImage('/bg.jpg');
    }
  }, [theme]);

  const cardStyle =
    'bg-gray-200 dark:bg-gray-300 backdrop-blur shadow-xl rounded-2xl p-6 transition hover:shadow-cyan-200 hover:scale-[1.02] duration-200';
  const router = useRouter();
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [router]);

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 bg-opacity-50 flex items-center justify-center z-50'
        style={{ backgroundImage: `url('${bgImage}')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-gray-400/40 rounded-xl shadow-lg p-6 w-full max-w-lg space-y-4 relative max-h-[90vh] overflow-y-auto'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => router.back()}
            className='absolute top-4 right-4 text-gray-700 hover:text-gray-900'
            aria-label='Закрыть'
          >
            <X size={24} />
          </button>
          <h2 className='text-2xl text-gray-700 font-bold mb-4 text-center flex items-center justify-center gap-2'>
            <BookOpen className='text-blue-600' /> Select a chapter
          </h2>{' '}
          <Link
            href='/book'
            className='text-blue-600 ml-10 rounded hover:underline block mb-4'
          >
            <div className={`${cardStyle}dark:bg-gray-200`}>
              Start: Your Guide to Mastering IT
            </div>
          </Link>
          <ul className='space-y-3'>
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <div
                  onClick={() =>
                    setOpenChapter(
                      openChapter === chapter.id ? null : chapter.id
                    )
                  }
                  className={`${cardStyle} cursor-pointer dark:bg-gray-300 flex items-center gap-2 text-left w-full text-blue-700 hover:underline`}
                >
                  {openChapter === chapter.id ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                  <span className='text-gray-600'>{index + 1}.</span>
                  <BookOpen className='w-4 h-4' />
                  <span>{chapter.title}</span>
                </div>

                <AnimatePresence>
                  {openChapter === chapter.id && (
                    <motion.ul
                      className='ml-6 mt-2 border-l border-gray-200 pl-4 space-y-1'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {chapter.sections.map(section => (
                        <li key={section.id}>
                          <button
                            onClick={() =>
                              router.push(
                                `/book/${chapter.id}?section=${section.id}`
                              )
                            }
                            className='text-sm cursor-pointer text-gray-700 hover:underline w-full text-left'
                          >
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          <button
            onClick={() => router.back()}
            className='mt-6 w-full bg-black cursor-pointer text-white hover:text-white py-2 rounded hover:bg-gray-800'
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
