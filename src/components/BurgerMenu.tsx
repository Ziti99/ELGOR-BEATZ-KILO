'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (mq.matches) setIsOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navigationLinks = [
    { href: '/', label: 'Accueil', description: "Retour à l'accueil" },
    { href: '/about', label: 'À propos', description: 'Découvrez Elgor Beatz' },
    { href: '/contact', label: 'Contact', description: 'Contactez-nous' },
  ];

  const socialLinks = [
    { href: 'https://www.instagram.com/elgorbeatz_off/', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/Elgor.beatz/', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://www.tiktok.com/@elgorbeatz5', icon: FaTiktok, label: 'TikTok' },
    { href: 'https://wa.me/24104220754', icon: FaWhatsapp, label: 'WhatsApp' },
    { href: 'https://www.youtube.com/@elgorbeatz', icon: FaYoutube, label: 'YouTube' },
  ];

  const overlay = isOpen && mounted && (
    <div
      className="fixed inset-0 z-[270] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-ink/35 backdrop-blur-sm"
        aria-label="Fermer le menu"
        onClick={closeMenu}
      />

      <div className="absolute right-0 top-0 z-[1] flex h-full w-full flex-col border-l border-stone-900/[0.08] bg-cream-paper shadow-lux sm:w-96">
        <div className="flex shrink-0 items-center justify-between border-b border-stone-900/10 bg-cream-muted/50 p-4 sm:p-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-900/15 bg-cream shadow-sm sm:h-11 sm:w-11">
              <Image
                src="/branding/eb-monogram-black.png"
                alt=""
                width={36}
                height={36}
                className="h-7 w-auto object-contain sm:h-[1.75rem]"
                aria-hidden
              />
            </div>
            <Image
              src="/branding/wordmark-line-black.png"
              alt="Elgor Beatz"
              width={210}
              height={40}
              className="h-5 w-auto max-w-[150px] shrink object-contain object-left sm:h-[1.3rem] sm:max-w-none"
            />
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-stone-900/15 text-stone-500 transition-colors hover:border-accent-copper/45 hover:text-ink sm:h-10 sm:w-10"
            aria-label="Fermer le menu"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain p-4 sm:space-y-8 sm:p-6">
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">Recherche</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Beats, genres, artistes..."
                className="w-full rounded-sm border border-stone-900/12 bg-cream px-4 py-3 pl-12 text-sm font-light text-ink placeholder-stone-400 transition-colors focus:border-accent-copper/50 focus:outline-none"
              />
              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-stone-400" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">Navigation</h3>
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={true}
                  onClick={closeMenu}
                  className="group block cursor-pointer rounded-lg border border-stone-900/[0.08] bg-cream/90 p-3 shadow-sm transition-all hover:border-foil/30 hover:shadow-md sm:p-4"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors group-hover:text-accent-copper">
                    {link.label}
                  </div>
                  <div className="mt-1 text-xs font-light text-stone-500">{link.description}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">Raccourcis</h3>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-stone-900/10 p-3 text-xs font-light uppercase tracking-wider text-stone-600 transition-colors hover:border-accent-copper/30 hover:text-ink sm:p-4"
              >
                <FaHeart className="text-sm" />
                <span className="hidden sm:inline">Favoris</span>
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-stone-900/10 p-3 text-xs font-light uppercase tracking-wider text-stone-600 transition-colors hover:border-accent-copper/30 hover:text-ink sm:p-4"
              >
                <FaShoppingCart className="text-sm" />
                <span className="hidden sm:inline">Panier</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">Suivez-nous</h3>
            <div className="grid grid-cols-5 gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-sm border border-stone-900/10 bg-cream/80 p-3 text-center transition-all hover:border-accent-copper/35 sm:p-4"
                >
                  <Icon className="mx-auto mb-1 text-lg text-stone-500 transition-colors group-hover:text-accent-copper sm:text-xl" />
                  <div className="text-[10px] font-light leading-tight text-stone-400 transition-colors group-hover:text-stone-600">
                    {label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">Contact rapide</h3>
            <a
              href="https://wa.me/24104220754"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-sm bg-ink p-3 text-sm font-light uppercase tracking-wider text-cream shadow-md transition-colors hover:bg-ink-muted sm:p-4"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-900/[0.1] bg-cream-paper/85 text-ink-muted shadow-sm ring-1 ring-foil/[0.06] transition-all hover:border-foil/35 hover:text-ink sm:h-12 sm:w-12 lg:hidden"
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
      >
        <FaBars className="text-lg sm:text-xl" />
      </button>
      {overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
