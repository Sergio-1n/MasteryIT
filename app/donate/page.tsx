'use client';

import Image from 'next/image';
// import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function DonatePage() {
  // const { theme } = useTheme();
  // const [bgImage, setBgImage] = useState('/bg.jpg');
  const walletAddress = 'TRTdpuB99omSyPihhgbRMgtZgmokWu1DKu';
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     setBgImage('/bg-dark.jpg');
  //   } else {
  //     setBgImage('/bg.jpg');
  //   }
  // }, [theme]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <main
      className='min-h-screen dark:bg-cyan-800 from-gray-100 to-white px-4 py-16 flex items-center justify-center'
      // style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className='max-w-xl w-full dark:bg-black/60 bg-cyan-100/80 rounded-2xl shadow-xl p-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Support my project 💖</h1>
        <p className='text-lg mb-6 leading-relaxed'>
          If you like what I do and you want to help the development of the
          project, you can donate in USDT (TRC-20).
        </p>

        <div className='mb-6'>
          <p className='text-md font-medium mb-2'>USDT (TRC-20) wallet:</p>
          <div className='relative'>
            <div className='bg-gray-100 dark:bg-gray-200 p-4 text-gray-800 rounded-lg text-sm break-all border border-gray-300 pr-10'>
              {walletAddress}
            </div>
            <button
              onClick={handleCopy}
              className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
              aria-label='Copy wallet address'
            >
              {/* SVG иконка копирования */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2'
                />
              </svg>
            </button>
            {copied && (
              <span className='absolute top-0 right-0 mt-1 mr-2 text-xs text-green-600'>
                Copied!
              </span>
            )}
          </div>
        </div>

        <div className='flex justify-center mb-4'>
          <Image
            src='/qr.jpg' // QR-код с адресом USDT
            alt='USDT Wallet QR'
            width={120}
            height={120}
            className='rounded-lg border'
          />
        </div>

        <p className='text-sm'>
          Scan the QR code or copy the address to send the donation.
        </p>
      </div>
    </main>
  );
}
