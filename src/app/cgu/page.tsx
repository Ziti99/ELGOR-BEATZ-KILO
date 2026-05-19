'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CGUPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-cream text-ink">
      <Header scrollY={scrollY} />

      {/* Hero Section - Minimalist */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-stone-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-stone-300"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-light">CGU</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-6 text-ink">
            Conditions Générales
            <br />
            <span className="text-stone-500">d&apos;Utilisation</span>
          </h1>
        </div>
      </section>

      <main className="py-32 px-4 sm:px-6 lg:px-8 border-t border-stone-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 text-stone-600 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">1. Objet</h2>
              <p className="text-stone-600">
                Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation 
                du site web elgorbeatz.com édité par Elgor Beatz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">2. Acceptation des CGU</h2>
              <p className="text-stone-600">
                L&apos;utilisation du site implique l&apos;acceptation pleine et entière des présentes CGU. 
                Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">3. Services proposés</h2>
              <p className="text-stone-600 mb-4">Le site propose :</p>
              <ul className="space-y-2 pl-6 list-disc text-stone-500">
                <li>Présentation des services de production musicale</li>
                <li>Formulaire de contact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">4. Utilisation du site</h2>
              <p className="text-stone-600 mb-4">L&apos;utilisateur s&apos;engage à :</p>
              <ul className="space-y-2 pl-6 list-disc text-stone-500">
                <li>Utiliser le site conformément à sa destination</li>
                <li>Ne pas porter atteinte aux droits de tiers</li>
                <li>Ne pas diffuser de contenu illicite</li>
                <li>Respecter la propriété intellectuelle</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">5. Propriété intellectuelle</h2>
              <p className="text-stone-600 mb-4">
                Tous les contenus du site (textes, images, vidéos, musiques, logos) sont 
                protégés par le droit d&apos;auteur et appartiennent à Elgor Beatz ou à ses partenaires.
              </p>
              <p className="text-stone-500">
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">6. Responsabilité</h2>
              <p className="text-stone-600">
                Elgor Beatz s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées, 
                mais ne peut garantir l&apos;exhaustivité, la précision ou l&apos;actualité des informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">7. Modification des CGU</h2>
              <p className="text-stone-600">
                Elgor Beatz se réserve le droit de modifier les présentes CGU à tout moment. 
                Les utilisateurs sont invités à les consulter régulièrement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">8. Contact</h2>
              <p className="text-stone-600">
                Pour toute question concernant les CGU, contactez-nous à : 
                <a href="mailto:contact@elgorbeatz.com" className="text-accent-copper hover:text-accent-copper/85 underline ml-1">
                  contact@elgorbeatz.com
                </a>
              </p>
            </section>

            <div className="pt-8 border-t border-stone-900/10">
              <p className="text-xs text-stone-400 font-light">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
