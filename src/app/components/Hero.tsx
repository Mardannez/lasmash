'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = el.querySelector('.hero-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-end sm:items-center justify-center overflow-hidden bg-background">
      
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 will-change-transform">
        <AppImage
          src="/assets/images/smash/hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-[72%_center] lg:object-center"
          sizes="100vw" />
        
      </div>

      {/* Dark gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/10 z-10 sm:via-background/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/25 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">
              LaSmash · Choluteca, Honduras
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-section-title text-foreground uppercase leading-[1.05] mb-5">
            Aplastamos la carne.<br />
            <span className="text-primary">Multiplicamos el sabor.</span>
          </h1>

          {/* Sub-tagline */}
          <p className="text-base sm:text-lg text-foreground/90 max-w-lg leading-relaxed mb-8">
            No hacemos hamburguesas comunes. Hacemos Smash.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-200 min-h-[52px]">
              
              Ver Menú
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center border-2 border-foreground/30 text-foreground font-display text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-200 min-h-[52px]">
              
              Pedir Ahora
            </Link>
          </div>
        </div>
      </div>

    </section>);

}
