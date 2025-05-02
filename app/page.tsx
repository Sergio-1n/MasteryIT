import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 px-6 py-12 flex flex-col items-center'>
      <div className='max-w-3xl text-center'>
        <h1 className='text-5xl mt-4 font-bold mb-6'>
          Learn IT: Your Free Guide to the IT World
        </h1>
        <p className='text-lg mb-4'>
          Dive into the essentials of the IT industry with our beginner-friendly
          book. Whether you&apos;re just starting out or brushing up your
          knowledge, this book gives you a solid foundation.
        </p>
        <p className='text-lg mb-4'>
          Featuring <strong>400+ IT terms</strong> explained clearly, practical
          examples, and a supporting
          <a
            href='https://youtube.com/@masteryit-b1h?si=Md2jBN1Z5NW8DrxV'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline ml-1'
          >
            YouTube channel
          </a>{' '}
          with voiceover, demos, and dialogues.
        </p>
        <p className='text-md text-gray-600 mb-6'>
          Learn at your own pace — completely free. Support the project if you
          find it helpful.
        </p>
        <Link
          className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition'
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
