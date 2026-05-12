import React from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'brand-gradient text-black font-bold hover:brightness-110 brand-glow',
      ghost: 'text-white/60 hover:text-white hover:bg-white/5',
      outline: 'border border-white/10 hover:border-brand-green/40 hover:bg-brand-green/5 text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none text-center inline-flex items-center justify-center gap-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
