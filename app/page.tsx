'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// import LikeBox from '@/components/LikeBox';

export default function HomePage() {
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
    'bg-white/80 dark:bg-black/60 backdrop-blur shadow-xl rounded-2xl p-6 transition hover:shadow-cyan-200 hover:scale-[1.02] duration-200 text-gray-800 dark:text-gray-100';

  const questionItems = [
    'Where do I start my journey into IT?',
    'How do IT departments and roles connect?',
    'What basic knowledge do I need to succeed?',
    'How can I improve my IT vocabulary?',
    'How can I learn tech English with real examples?',
    'How to prepare for IT job interviews?',
    'What tools do programmers, testers, and designers use?',
    'How do I understand and speak IT slang fluently?',
    'Can I learn technical terms with pronunciation guides?',
  ];

  return (
    <main
      className='min-h-screen bg-cover bg-center mt-4 px-4 py-12 flex flex-col items-center transition-all'
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* <LikeBox /> */}
      <div className='max-w-4xl w-full space-y-6'>
        {/* Hero Card */}
        <div className={`${cardStyle} text-center`}>
          <h1 className='text-3xl dark:text-gray-100 md:text-4xl font-bold text-cyan-800'>
            Learn IT English & Master Core IT Skills Simultaneously
          </h1>
        </div>

        <div className={cardStyle}>
          <p className='text-lg dark:text-gray-100 font-semibold text-gray-800 text-center'>
            Do you want to enter the IT field but don’t know where to start?
            Curious how the whole IT industry works or how to speak fluent IT
            English?
          </p>
        </div>

        <div className={cardStyle}>
          <p className='text-lg dark:text-gray-100 font-semibold text-gray-800'>
            You will get answers to these questions and more:
          </p>
        </div>

        {/* Questions List */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {questionItems.map((question, idx) => (
            <div key={idx} className={cardStyle}>
              <p className='text-md text-gray-700 dark:text-gray-100 font-medium'>
                • {question}
              </p>
            </div>
          ))}
        </div>

        {/* Table of Contents Link */}
        <div className={cardStyle}>
          <Link
            href='/book/table-of-contents'
            className='text-blue-700 dark:text-blue-300 font-semibold text-center hover:underline-offset-4'
          >
            📑 Full Book Structure – Read Table of Contents →
          </Link>
        </div>
        {/* YouTube & Overview */}
        <div className={cardStyle}>
          <p className='text-md font-bold dark:text-gray-100 text-gray-800'>
            This guide answers these questions and more — with over 400+ key IT
            terms, real dialogues, and a dedicated{' '}
            <a
              href='https://youtube.com/@masteryit-b1h?si=Md2jBN1Z5NW8DrxV'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-300 underline'
            >
              YouTube channel
            </a>{' '}
            featuring native voiceovers and practical usage.
          </p>
        </div>

        <div className={cardStyle}>
          <p className='dark:text-gray-100 font-semibold text-gray-600 text-center'>
            Learn IT at your own pace. No fluff, no cost — just clear,
            structured learning.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          className='inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition shadow-lg'
          href='/book'
        >
          Start Reading
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
