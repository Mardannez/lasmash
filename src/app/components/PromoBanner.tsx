'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function PromoBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef?.current?.querySelectorAll('.section-fade');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AppImage
          src="/assets/images/smash/bacon.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="section-fade stagger-1">
            <h2 className="font-display text-section-title uppercase text-foreground mb-8">
              El secreto está en la costra.<br />
              <span className="text-primary">El sabor está en cada mordida.</span>
            </h2>
          </div>
          <div className="section-fade stagger-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-200 min-h-[52px]">
              
              Ver Menú
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}
