'use client';

/**
 * Motifs de masques stylisés — hommage graphique aux traditions sculptées du Gabon et d’Afrique centrale.
 * Créations SVG originales pour le site (pas des reproductions d’œuvres muséales).
 */

export function MaskMotifElongated({ className = 'h-20 w-14 text-ink' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 88" fill="currentColor" aria-hidden>
      <path
        opacity={0.92}
        d="M28 3c11 0 20 8 22 19l1 28c0 14-7 26-23 33-16-7-23-19-23-33l1-28C7 11 16 3 28 3Z"
      />
      <path className="fill-cream-paper/25" d="M14 26h28v8c0 4-6 8-14 8s-14-4-14-8v-8Z" />
      <ellipse className="fill-cream-paper/35" cx="20" cy="38" rx="3.5" ry="2" />
      <ellipse className="fill-cream-paper/35" cx="36" cy="38" rx="3.5" ry="2" />
      <path className="fill-cream-paper/22" d="M22 52h12l-2 14h-8l-2-14Z" />
    </svg>
  );
}

export function MaskMotifKotaInspired({ className = 'h-16 w-16 text-accent-copper' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="currentColor" aria-hidden>
      <path opacity={0.9} d="M36 4 68 36 36 68 4 36 36 4Z" />
      <path className="fill-espresso/55" d="M36 14 58 36 36 58 14 36 36 14Z" />
      <path
        className="fill-cream-paper/30"
        d="M36 22v28M22 36h28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle className="fill-cream-paper/40" cx="36" cy="36" r="5" />
    </svg>
  );
}

export function MaskMotifCalmOval({ className = 'h-20 w-[3.25rem] text-ink' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 52 84" fill="currentColor" aria-hidden>
      <path
        opacity={0.88}
        d="M26 6c12 0 22 10 22 28v22c0 16-10 28-22 28S4 72 4 56V34C4 16 14 6 26 6Z"
      />
      <path className="fill-cream-paper/28" d="M14 30c5-6 19-6 24 0v6c-6 5-18 5-24 0v-6Z" />
      <ellipse className="fill-cream-paper/35" cx="19" cy="44" rx="3" ry="2.2" />
      <ellipse className="fill-cream-paper/35" cx="33" cy="44" rx="3" ry="2.2" />
      <ellipse className="fill-cream-paper/20" cx="26" cy="58" rx="7" ry="3.5" />
    </svg>
  );
}

/** Petite rangée pour le hero — tradition & modernité */
export function HeroHeritageMasks() {
  return (
    <div className="hero-enter-delay-1 mb-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
      <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-stone-500">Patrimoine sculpté</span>
      <div className="flex items-end justify-center gap-4 opacity-[0.88]" aria-hidden>
        <MaskMotifElongated className="h-[4.25rem] w-[2.35rem] shrink-0 text-ink/85" />
        <MaskMotifKotaInspired className="h-[3.75rem] w-[3.75rem] shrink-0 text-accent-copper" />
        <MaskMotifCalmOval className="h-[4.25rem] w-[2.35rem] shrink-0 text-ink/80" />
      </div>
      <span className="max-w-[14rem] text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-stone-500 sm:text-left">
        Tradition · Modernité
      </span>
    </div>
  );
}

/** Ruban pleine largeur — page d’accueil */
export function TraditionModerniteRibbon() {
  return (
    <section
      className="relative border-y border-stone-900/[0.08] bg-gradient-to-r from-cream-muted/60 via-cream-paper/80 to-cream-muted/60 py-14 sm:py-16"
      aria-labelledby="trad-mod-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(201,162,39,0.06),transparent),radial-gradient(ellipse_70%_50%_at_85%_40%,rgba(107,33,168,0.05),transparent)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-8 lg:flex-row lg:gap-16 lg:px-12">
        <figure className="flex shrink-0 items-end gap-5 sm:gap-8">
          <MaskMotifElongated className="h-28 w-[4.5rem] text-ink sm:h-32 sm:w-20" />
          <MaskMotifKotaInspired className="h-24 w-24 text-accent-copper sm:h-28 sm:w-28" />
          <MaskMotifCalmOval className="h-28 w-[4.5rem] text-ink sm:h-32 sm:w-20" />
          <figcaption className="sr-only">
            Motifs graphiques inspirés des masques et des arts sculptés du Gabon — illustrations originales.
          </figcaption>
        </figure>
        <div className="max-w-xl text-center lg:text-left">
          <p id="trad-mod-heading" className="font-mono text-[10px] uppercase tracking-[0.35em] text-stone-500">
            Gabon — racines & studio
          </p>
          <h2 className="font-display mt-3 text-3xl font-normal tracking-tight text-ink sm:text-4xl">
            Entre <span className="italic text-accent-copper">tradition</span> et{' '}
            <span className="text-foil">modernité</span>
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-stone-600 sm:text-lg">
            Les formes des masques gabonais racontent mémoire, rituel et identité. Elgor Beatz dialogue avec ce
            patrimoine en le traduisant dans un son contemporain — productions actuelles, esthétique internationale,
            ancrage gabonais.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Bloc compact pour page À propos */
export function AboutHeritageAside({ className = '' }: { className?: string }) {
  return (
    <aside
      className={`rounded-2xl border border-stone-900/[0.1] bg-cream-paper/90 p-6 shadow-inner shadow-stone-900/5 ring-1 ring-foil/10 ${className}`}
      aria-label="Motifs inspirés du patrimoine sculpté gabonais"
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-stone-500">Identité visuelle</p>
      <div className="mt-4 flex items-end justify-center gap-6">
        <MaskMotifElongated className="h-24 w-14 text-ink/90" />
        <MaskMotifKotaInspired className="h-[5.25rem] w-[5.25rem] text-accent-copper" />
        <MaskMotifCalmOval className="h-24 w-14 text-ink/85" />
      </div>
      <p className="mt-5 text-center text-sm font-light leading-relaxed text-stone-600">
        Des silhouettes inspirées des arts traditionnels du Gabon — un pont entre héritage et création sonore
        d&apos;aujourd&apos;hui.
      </p>
    </aside>
  );
}
