'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header, Footer, HeroSection, ProductionsSection } from '@/components';
import Reveal from '@/components/Reveal';
import { TraditionModerniteRibbon } from '@/components/GabonHeritageMotifs';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-cream text-ink relative scroll-mt-28">
      <Header scrollY={scrollY} />

      <HeroSection />

      <TraditionModerniteRibbon />

    <section className="relative py-36 md:py-44 px-4 sm:px-6 lg:px-8 border-t border-stone-900/[0.07] overflow-hidden">
        <div className="absolute top-0 right-0 w-[min(560px,92vw)] h-[min(560px,92vw)] bg-[radial-gradient(circle,rgba(201,162,39,0.07),transparent_62%),radial-gradient(circle,rgba(107,33,168,0.05),transparent_58%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal delayMs={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-16 bg-gradient-to-r from-foil/70 via-accent-copper/45 to-transparent" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-stone-500">
                    À propos
                  </span>
                </div>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-ink">
                  L&apos;univers
                  <br />
                  <span className="italic text-accent-copper">Elgor Beatz</span>
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed font-light max-w-xl">
                  Studio au Gabon : une pratique ancrée dans la culture locale et ouverte au monde. Tradition des
                  racines, exigence du son moderne — chaque production assume les deux.
                </p>
                <p className="text-lg text-stone-500 leading-relaxed font-light max-w-xl">
                  Créativité, technique et collaborations : découvrez le processus derrière des morceaux pensés pour
                  durer, entre mémoire gabonaise et esthétique actuelle.
                </p>
              </div>

              <Reveal delayMs={120} className="lg:justify-self-end w-full">
                <div className="relative aspect-[4/3] border border-stone-900/[0.09] bg-cream-paper p-3 sm:p-4 shadow-lux rounded-[1.75rem] ring-1 ring-foil/[0.1]">
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-foil/18 via-transparent to-accent-plum/14 opacity-90 pointer-events-none rounded-[1.75rem]" />
                  <div className="relative h-full w-full overflow-hidden border border-stone-900/[0.08] rounded-xl shadow-inner shadow-white/30">
                    <div className="grid grid-cols-2 gap-1 h-full min-h-[280px]">
                      <Image
                        src="/Highlights/IMG_2050.JPEG"
                        alt="Elgor Beatz Studio"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-92 hover:opacity-100 transition-opacity duration-700"
                      />
                      <Image
                        src="/Highlights/IMG_2161.JPEG"
                        alt="Elgor Beatz Production"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-92 hover:opacity-100 transition-opacity duration-700"
                      />
                      <Image
                        src="/Highlights/IMG_2163.JPEG"
                        alt="Elgor Beatz Session"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-92 hover:opacity-100 transition-opacity duration-700"
                      />
                      <Image
                        src="/Highlights/IMG_2167.JPEG"
                        alt="Elgor Beatz Live"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover opacity-92 hover:opacity-100 transition-opacity duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductionsSection />

      <Footer />
    </div>
  );
}
