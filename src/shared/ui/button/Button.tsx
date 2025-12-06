import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-primary hover:bg-primary/80 text-black font-medium',
  secondary: 'bg-secondary hover:bg-secondary/80 text-white font-medium',
  outline: 'border-2 border-primary text-primary hover:bg-primary/10 font-medium',
  ghost: 'text-primary hover:bg-primary/10 font-medium',
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'rounded-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
}

