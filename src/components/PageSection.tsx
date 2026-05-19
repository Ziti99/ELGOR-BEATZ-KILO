'use client';

import { utils } from '@/config/design-system';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
  noBorder?: boolean;
  background?: 'default' | 'secondary';
}

export default function PageSection({ 
  children, 
  className = '', 
  large = false,
  noBorder = false,
  background = 'default'
}: PageSectionProps) {
  const sectionClass = large ? utils.sectionLarge : utils.section;
  const borderClass = noBorder ? '' : 'border-t border-stone-900/8';
  const bgClass = background === 'secondary' ? 'bg-cream-muted/70' : '';
  
  return (
    <section className={`${sectionClass} ${borderClass} ${bgClass} ${className}`}>
      {children}
    </section>
  );
}

