'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../../../../chapters';
import { BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function ChapterModal() {
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
        className='bg-cyan-100 dark:bg-cyan-900 fixed inset-0 bg-opacity-50 flex items-center justify-center z-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-white dark:bg-cyan-700 rounded-xl shadow-lg p-6 w-full max-w-lg space-y-4 relative max-h-[90vh] overflow-y-auto'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => router.back()}
            className='absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-gray-900'
            aria-label='close'
          >
            <X size={24} />
          </button>
          <h2 className='text-gray-800 dark:text-gray-200 font-bold mb-4 text-center flex items-center justify-center gap-2'>
            <BookOpen className='text-gray-800 dark:text-gray-200' /> Select a
            chapter
          </h2>{' '}
          <div className='card'>
            <Link href='/book'>Start: Your Guide to Mastering IT</Link>
          </div>
          <ul>
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <div
                  onClick={() =>
                    setOpenChapter(
                      openChapter === chapter.id ? null : chapter.id
                    )
                  }
                  className='card flex items-center cursor-pointer gap-2'
                >
                  {openChapter === chapter.id ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                  <span className=' text-gray-800 dark:text-gray-100'>
                    {index + 1}.
                  </span>
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
                          <SignedIn>
                            <button
                              onClick={() =>
                                router.push(
                                  `/book/${chapter.id}?section=${section.id}`
                                )
                              }
                              className='text-sm cursor-pointer text-black dark:text-white hover:underline w-full text-left'
                            >
                              {section.title}
                            </button>
                          </SignedIn>

                          <SignedOut>
                            <SignInButton
                              forceRedirectUrl={`/book/${chapter.id}?section=${section.id}`}
                            >
                              <button className='text-sm cursor-pointer text-gray-700 dark:text-gray-100 hover:underline w-full text-left'>
                                {section.title}
                              </button>
                            </SignInButton>
                          </SignedOut>
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
            className='cta-button justify-end'
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
