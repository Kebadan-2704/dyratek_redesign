import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  showPip?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  showArrow = false,
  showPip = false,
  type = 'button',
  disabled = false,
  external = false
}: ButtonProps) {
  // Size styles
  const sizeStyles = {
    sm: 'text-[11px] py-2.5 px-4 tracking-[0.06em]',
    md: 'text-[12px] py-3.5 px-7 tracking-[0.06em]',
    lg: 'text-[13px] py-4 px-9 tracking-[0.08em]'
  }[size];

  // Variant styles - 0px radius strictly enforced
  const variantStyles = {
    primary:
      'bg-[#123D32] text-[#F4F1E9] border border-[#123D32] hover:bg-[#1b4f42] hover:border-[#1b4f42] active:bg-[#0A261F]',
    secondary:
      'bg-transparent text-[#123D32] border border-[#123D32] hover:bg-[#123D32] hover:text-[#F4F1E9] active:bg-[#0A261F]',
    accent:
      'bg-[#C83B35] text-white border border-[#C83B35] hover:bg-[#b22b27] hover:border-[#b22b27] active:bg-[#99221f]',
    ghost:
      'bg-transparent text-[#123D32] border border-transparent hover:bg-[#ECE8DF] hover:border-[#E5E2DA]'
  }[variant];

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-mono uppercase font-semibold transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed group';

  const fullClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {showPip && (
        <span
          className="w-1.5 h-1.5 bg-[#C83B35] inline-block flex-shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {showArrow && (
        <span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={fullClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClassName}
    >
      {content}
    </button>
  );
}

