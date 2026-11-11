import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MenuHero() {
  return (
    <section className="relative pt-16 pb-0 overflow-hidden">
      <div className="relative h-52 sm:h-64 flex items-end">
        {/* Background */}
        <div className="absolute inset-0">
          <AppImage
            src="/assets/images/smash/hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-[center_60%]"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-2">
            LaSmash
          </span>
          <h1 className="font-display text-hero-lg uppercase text-foreground leading-none">
            Menú
          </h1>
          <p className="text-muted-foreground mt-2 text-sm font-medium tracking-wide">
            Elige tu Smash de una, dos o tres carnes.
          </p>
        </div>
      </div>
    </section>);

}
