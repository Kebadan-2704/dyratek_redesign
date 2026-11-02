import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  id?: string;
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  id
}: ContainerProps) {
  return (
    <Component id={id} className={`max-w-7xl mx-auto px-5 lg:px-16 w-full ${className}`}>
      {children}
    </Component>
  );
}

