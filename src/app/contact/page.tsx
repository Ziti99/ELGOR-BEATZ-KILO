'use client';

import { useState, useEffect } from 'react';
import { Header, Footer, PageHero, PageSection, PageContainer, SectionHeader } from '@/components';
import ContactForm from '@/components/ContactForm';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { utils, typography } from '@/config/design-system';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'contact@elgorbeatz.com',
      href: 'mailto:contact@elgorbeatz.com',
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+241 04 22 07 54',
      href: 'tel:+24104220754',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+241 04 22 07 54',
      href: 'https://wa.me/24104220754',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Gabon',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/elgorbeatz_off/',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/Elgor.beatz/',
    },
    {
      icon: FaYoutube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@elgorbeatz',
    },
  ];

  const collaborationTypes = [
    'Production musicale',
    'Composition originale',
    'Mixage & Mastering',
    'Direction artistique',
    'Collaboration artistique',
    'Autre',
  ];

  return (
    <div id="main-content" className="min-h-screen bg-cream text-ink">
      <Header scrollY={scrollY} />

      {/* Hero Section - Standardisé */}
      <PageHero
        label="Contact"
        title="Booking"
        subtitle="Prêt à collaborer ? Entrons en contact et travaillons ensemble sur votre projet musical"
        centered
      />

      {/* Contact Section - Standardisé */}
      <PageSection>
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className={`${utils.card} ${utils.cardPadding}`}>
              <SectionHeader label="Message" />
              <h2 className={`${typography.h3} ${utils.textPrimary} mb-6 tracking-tight`}>Envoyez un message</h2>
              <ContactForm collaborationTypes={collaborationTypes} />
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <SectionHeader label="Informations" />
                <h2 className={`${typography.h3} ${utils.textPrimary} mb-6 tracking-tight`}>Informations de contact</h2>
                <p className={`${typography.body} ${utils.textTertiary} mb-8 leading-relaxed`}>
                  Que vous soyez un artiste, un label ou un partenaire, je suis là pour discuter 
                  de votre projet. N&apos;hésitez pas à me contacter via le formulaire ou directement 
                  par email, téléphone ou WhatsApp.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 ${utils.card} group`}
                  >
                    <div className="w-12 h-12 border border-stone-900/15 flex items-center justify-center group-hover:border-accent-copper/35 transition-all duration-300 bg-cream-muted/40">
                      <method.icon className="text-stone-600 group-hover:text-accent-copper text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-light uppercase tracking-wider">{method.label}</p>
                      <p className="text-ink font-light">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`${typography.h6} ${utils.textPrimary} mb-4 uppercase tracking-wider`}>Réseaux sociaux</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${utils.card} flex items-center justify-center group`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-stone-600 group-hover:text-accent-copper text-xl" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`${utils.card} p-6`}>
                <h3 className={`${typography.h6} ${utils.textPrimary} mb-2 uppercase tracking-wider`}>Travaillons ensemble</h3>
                <p className={`${typography.bodySmall} ${utils.textTertiary} mb-4`}>
                  Discutons de votre projet et créons quelque chose d&apos;extraordinaire ensemble.
                </p>
                <a
                  href="https://wa.me/24104220754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${utils.buttonPrimary} inline-flex items-center gap-3 group`}
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </PageSection>

      <Footer />
    </div>
  );
}
