'use client';

import { utils, typography } from '@/config/design-system';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function PageHero({ 
  label, 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}: PageHeroProps) {
  const containerClass = centered 
    ? `${utils.hero} ${utils.containerCenter} ${className}`
    : `${utils.hero} ${utils.container} ${className}`;

  return (
    <section className={containerClass}>
      {label && (
        <div className={`flex items-center ${centered ? 'justify-center' : ''} gap-4 mb-8`}>
          <div className="h-px w-12 bg-stone-400/90"></div>
          <span className={utils.sectionHeaderLabel}>{label}</span>
          {centered && <div className="h-px w-12 bg-stone-400/90"></div>}
        </div>
      )}
      
      <h1 className={`${typography.h1} ${utils.textPrimary} ${centered ? 'text-center' : ''} mb-6`}>
        {title}
      </h1>
      
      {subtitle && (
        <p className={`${typography.body} ${utils.textTertiary} ${centered ? 'text-center mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </section>
  );
}

