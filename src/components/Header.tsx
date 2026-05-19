'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';
import SearchBar from './SearchBar';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    if (isSearchOpen) {
      setNavHidden(false);
      prevScroll.current = scrollY;
      return;
    }

    const delta = scrollY - prevScroll.current;
    prevScroll.current = scrollY;

    if (scrollY < 80) {
      setNavHidden(false);
      return;
    }
    if (delta > 10) setNavHidden(true);
    if (delta < -10) setNavHidden(false);
  }, [scrollY, isSearchOpen]);

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] will-change-transform transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-cream-paper/82 backdrop-blur-2xl border-b border-stone-900/[0.07] shadow-[0_12px_40px_-24px_rgba(22,20,18,0.12)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foil/25 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-5 group outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-accent-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-stone-900/[0.09] bg-cream-paper/90 shadow-inner shadow-white/40 ring-1 ring-foil/[0.12] transition-[border-color,box-shadow] duration-300 group-hover:border-foil/35 group-hover:shadow-lux">
              <Image
                src="/branding/eb-monogram-black.png"
                alt="Elgor Beatz — monogramme EB"
                width={42}
                height={42}
                className="h-7 w-auto sm:h-8 object-contain"
                priority
              />
            </span>

            <span className="hidden h-[2px] w-8 bg-gradient-to-r from-stone-300 to-transparent sm:block" aria-hidden />

            <span className="relative flex flex-col gap-2 min-w-0">
              <Image
                src="/branding/wordmark-line-black.png"
                alt="Elgor Beatz"
                width={220}
                height={40}
                className="h-5 sm:h-[1.375rem] w-auto max-w-[180px] sm:max-w-[220px] object-left object-contain opacity-95 transition-opacity group-hover:opacity-100"
                priority
              />
              <span className="hidden text-[9px] font-mono uppercase tracking-[0.32em] text-stone-500 xl:block truncate">
                Créateur de sons · Studio
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={true}
                className="relative group text-[11px] font-mono tracking-[0.22em] uppercase text-stone-600 hover:text-ink transition-colors duration-300 cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-foil via-accent-copper to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-600 hover:text-ink transition-colors duration-300 p-2.5 rounded-full border border-transparent hover:border-stone-900/[0.08] hover:bg-cream-muted/60 hover:shadow-sm"
              aria-expanded={isSearchOpen}
              aria-label="Recherche"
            >
              <FaSearch className="text-sm" />
            </button>
            <BurgerMenu />
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream-paper/96 backdrop-blur-xl border-t border-stone-900/10 p-8 shadow-lg shadow-stone-900/5">
          <div className="max-w-4xl mx-auto">
            <SearchBar
              onSearch={(query) => {
                console.log('Search:', query);
                setIsSearchOpen(false);
              }}
              onFilterChange={(filters) => {
                console.log('Filters:', filters);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
