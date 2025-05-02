'use client';

import { BookOpen, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'
      }`}
    >
      <div className='max-w-5xl mx-auto px-4 py-3 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2 text-blue-600 font-semibold text-lg hover:opacity-90'
        >
          <BookOpen className='w-6 h-6' />
          <span>Your Guide to Mastering IT</span>
        </Link>

        <button
          onClick={() => router.push('/book/select')}
          className='flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
          <Menu className='w-4 h-4' />
          Главы
        </button>
      </div>
    </header>
  );
}
