import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  return (
    <section className="on-charcoal relative pt-16 min-h-[60vh] flex items-end overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1649008464137-6117159c9d64"
          alt="Smash burger being pressed on hot flat grill, smoke rising, dark industrial kitchen atmosphere"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-4">
          Nuestra Historia
        </span>
        <h1 className="font-display text-hero-xl uppercase text-foreground leading-none max-w-3xl">
          Nacimos para<br />
          <span className="text-primary">hacer Smash.</span>
        </h1>
      </div>
    </section>);

}
