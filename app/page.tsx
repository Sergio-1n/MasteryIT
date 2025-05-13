'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='sm:py-16 md:py-16 px-4 py-4 pb-18 flex flex-col items-center transition-all'>
      <div className='max-w-4xl w-full space-y-4'>
        {/* Hero Card */}
        <div className='bg-white text-left md:text-xl dark:bg-black/60 backdrop-blur shadow-xl rounded-2xl p-6'>
          <h1 className='hero-title text-center'>
            Learn IT English & Master Core IT Skills Simultaneously
          </h1>

          <p className='font-bold'>
            Do you want to enter the IT field but don’t know where to start?
            Curious how the whole IT industry works or how to speak fluent IT
            English?
          </p>

          <p className='font-bold'>
            You will get answers to these questions and more:
          </p>

          <p>• Where do I start my journey into IT?</p>
          <p>• How do IT departments and roles connect?</p>
          <p>• What basic knowledge do I need to succeed?</p>
          <p>• How can I improve my IT vocabulary?</p>
          <p>• How can I learn tech English with real examples?</p>
          <p>• How to prepare for IT job interviews?</p>
          <p>• What tools do programmers, testers, and designers use?</p>
          <p>• How do I understand and speak IT slang fluently?</p>
          <p>• Can I learn technical terms with pronunciation guides?</p>

          <p className='font-bold'>
            Learn IT at your own pace. No fluff, no cost — just clear,
            structured learning.
          </p>

          {/* Link to TOC */}
          <div className='card my-4'>
            <Link
              href='/book/table-of-contents'
              className='md:text-xl text-sm font-semibold text-center hover:underline-offset-4'
            >
              📑 Full Book Structure – Read Table of Contents →
            </Link>
          </div>

          <p className='mb-4'>
            In this guide you will find over <strong>400+ key IT terms</strong>,
            real dialogues, and a dedicated{' '}
            <a
              href='https://youtube.com/@masteryit-b1h?si=Md2jBN1Z5NW8DrxV'
              target='_blank'
              rel='noopener noreferrer'
              className='underline font-semibold '
            >
              YouTube channel
            </a>{' '}
            featuring native voiceovers and practical usage.
          </p>

          {/* CTA Button */}
          <Link href='/book' className='cta-button'>
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
      </div>
    </main>
  );
}
