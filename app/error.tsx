'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-red-50 text-red-800 px-4 text-center'>
      <h2 className='text-2xl font-semibold mb-4'>Something went wrong</h2>
      <p className='mb-4 text-sm'>
        {error.message || 'Unknown error occurred.'}
      </p>
      <button
        onClick={() => reset()}
        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
      >
        Try Again
      </button>
    </div>
  );
}
