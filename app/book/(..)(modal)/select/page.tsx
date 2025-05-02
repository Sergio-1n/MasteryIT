'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../../../../chapters';
import { BookOpen, X } from 'lucide-react';

export default function ChapterModal() {
  const router = useRouter();

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
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4 relative'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => router.back()}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
            aria-label='Закрыть'
          >
            <X size={24} />
          </button>

          <h2 className='text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2'>
            <BookOpen className='text-blue-600' /> Выберите главу
          </h2>

          <ul className='space-y-2'>
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <button
                  onClick={() => router.push(`/book/${chapter.id}`)}
                  className='flex items-center gap-2 text-blue-600 hover:underline w-full text-left'
                >
                  <span className='text-gray-600'>{index + 1}.</span>
                  <BookOpen className='h-4 w-4' />
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => router.back()}
            className='mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200'
          >
            Закрыть
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
