'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  Home,
  BookOpen,
  Coins,
  Menu,
  X,
  LogIn,
  UserPlus,
  SunMoon,
} from 'lucide-react';
import { ModeToggle } from './ThemeToggle';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header for Desktop/Tablet */}
      <header
        className={`hidden sm:flex fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cyan-100/80 shadow-md backdrop-blur-md'
            : 'bg-cyan-50/60 backdrop-blur'
        } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='max-w-6xl mx-auto gap-34 py-3 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center pr-4 gap-2'>
            <Image src='/logo.svg' alt='Logo' width={32} height={32} />
          </Link>

          {/* Desktop menu */}
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='flex flex-col items-center text-xs text-gray-900'
            >
              <Home className='w-6 hover:text-gray-500 h-6' />
            </Link>
            <button
              onClick={() => router.push('/book/select')}
              className='flex cursor-pointer items-center gap-2 px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-700 transition'
            >
              <Menu className='w-4 h-4' />
              Chapters
            </button>
            <Link
              href='/donate'
              className='flex items-center gap-1 text-sm text-yellow-600 dark:text-black border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-100 transition'
            >
              <Coins className='w-4 h-4' />
              Donate
            </Link>
            <Link
              href='/signin'
              className='text-sm text-gray-700 dark:text-black hover:underline'
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
        </div>
      </header>

      {/* Bottom Nav for Mobile */}
      <nav className='sm:hidden fixed bottom-0 z-50 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around py-2'>
        <Link
          href='/'
          className='flex flex-col items-center text-xs text-gray-700 dark:text-gray-200'
        >
          <Home className='w-5 h-5 mb-1' />
          Home
        </Link>
        <Link
          href='/book/select'
          className='flex flex-col items-center text-xs text-gray-700 dark:text-gray-200'
        >
          <BookOpen className='w-5 h-5 mb-1' />
          Chapters
        </Link>
        <button
          onClick={toggleMenu}
          className='flex flex-col items-center text-xs text-gray-700 dark:text-gray-200'
        >
          {isMenuOpen ? (
            <X className='w-5 h-5 mb-1' />
          ) : (
            <Menu className='w-5 h-5 mb-1' />
          )}
          Menu
        </button>
        <Link
          href='/donate'
          className='flex flex-col items-center text-xs text-yellow-600 dark:text-yellow-300'
        >
          <Coins className='w-5 h-5 mb-1' />
          Donate
        </Link>
        <ModeToggle />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='fixed inset-0 z-40 bg-black/50 flex justify-end'
        >
          <div className='w-3/4 bg-white dark:bg-gray-800 p-5 space-y-4'>
            <Link
              href='/signin'
              onClick={closeMenu}
              className='flex items-center gap-2 text-gray-800 dark:text-white'
            >
              <LogIn className='w-5 h-5' />
              Sign In
            </Link>
            <Link
              href='/signup'
              onClick={closeMenu}
              className='flex items-center gap-2 text-gray-800 dark:text-white'
            >
              <UserPlus className='w-5 h-5' />
              Sign Up
            </Link>
            <Link
              href='/donate'
              onClick={closeMenu}
              className='flex items-center gap-2 text-yellow-600 dark:text-yellow-300'
            >
              <Coins className='w-5 h-5' />
              Donate
            </Link>
            <div className='flex items-center gap-2'>
              <SunMoon className='w-5 h-5' />
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
