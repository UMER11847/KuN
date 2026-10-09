/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './lib/router';
import { ThemeProvider } from './lib/theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { JournalIndexPage } from './pages/JournalIndexPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

function RouteView() {
  const { pathname } = useRouter();

  // Normalize path removing trailing slash (unless root)
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [normalizedPath]);

  // Route matching
  if (normalizedPath === '' || normalizedPath === '/') {
    return <HomePage />;
  }

  if (normalizedPath === '/about') {
    return <AboutPage />;
  }

  if (normalizedPath === '/services') {
    return <ServicesIndexPage />;
  }

  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.slice('/services/'.length);
    return <ServiceDetailPage slug={slug} />;
  }

  if (normalizedPath === '/experiences') {
    return <ExperiencesPage />;
  }

  if (normalizedPath === '/journal') {
    return <JournalIndexPage />;
  }

  if (normalizedPath.startsWith('/journal/')) {
    const slug = normalizedPath.slice('/journal/'.length);
    return <JournalDetailPage slug={slug} />;
  }

  if (normalizedPath === '/contact') {
    return <ContactPage />;
  }

  if (normalizedPath === '/privacy') {
    return <PrivacyPage />;
  }

  // Graceful fallback 404
  return (
    <div className="py-32 bg-[#F4F0E8] text-center space-y-6 max-w-xl mx-auto px-6">
      <span className="text-xs uppercase tracking-widest text-[#777B60]">404 · Uncharted</span>
      <h1 className="font-serif text-3xl sm:text-4xl text-[#252521]">
        Page Not Found
      </h1>
      <p className="text-sm text-[#575752] leading-relaxed">
        The requested path does not exist. We invite you to return to our homepage or explore our offerings.
      </p>
      <div className="pt-2">
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#632D35] text-[#F4F0E8] text-xs uppercase tracking-widest font-medium"
        >
          Return to Sanctuary
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <div className="min-h-screen flex flex-col bg-[#F4F0E8] text-[#252521] font-sans selection:bg-[#632D35] selection:text-[#F4F0E8] transition-colors duration-250">
          <Navbar />
          <main className="flex-1">
            <RouteView />
          </main>
          <Footer />
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}
