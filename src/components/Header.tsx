'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Menú', href: '/menu' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <AppLogo priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="nav-link-underline text-sm font-semibold text-foreground tracking-wide uppercase"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-sm tracking-widest px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-200 uppercase"
            >
              Pedir Ahora
            </Link>
          </div>

          {/* Mobile: Pedir + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/#contacto"
              className="inline-flex items-center bg-primary text-primary-foreground font-display text-xs tracking-widest px-4 py-2 rounded-full uppercase"
            >
              Pedir
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-lg"
          onClick={closeMenu}
        />
        <nav id="mobile-navigation" className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={closeMenu}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`px-6 py-5 font-display text-xl tracking-widest uppercase text-foreground border-b border-border hover:text-brand-ink aria-[current=page]:text-brand-ink transition-colors ${
                i === 0 ? 'border-t border-border' : ''
              }`}
            >
              {link?.label}
            </Link>
          ))}
          <div className="p-6">
            <Link
              href="/#contacto"
              onClick={closeMenu}
              className="block w-full text-center bg-primary text-primary-foreground font-display text-sm tracking-widest px-6 py-4 rounded-full uppercase"
            >
              Pedir Ahora
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
