'use client';

import { Menu, X, Coins } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './ThemeToggle';

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 dark:bg-gray-400 transition-all duration-300 ${
        scrolled
          ? 'bg-cyan-100/80 shadow-md backdrop-blur-md'
          : 'bg-cyan-50/60 backdrop-blur'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2' onClick={closeMenu}>
          <Image src='/logo.svg' alt='Logo' width={32} height={32} />
        </Link>

        {/* Desktop menu */}
        <div className='hidden sm:flex items-center gap-4'>
          <button
            onClick={() => router.push('/book/select')}
            className='flex items-center cursor-pointer  gap-2 px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-700 transition'
          >
            <Menu className='w-4 h-4' />
            Chapters
          </button>
          <Link
            href='/donate'
            className='flex items-center dark:text-yellow-200 gap-1 text-sm text-yellow-600 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-100  transition'
          >
            <Coins className='w-4 h-4' />
            Donate
          </Link>
          <Link
            href='/signin'
            className='text-sm dark:text-gray-100 text-gray-700 hover:underline'
          >
            Sign In
          </Link>
          <Link
            href='/signup'
            className='text-sm text-white bg-gray-800 px-3 py-1 rounded hover:bg-black transition'
          >
            Sign Up
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile burger button */}
        <button
          className='sm:hidden text-gray-800'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='sm:hidden bg-white shadow-md border-t border-gray-200'
        >
          <div className='px-4 py-3 dark:bg-gray-700 flex flex-col gap-3'>
            <Link
              href='/book/select'
              onClick={closeMenu}
              className='text-gray-800 dark:text-gray-100'
            >
              Chapters
            </Link>
            <Link
              href='/donate'
              onClick={closeMenu}
              className='text-yellow-700 dark:text-gray-100'
            >
              Donate
            </Link>
            <Link
              href='/signin'
              onClick={closeMenu}
              className='text-gray-700 dark:text-gray-100'
            >
              Sign In
            </Link>
            <ModeToggle />
            <Link
              href='/signup'
              onClick={closeMenu}
              className='text-white bg-gray-800 px-3 py-1 rounded text-center'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
