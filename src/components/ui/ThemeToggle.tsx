import React from 'react';
import { useTheme } from '../../lib/theme';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'minimal' | 'labelled';
  className?: string;
}

export function ThemeToggle({ variant = 'minimal', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to warm light theme' : 'Switch to quiet dark theme'}
      title={isDark ? 'Switch to warm light theme' : 'Switch to quiet dark theme'}
      className={`relative inline-flex items-center gap-2 p-2 text-xs font-medium transition-colors hover:text-[#632D35] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#632D35] ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-[#DAD3C7] hover:text-[#EDE8DE] transition-transform hover:rotate-45" />
          {variant === 'labelled' && (
            <span className="whitespace-nowrap text-[#DAD3C7] text-xs">Light</span>
          )}
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-[#575752] hover:text-[#252521] transition-transform hover:-rotate-12" />
          {variant === 'labelled' && (
            <span className="whitespace-nowrap text-[#575752] text-xs">Dark</span>
          )}
        </>
      )}
    </button>
  );
}
