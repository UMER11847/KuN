import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../../lib/router';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const { pathname } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'The KÜN Approach', href: '/about' },
    { label: 'What We Offer', href: '/services' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F4F0E8]/95 backdrop-blur-md border-b border-[#DAD3C7] shadow-[0_4px_20px_rgba(37,37,33,0.03)]'
            : 'bg-[#F4F0E8] border-b border-[#E6E0D6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display serif) */}
          <Link
            href="/"
            className="flex items-baseline gap-2.5 text-[#252521] hover:text-[#632D35] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              KÜN
            </span>
            <span className="text-xs font-serif text-[#777B60] italic tracking-widest hidden sm:inline-block">
              (كُنْ)
            </span>
          </Link>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium tracking-wide text-[#575752]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'text-[#632D35] font-semibold'
                      : 'hover:text-[#252521]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#632D35]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + minimal theme toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#F4F0E8] bg-[#632D35] hover:bg-[#4C2128] transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Make an Enquiry
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#252521] hover:text-[#632D35] focus:outline-none focus:ring-1 focus:ring-[#632D35]"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#252521]/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F4F0E8] shadow-2xl p-6 flex flex-col justify-between border-l border-[#DAD3C7]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#DAD3C7]">
                <Link href="/" className="font-serif text-2xl font-medium text-[#252521]">
                  KÜN
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#575752] hover:text-[#252521]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-8 pb-4 text-xs uppercase tracking-widest text-[#777B60]">
                Navigation
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-serif py-1 transition-colors ${
                        active
                          ? 'text-[#632D35] font-semibold'
                          : 'text-[#252521] hover:text-[#632D35]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 mt-6 border-t border-[#DAD3C7] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#777B60]">Theme Mode</span>
                <ThemeToggle variant="labelled" />
              </div>
            </div>

            <div className="pt-8 border-t border-[#DAD3C7] space-y-4">
              <Link
                href="/contact"
                className="w-full py-3 text-center text-sm font-medium text-[#F4F0E8] bg-[#632D35] hover:bg-[#4C2128] transition-colors block"
              >
                Make an Enquiry
              </Link>
              <div className="flex items-center justify-between text-xs text-[#575752] pt-2">
                <span>Karachi, Pakistan</span>
                <a
                  href="https://www.instagram.com/kun.exist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#632D35] hover:underline inline-flex items-center gap-1"
                >
                  @kun.exist <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
