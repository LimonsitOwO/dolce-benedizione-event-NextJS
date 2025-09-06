'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.primary }}
    >
      {children}
    </div>
  );
}