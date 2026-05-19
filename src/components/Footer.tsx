import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaYoutube, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { href: "https://www.instagram.com/elgorbeatz_off/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/Elgor.beatz/", icon: FaFacebook, label: "Facebook" },
  { href: "https://www.tiktok.com/@elgorbeatz5", icon: FaTiktok, label: "TikTok" },
  { href: "https://wa.me/24104220754", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://www.youtube.com/@elgorbeatz", icon: FaYoutube, label: "YouTube" },
];

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Production de beats",
  "Ingénierie audio", 
  "Mixage & Mastering",
  "Développement artistique",
  "Licences musicales",
  "Compositions sur mesure",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#25211e] via-espresso to-[#0c0b0a] text-cream overflow-hidden border-t border-white/[0.06]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foil/40 to-transparent"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Main footer content with enhanced layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-20">
          
          {/* Marque */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-start gap-6">
              <Link href="/" className="inline-flex flex-col gap-6 group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent-copper focus-visible:ring-offset-2 focus-visible:ring-offset-ink" aria-label="Elgor Beatz — Retour à l&apos;accueil">
                <div className="flex h-24 w-24 sm:h-[5.75rem] sm:w-[5.75rem] shrink-0 items-center justify-center rounded-2xl border border-cream/18 bg-cream shadow-[inset_0_1px_0_rgba(255,253,249,0.7)] ring-1 ring-foil/15 transition-[border-color,box-shadow] duration-300 group-hover:border-foil/40">
                  <Image
                    src="/branding/eb-monogram-black.png"
                    alt=""
                    width={76}
                    height={76}
                    className="h-[3rem] sm:h-[3.35rem] w-auto object-contain"
                    aria-hidden
                  />
                </div>
                <Image
                  src="/branding/wordmark-stack-white.png"
                  alt="Elgor Beatz"
                  width={280}
                  height={140}
                  className="h-24 sm:h-28 md:h-[7.25rem] w-auto max-w-[min(100%,17rem)] object-contain object-left opacity-98 transition-opacity group-hover:opacity-100"
                />
              </Link>
              <div className="hidden sm:block pt-3">
                <Image
                  src="/branding/wordmark-line-white.png"
                  alt=""
                  width={200}
                  height={36}
                  className="h-7 md:h-8 w-auto max-w-[200px] object-contain object-left opacity-70"
                  aria-hidden
                />
              </div>
            </div>
            
            <p className="text-cream/68 text-base sm:text-lg leading-relaxed max-w-sm font-light">
              Services professionnels de production musicale et d&apos;ingénierie audio. 
              Transformez votre vision musicale en réalité grâce à une technologie de pointe et une expertise reconnue.
            </p>
            
            {/* Enhanced Contact info with better icons and spacing */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base sm:text-lg text-cream/68 group">
                <div className="w-10 h-10 border border-cream/22 flex items-center justify-center group-hover:border-cream/35 transition-all duration-300">
                  <FaPhone className="text-cream/68 group-hover:text-cream text-sm" />
                </div>
                <a href="tel:+24104220754" className="hover:text-cream transition-colors duration-300 font-light">
                  +241 04 22 07 54
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-base sm:text-lg text-cream/68 group">
                <div className="w-10 h-10 border border-cream/22 flex items-center justify-center group-hover:border-cream/35 transition-all duration-300">
                  <FaEnvelope className="text-cream/68 group-hover:text-cream text-sm" />
                </div>
                <a href="mailto:contact@elgorbeatz.com" className="hover:text-cream transition-colors duration-300 font-light">
                  contact@elgorbeatz.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-base sm:text-lg text-cream/68 group">
                <div className="w-10 h-10 border border-cream/22 flex items-center justify-center group-hover:border-cream/35 transition-all duration-300">
                  <FaMapMarkerAlt className="text-cream/68 group-hover:text-cream text-sm" />
                </div>
                <span className="font-light">Gabon</span>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation section */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="font-mono text-cream text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-3 uppercase tracking-[0.28em] text-cream/95">
              <div className="h-px w-8 bg-gradient-to-r from-foil/50 to-transparent"></div>
              Navigation
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="block text-cream/68 hover:text-cream transition-all duration-300 text-sm sm:text-base font-light group uppercase tracking-wider"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-copper transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Services section */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="font-mono text-cream text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-3 uppercase tracking-[0.28em] text-cream/95">
              <div className="h-px w-8 bg-gradient-to-r from-foil/50 to-transparent"></div>
              Services
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {serviceLinks.map((service) => (
                <div key={service} className="flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-cream/45 rounded-full group-hover:bg-accent-copper transition-colors duration-300"></div>
                  <span className="text-cream/68 text-sm sm:text-base group-hover:text-cream transition-colors duration-300 font-light">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Social media and newsletter section */}
          <div className="space-y-6 sm:space-y-8">
            <h4 className="font-mono text-cream text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-3 uppercase tracking-[0.28em] text-cream/95">
              <div className="h-px w-8 bg-gradient-to-r from-foil/50 to-transparent"></div>
              Réseaux sociaux
            </h4>
            
            {/* Enhanced Social icons - Icons only, no text */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-cream/18 hover:border-foil/45 bg-white/[0.04] hover:bg-white/[0.07] hover:shadow-[0_0_24px_rgba(201,162,39,0.12)] transition-all duration-300 flex items-center justify-center"
                  title={label}
                >
                  <Icon className="text-xl sm:text-2xl text-cream/68 group-hover:text-cream group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Enhanced Newsletter signup */}
            <div className="space-y-4 sm:space-y-5">
              <h5 className="font-mono text-cream text-xs sm:text-sm uppercase tracking-[0.28em] text-cream/90">Newsletter</h5>
              <p className="text-cream/68 text-sm font-light">Recevez les derniers beats et conseils de production</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-md bg-white/[0.05] border border-cream/18 text-cream placeholder-cream/45 focus:outline-none focus:border-foil/40 focus:ring-1 focus:ring-foil/25 transition-all duration-300 text-sm font-light"
                />
                <button className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-md bg-gradient-to-r from-cream via-cream-muted to-cream text-ink border border-cream/90 hover:brightness-[1.03] hover:shadow-[0_12px_32px_-12px_rgba(201,162,39,0.35)] transition-all duration-300 text-sm font-mono tracking-[0.18em] uppercase">
                  S&apos;abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom section with better separation */}
        <div className="pt-8 sm:pt-12 border-t border-cream/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-cream/68 text-sm text-center sm:text-left font-light">
              © {new Date().getFullYear()} Elgor Beatz. Tous droits réservés.
            </div>
            
            {/* Enhanced Policy links with better spacing */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8 text-sm text-cream/68">
              <Link href="/mentions-legales" className="hover:text-cream transition-colors duration-300 font-light uppercase tracking-wider">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-cream transition-colors duration-300 font-light uppercase tracking-wider">
                Confidentialité
              </Link>
              <Link href="/cgu" className="hover:text-cream transition-colors duration-300 font-light uppercase tracking-wider">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Back to top button with better positioning and design */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 sm:bottom-10 right-8 sm:right-10 w-12 h-12 rounded-lg border border-cream/22 hover:border-foil/50 bg-espresso/92 backdrop-blur-md text-cream transition-all duration-300 flex items-center justify-center z-40 group hover:shadow-[0_8px_28px_-8px_rgba(201,162,39,0.25)]"
        aria-label="Retour en haut"
      >
        <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}
