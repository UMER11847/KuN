import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

interface RouterContextType {
  pathname: string;
  search: string;
  push: (href: string) => void;
  replace: (href: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: window.location.pathname,
  search: window.location.search,
  push: () => {},
  replace: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [search, setSearch] = useState(window.location.search);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      setSearch(window.location.search);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (href: string) => {
    const [path, queryString] = href.split('?');
    if (path !== window.location.pathname || (queryString ? `?${queryString}` : '') !== window.location.search) {
      window.history.pushState(null, '', href);
      startTransition(() => {
        setPathname(path);
        setSearch(queryString ? `?${queryString}` : '');
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const replace = (href: string) => {
    const [path, queryString] = href.split('?');
    window.history.replaceState(null, '', href);
    startTransition(() => {
      setPathname(path);
      setSearch(queryString ? `?${queryString}` : '');
    });
  };

  return (
    <RouterContext.Provider value={{ pathname, search, push, replace }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className, onClick, ...props }: LinkProps) {
  const { push } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Let browser handle external links, open in new tab (Ctrl/Cmd click), or downloads
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
