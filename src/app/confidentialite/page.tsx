'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConfidentialitePage() {
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
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-light">Confidentialité</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-6 text-ink">
            Politique de
            <br />
            <span className="text-stone-500">Confidentialité</span>
          </h1>
        </div>
      </section>

      <main className="py-32 px-4 sm:px-6 lg:px-8 border-t border-stone-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 text-stone-600 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">1. Introduction</h2>
              <p className="text-stone-600">
                Elgor Beatz s&apos;engage à protéger la confidentialité de vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">2. Données collectées</h2>
              <p className="text-stone-600 mb-4">Nous collectons les données suivantes :</p>
              <ul className="space-y-2 pl-6 list-disc text-stone-500">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (si fourni)</li>
                <li>Messages et communications</li>
                <li>Données de navigation (cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">3. Utilisation des données</h2>
              <p className="text-stone-600 mb-4">Vos données sont utilisées pour :</p>
              <ul className="space-y-2 pl-6 list-disc text-stone-500">
                <li>Répondre à vos demandes de contact</li>
                <li>Gérer les collaborations et projets</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des informations (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">4. Conservation des données</h2>
              <p className="text-stone-600">
                Vos données personnelles sont conservées uniquement le temps nécessaire 
                aux finalités pour lesquelles elles ont été collectées, conformément 
                aux obligations légales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">5. Vos droits</h2>
              <p className="text-stone-600 mb-4">Vous disposez des droits suivants :</p>
              <ul className="space-y-2 pl-6 list-disc text-stone-500 mb-4">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="text-stone-500">
                Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:contact@elgorbeatz.com" className="text-accent-copper hover:text-accent-copper/85 underline ml-1">
                  contact@elgorbeatz.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">6. Sécurité</h2>
              <p className="text-stone-600">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, 
                perte ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">7. Contact</h2>
              <p className="text-stone-600">
                Pour toute question concernant cette politique de confidentialité, 
                contactez-nous à : 
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
