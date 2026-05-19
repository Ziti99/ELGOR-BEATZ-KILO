import { ReactNode } from "react";
import { FaArrowRight, FaPlay, FaPause, FaHeart, FaShoppingCart } from "react-icons/fa";

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'arrow-right' | 'play' | 'pause' | 'heart' | 'cart';
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  iconPosition = 'right',
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg"
  };

  const getIcon = () => {
    switch (icon) {
      case 'arrow-right':
        return <FaArrowRight className="ml-2" />;
      case 'play':
        return <FaPlay className="ml-2" />;
      case 'pause':
        return <FaPause className="ml-2" />;
      case 'heart':
        return <FaHeart className="ml-2" />;
      case 'cart':
        return <FaShoppingCart className="ml-2" />;
      default:
        return null;
    }
  };

  const iconElement = getIcon();
  const iconClasses = iconPosition === 'left' ? 'mr-2' : 'ml-2';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && iconPosition === 'left' && iconElement && (
        <span className={iconClasses.replace('ml-2', 'mr-2')}>
          {iconElement}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  );
}

// Composants spécialisés
export function PrimaryButton({ children, ...props }: Omit<ButtonProps, 'variant'>) {
  return <Button variant="primary" {...props}>{children}</Button>;
}

export function SecondaryButton({ children, ...props }: Omit<ButtonProps, 'variant'>) {
  return <Button variant="secondary" {...props}>{children}</Button>;
}

export function OutlineButton({ children, ...props }: Omit<ButtonProps, 'variant'>) {
  return <Button variant="outline" {...props}>{children}</Button>;
}

export function GhostButton({ children, ...props }: Omit<ButtonProps, 'variant'>) {
  return <Button variant="ghost" {...props}>{children}</Button>;
}

export function DangerButton({ children, ...props }: Omit<ButtonProps, 'variant'>) {
  return <Button variant="danger" {...props}>{children}</Button>;
}
