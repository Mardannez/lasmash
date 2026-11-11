'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { featuredItems } from '@/data/menu';

export default function FeaturedBurgers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef?.current?.querySelectorAll('.section-fade');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-fade stagger-1 mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-display text-section-title uppercase text-foreground">
            Las más <span className="text-primary">buscadas</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, i) => (
            <article
              key={item.id}
              className={`section-fade stagger-${i + 1} card-hover bg-card rounded-2xl overflow-hidden border border-border group`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden image-zoom">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="badge-pill bg-primary text-primary-foreground">
                      {item.badge}
                    </span>
                  </div>
                )}
                {/* Price overlay */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="bg-background/90 text-primary font-display text-lg px-3 py-1 rounded-full tracking-wide">
                    {item.price === null ? 'Precio por consultar' : `L ${item.price}`}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl uppercase text-card-foreground mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="section-fade mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide hover:gap-3 transition-all duration-200"
          >
            Ver Menú Completo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
