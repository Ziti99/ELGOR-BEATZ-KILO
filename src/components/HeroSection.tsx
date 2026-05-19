'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { HeroHeritageMasks } from '@/components/GabonHeritageMotifs';

const heroImages = [
  {
    src: '/Highlights/IMG_2050.JPEG',
    objectPosition: 'center 35%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/Highlights/IMG_2161.JPEG',
    objectPosition: 'center 40%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/Highlights/IMG_2163.JPEG',
    objectPosition: 'center 38%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/Highlights/IMG_2167.JPEG',
    objectPosition: 'center 32%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/Highlights/IMG_2168.JPEG',
    objectPosition: 'center 42%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/Highlights/IMG_2169.JPEG',
    objectPosition: 'center 36%',
    objectFit: 'cover' as const,
    overlay: 'bg-gradient-to-t from-cream/95 via-stone-900/35 to-stone-900/45',
  },
  {
    src: '/branding/wordmark-stack-black.png',
    objectPosition: 'center center',
    objectFit: 'contain' as const,
    overlay: 'bg-gradient-to-br from-cream via-cream-paper to-cream-muted',
  },
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-cream pt-24 pb-16 lg:pt-28 lg:pb-12">
      {/* Mesh & ambience — chaud + veinure foil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_8%_-18%,rgba(180,83,9,0.12),transparent_52%),radial-gradient(ellipse_75%_65%_at_92%_58%,rgba(107,33,168,0.065),transparent_56%),radial-gradient(ellipse_50%_40%_at_72%_12%,rgba(201,162,39,0.07),transparent_50%)] pointer-events-none z-[1]" />
      <div
        className="absolute inset-0 opacity-[0.45] z-[2] pointer-events-none mix-blend-soft-light hidden lg:block"
        style={{
          background: `radial-gradient(520px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 246, 239, 0.55), transparent 40%)`,
        }}
      />

      {/* Filigrane monogramme — charge visuelle très légère */}
      <div
        className="pointer-events-none absolute right-[-2rem] top-1/2 z-[3] hidden w-[min(100%,380px)] -translate-y-1/2 xl:block opacity-[0.065] saturate-0"
        aria-hidden
      >
        <Image
          src="/branding/eb-monogram-black.png"
          alt=""
          width={560}
          height={560}
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 lg:px-12 xl:px-16">
        {/* Colonne texte — editorial */}
        <div className="flex flex-1 flex-col lg:max-w-[34rem] xl:max-w-[38rem] order-2 lg:order-1 text-center lg:text-left">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-stone-500 mb-6 animate-fade-in-up">
            <span className="text-accent-copper">●</span>{' '}
            Studio — Gabon
          </p>

          <div className="hero-enter-delay-1 mb-8 inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="rounded-full border border-stone-900/[0.09] ring-1 ring-foil/15 bg-cream-paper/75 px-4 py-2 text-[9px] font-mono uppercase tracking-[0.22em] text-stone-600 backdrop-blur-md shadow-sm">
              Dolby-grade obsession
            </span>
            <span className="rounded-full border border-stone-900/[0.09] ring-1 ring-transparent hover:ring-foil/25 bg-cream-paper/75 px-4 py-2 text-[9px] font-mono uppercase tracking-[0.22em] text-stone-600 backdrop-blur-md shadow-sm transition-[box-shadow] duration-300">
              Vision & groove
            </span>
          </div>

          <HeroHeritageMasks />

          <h1 className="font-display font-normal tracking-[-0.045em] text-ink leading-[0.9] mb-6 fluid-hero-title animate-fade-in-up hero-enter-delay-2 [text-shadow:0_1px_0_rgba(255,253,249,0.9),0_24px_48px_rgba(22,20,18,0.06)]">
            Elgor
          </h1>

          <div className="mb-8 flex animate-fade-in-up hero-enter-delay-2 justify-center lg:justify-start">
            <Image
              src="/branding/wordmark-line-black.png"
              alt="Elgor Beatz"
              width={260}
              height={48}
              className="h-6 sm:h-[1.7rem] w-auto max-w-[min(240px,75vw)] object-contain lg:origin-left opacity-94"
              priority
            />
          </div>

          <p className="font-display italic text-xl sm:text-2xl xl:text-3xl text-ink-muted mb-5 font-normal tracking-wide leading-snug animate-fade-in-up hero-enter-delay-3 text-balance">
            Créateur de sons, architecte d&apos;émotions
          </p>
          <p className="text-base sm:text-lg text-stone-600 mb-10 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up hero-enter-delay-3 text-pretty">
            Une expérience signature — du Gabon au son international : textures vivantes, stéréo précise, détails qui
            tiennent la route. Héritage et modernité dans la même chaîne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center animate-fade-in-up hero-enter-delay-4 touch-manipulation">
            <Link
              href="/about"
              className="group relative isolate overflow-hidden px-10 py-4 bg-gradient-to-br from-ink via-ink to-espresso text-cream font-mono tracking-[0.18em] uppercase text-[11px] sm:text-xs shadow-lux hover:shadow-lux-hover border border-white/[0.08] ring-1 ring-foil/20 rounded-sm flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-accent-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Découvrir
              <FaArrowRight className="text-[10px] opacity-90 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-stone-900/[0.14] text-ink font-mono tracking-[0.18em] uppercase text-[11px] sm:text-xs hover:border-foil/40 hover:bg-cream-paper/95 hover:shadow-md backdrop-blur-sm rounded-sm flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream ring-1 ring-transparent hover:ring-foil/12 transition-[border-color,box-shadow,background-color] duration-300"
            >
              Booking
            </Link>
          </div>
        </div>

        {/* Carte visuelle — vitrine */}
        <div className="relative flex-1 order-1 lg:order-2 w-full lg:min-h-0 animate-fade-in-up hero-enter-delay-2">
          <div className="relative mx-auto aspect-[4/5] max-h-[min(520px,62vh)] w-full max-w-md lg:max-w-none lg:aspect-[3/4] lg:max-h-[min(640px,72vh)] rounded-[2rem] lg:rounded-[2.35rem] overflow-hidden ring-1 ring-stone-900/[0.1] ring-offset-4 ring-offset-cream/80 shadow-[0_40px_120px_-36px_rgba(22,20,18,0.38)] bg-stone-900">
            <div className="pointer-events-none absolute inset-0 z-[7] rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,253,249,0.06)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-copper/[0.18] via-transparent to-accent-plum/22 pointer-events-none z-[6]" />

            {heroImages.map((imageConfig, index) => (
              <div
                key={imageConfig.src}
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  index === currentImageIndex ? 'opacity-100 z-[3]' : 'opacity-0 z-[2]'
                }`}
              >
                <Image
                  src={imageConfig.src}
                  alt={
                    imageConfig.src.includes('/branding/')
                      ? 'Logo Elgor Beatz'
                      : `Session studio Elgor ${index + 1}`
                  }
                  fill
                  className={imageConfig.objectFit === 'contain' ? 'object-contain scale-[1.02]' : 'object-cover'}
                  style={{
                    objectPosition: imageConfig.objectPosition,
                    objectFit: imageConfig.objectFit,
                  }}
                  priority={index === 0}
                  quality={92}
                  sizes="(max-width: 1024px) 90vw, 42vw"
                />
                <div className={`absolute inset-0 ${imageConfig.overlay || ''}`} />
              </div>
            ))}

            {/* Réflexion glass coin */}
            <div className="absolute top-6 left-6 right-6 z-[8] flex justify-between items-start pointer-events-none">
              <span className="flex items-center gap-2 rounded-lg bg-cream-paper/88 backdrop-blur-md px-3 py-2 shadow-sm border border-stone-900/[0.09] ring-1 ring-foil/12">
                <Image
                  src="/branding/eb-monogram-black.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-7 sm:h-[1.75rem] w-auto opacity-95"
                  aria-hidden
                />
                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-stone-600 hidden sm:inline">
                  Signature
                </span>
              </span>
              <span className="rounded-full bg-ink/75 text-cream/95 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-cream/15">
                {String(currentImageIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
              </span>
            </div>

            {/* Indicateurs */}
            <div className="absolute bottom-6 left-1/2 z-[8] flex -translate-x-1/2 gap-2 rounded-full bg-cream-paper/55 px-3 py-2 backdrop-blur-md border border-stone-900/10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-[5px] rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentImageIndex
                      ? 'w-10 bg-accent-copper shadow-[0_0_12px_rgba(180,83,9,0.45)]'
                      : 'w-2 bg-stone-400/45 hover:bg-stone-500'
                  }`}
                  aria-label={`Visuel ${index + 1}`}
                  aria-pressed={index === currentImageIndex}
                />
              ))}
            </div>
          </div>

          {/* Halo décoratif */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.75rem] bg-[conic-gradient(from_210deg_at_50%_50%,rgba(201,162,39,0.14),transparent_42%,rgba(180,83,9,0.12),transparent_78%)] blur-3xl opacity-70 lg:opacity-95 animate-[gradient-shift_18s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* grille fine */}
      <div className="pointer-events-none absolute inset-0 z-[4] bg-[linear-gradient(to_right,rgba(22,20,18,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,20,18,0.028)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.55] mix-blend-multiply [mask-image:radial-gradient(ellipse_85%_75%_at_50%_45%,#000_38%,transparent_100%)]" />
    </section>
  );
}
