'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MentionsLegalesPage() {
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
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-light">Légal</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-6 text-ink">
            Mentions
            <br />
            <span className="text-stone-500">Légales</span>
          </h1>
        </div>
      </section>

      <main className="py-32 px-4 sm:px-6 lg:px-8 border-t border-stone-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 text-stone-600 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">1. Éditeur du site</h2>
              <p className="text-stone-600 mb-4">
                Le site <strong className="text-ink">elgorbeatz.com</strong> est édité par :
              </p>
              <div className="mt-6 pl-6 border-l border-stone-200 space-y-2 text-stone-500">
                <p><strong className="text-ink">Elgor Beatz</strong></p>
                <p>Compositeur et Directeur Artistique</p>
                <p>Gabon</p>
                <p>Email : contact@elgorbeatz.com</p>
                <p>Téléphone : +241 04 22 07 54</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">2. Hébergement</h2>
              <p className="text-stone-600 mb-4">
                Le site est hébergé par :
              </p>
              <div className="mt-6 pl-6 border-l border-stone-200 space-y-2 text-stone-500">
                <p>Vercel Inc.</p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789</p>
                <p>États-Unis</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">3. Propriété intellectuelle</h2>
              <p className="text-stone-600 mb-4">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) 
                est la propriété exclusive d&apos;Elgor Beatz, sauf mention contraire.
              </p>
              <p className="text-stone-500">
                Toute reproduction, représentation, modification, publication, adaptation de tout 
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                est interdite sans autorisation écrite préalable d&apos;Elgor Beatz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">4. Protection des données personnelles</h2>
              <p className="text-stone-600">
                Les informations collectées sur ce site sont traitées conformément à notre 
                <Link href="/confidentialite" className="text-accent-copper hover:text-accent-copper/85 underline ml-1">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">5. Cookies</h2>
              <p className="text-stone-600">
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. 
                Pour plus d&apos;informations, consultez notre 
                <Link href="/confidentialite" className="text-accent-copper hover:text-accent-copper/85 underline ml-1">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">6. Limitation de responsabilité</h2>
              <p className="text-stone-600">
                Elgor Beatz ne pourra être tenu responsable des dommages directs et indirects 
                causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site, et résultant 
                soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications, 
                soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">7. Droit applicable</h2>
              <p className="text-stone-600">
                Les présentes mentions légales sont régies par le droit gabonais. 
                En cas de litige, les tribunaux gabonais seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 text-ink tracking-tight">8. Contact</h2>
              <p className="text-stone-600">
                Pour toute question concernant les présentes mentions légales, 
                vous pouvez nous contacter à l&apos;adresse suivante : 
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
