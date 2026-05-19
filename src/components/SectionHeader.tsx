'use client';

import { utils } from '@/config/design-system';

interface SectionHeaderProps {
  label: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ label, centered = false, className = '' }: SectionHeaderProps) {
  const containerClass = centered 
    ? `${utils.sectionHeaderCenter} ${className}`
    : `${utils.sectionHeader} ${className}`;

  return (
    <div className={containerClass}>
      <div className={utils.sectionHeaderLine}></div>
      <span className={utils.sectionHeaderLabel}>{label}</span>
      {centered && <div className={utils.sectionHeaderLine}></div>}
    </div>
  );
}

