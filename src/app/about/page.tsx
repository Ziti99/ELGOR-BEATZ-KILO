'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer, SectionHeader, PageSection, PageContainer } from '@/components';
import { AboutHeritageAside } from '@/components/GabonHeritageMotifs';
import { FaMusic, FaHeadphones, FaUsers, FaHeart, FaArrowRight } from 'react-icons/fa';
import { utils, typography, spacing } from '@/config/design-system';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: FaMusic,
      title: 'Créativité',
      description: 'Chaque production est une œuvre unique, façonnée avec passion et innovation.',
    },
    {
      icon: FaHeadphones,
      title: 'Excellence',
      description: 'Qualité professionnelle et attention aux détails dans chaque projet.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Partenaire artistique dédié à la réalisation de votre vision musicale.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'L\'amour de la musique guide chaque composition et production.',
    },
  ];

  const services = [
    {
      title: 'Composition',
      description: 'Création de compositions originales adaptées à votre projet artistique.',
    },
    {
      title: 'Production',
      description: 'Production complète de vos morceaux avec équipement professionnel.',
    },
    {
      title: 'Direction Artistique',
      description: 'Accompagnement dans le développement de votre identité artistique.',
    },
    {
      title: 'Mixage & Mastering',
      description: 'Finalisation professionnelle pour un rendu optimal de vos productions.',
    },
  ];

  return (
    <div id="main-content" className="min-h-screen bg-cream text-ink">
      <Header scrollY={scrollY} />

      {/* Hero Section - Standardisé */}
      <section className={`${utils.hero} ${utils.container}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-cream-paper border border-stone-900/12 overflow-hidden shadow-[0_28px_80px_-32px_rgba(28,25,23,0.15)]">
              <Image 
                src="/Highlights/IMG_2050.JPEG" 
                alt="Elgor Beatz" 
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cream/50 via-transparent to-accent-plum/10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <SectionHeader label="À propos" />
            
            <h1 className={`${typography.h1} ${utils.textPrimary}`}>
              Créateur de sons,
              <br />
              <span className="text-accent-copper italic">architecte d&apos;émotions</span>
            </h1>
            
            <div className={`space-y-6 ${typography.bodyLarge} ${utils.textSecondary} leading-relaxed`}>
              <p>
                Compositeur et directeur artistique passionné, je transforme les idées musicales en productions 
                professionnelles. Mon approche allie créativité, technique et sensibilité artistique pour donner 
                vie à votre vision musicale.
              </p>
              <p className={utils.textTertiary}>
                Elgor Beatz n&apos;est pas qu&apos;un label, c&apos;est un partenaire artistique dédié à l&apos;excellence. 
                Chaque projet est une collaboration unique où votre identité artistique rencontre mon expertise 
                technique et créative.
              </p>
              <p className={utils.textTertiary}>
                Ancré au Gabon, mon travail puise dans les résonances du pays — dont la richesse des arts sculptés et
                masqués — tout en embrassant les codes du studio contemporain. Tradition et modernité ne s&apos;opposent
                pas : elles se nourrissent.
              </p>
              <p className={utils.textTertiary}>
                Avec des années d&apos;expérience en production, mixage et mastering, je m&apos;engage à des sons qui
                résonnent et inspirent — toujours avec cette double boussole.
              </p>
              <AboutHeritageAside className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Standardisé */}
      <PageSection>
        <PageContainer>
          <SectionHeader label="Valeurs" />
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${spacing.gap.md}`}>
            {values.map((value, index) => (
              <div key={index} className={`${utils.card} ${utils.cardPadding}`}>
                <div className="w-12 h-12 border border-stone-900/15 flex items-center justify-center mb-6 bg-cream-muted/50">
                  <value.icon className="text-xl text-accent-copper" />
                </div>
                <h3 className={`${typography.h5} ${utils.textPrimary} mb-4`}>{value.title}</h3>
                <p className={`${typography.bodySmall} ${utils.textTertiary} leading-relaxed`}>{value.description}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageSection>

      {/* Signatures & logos */}
      <PageSection noBorder>
        <PageContainer>
          <SectionHeader label="Signatures" centered />
          <p className={`${typography.body} ${utils.textTertiary} text-center mb-14 max-w-2xl mx-auto`}>
            Monogrammes, wordmarks et références typographiques — une identité volontairement épurée pour la scène et
            les supports numériques.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-12">
            <figure className="flex flex-col items-center gap-3">
              <div className="rounded-2xl border border-stone-900/10 bg-cream-paper px-6 py-5 shadow-inner shadow-stone-900/5">
                <Image
                  src="/branding/eb-monogram-black.png"
                  alt="Monogramme EB"
                  width={120}
                  height={120}
                  className="h-20 sm:h-[5.25rem] w-auto object-contain"
                />
              </div>
              <figcaption className={`${typography.labelSmall} text-stone-400`}>Monogramme EB</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-3">
              <div className="rounded-2xl border border-stone-900/10 bg-cream-paper px-6 py-4 shadow-inner shadow-stone-900/5">
                <Image
                  src="/branding/wordmark-stack-black.png"
                  alt="Elgor Beatz"
                  width={280}
                  height={120}
                  className="h-16 sm:h-[4.75rem] w-auto object-contain"
                />
              </div>
              <figcaption className={`${typography.labelSmall} text-stone-400`}>Stack wordmark</figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
            <div className={`${utils.card} ${utils.cardPadding} flex justify-center items-center bg-cream-paper`}>
              <Image
                src="/branding/ref-typography-eb.png"
                alt="Référence typo — EB"
                width={360}
                height={120}
                className="h-auto w-full max-h-28 object-contain opacity-95"
              />
            </div>
            <div className={`${utils.card} ${utils.cardPadding} flex justify-center items-center bg-cream-paper`}>
              <Image
                src="/branding/ref-typography-elgor-beatz.png"
                alt="Référence typo — Elgor Beatz"
                width={360}
                height={120}
                className="h-auto w-full max-h-28 object-contain opacity-95"
              />
            </div>
          </div>
        </PageContainer>
      </PageSection>

      {/* Services Section - Standardisé */}
      <PageSection background="secondary">
        <PageContainer>
          <SectionHeader label="Services" />
          <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.md}`}>
            {services.map((service, index) => (
              <div key={index} className={`${utils.card} ${utils.cardPadding}`}>
                <h3 className={`${typography.h4} ${utils.textPrimary} mb-4`}>{service.title}</h3>
                <p className={`${typography.body} ${utils.textTertiary} leading-relaxed`}>{service.description}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </PageSection>

      {/* CTA Section - Standardisé */}
      <PageSection>
        <PageContainer size="md" centered>
          <h2 className={`${typography.h2} ${utils.textPrimary} mb-6`}>
            Travaillons ensemble
          </h2>
          <p className={`${typography.body} ${utils.textTertiary} mb-8 max-w-2xl mx-auto`}>
            Prêt à donner vie à votre projet musical ? Contactez-moi pour discuter de votre vision.
          </p>
          <Link href="/contact" className={`${utils.buttonPrimary} inline-flex items-center gap-3 group`}>
            Entrer en contact
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </PageContainer>
      </PageSection>

      <Footer />
    </div>
  );
}
