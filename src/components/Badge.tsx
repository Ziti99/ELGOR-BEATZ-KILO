import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'lg' | 'md';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  rounded = 'full',
  className = '' 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200";
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    success: "bg-green-100 text-green-800 hover:bg-green-200",
    warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    danger: "bg-red-100 text-red-800 hover:bg-red-200",
    info: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
  };
  
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };
  
  const roundedClasses = {
    full: "rounded-full",
    lg: "rounded-lg",
    md: "rounded-md"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}>
      {children}
    </span>
  );
}

// Composants spécialisés pour les différents types de badges
export function GenreBadge({ children, ...props }: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="primary" {...props}>{children}</Badge>;
}

export function BpmBadge({ children, ...props }: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="danger" {...props}>{children}</Badge>;
}

export function KeyBadge({ children, ...props }: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="info" {...props}>{children}</Badge>;
}

export function PriceBadge({ children, ...props }: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="success" {...props}>{children}</Badge>;
}

export function DurationBadge({ children, ...props }: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="secondary" {...props}>{children}</Badge>;
}

export function StatusBadge({ children, status, ...props }: Omit<BadgeProps, 'variant'> & { status: 'active' | 'inactive' | 'pending' | 'completed' }) {
  const statusVariants = {
    active: 'success',
    inactive: 'danger',
    pending: 'warning',
    completed: 'info'
  } as const;
  
  return <Badge variant={statusVariants[status]} {...props}>{children}</Badge>;
}
