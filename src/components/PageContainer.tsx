'use client';

import { utils } from '@/config/design-system';

interface PageContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  className?: string;
}

export default function PageContainer({ 
  children, 
  size = 'lg',
  centered = false,
  className = '' 
}: PageContainerProps) {
  const sizeClass = utils.container.replace('max-w-7xl', `max-w-${size === 'sm' ? '4xl' : size === 'md' ? '6xl' : '7xl'}`);
  const containerClass = centered 
    ? `${sizeClass} mx-auto text-center ${className}`
    : `${sizeClass} mx-auto ${className}`;

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

