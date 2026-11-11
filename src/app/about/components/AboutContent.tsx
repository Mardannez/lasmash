'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const processSteps = [
{
  step: '01',
  title: 'Plancha Caliente',
  description: 'La plancha a temperatura máxima. Sin trucos, sin atajos.'
},
{
  step: '02',
  title: 'El Smash',
  description: 'La carne se aplasta con fuerza directa. Ese momento lo cambia todo.'
},
{
  step: '03',
  title: 'El Sellado',
  description: 'Una costra intensa se forma en segundos. Ahí está el sabor.'
},
{
  step: '04',
  title: 'El Queso',
  description: 'Queso americano sobre la carne caliente. Se derrite solo.'
},
{
  step: '05',
  title: 'El Montaje',
  description: 'Bun, carne, ingredientes. En orden. Sin apuro. Con criterio.'
}];


export default function AboutContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
      {/* Intro paragraph */}
      <div className="section-fade stagger-1 max-w-2xl py-14 border-b border-border">
        <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed font-medium">
          En LaSmash creemos que una buena hamburguesa no necesita complicarse. Buena carne, una plancha bien caliente, ingredientes que funcionan juntos y mucho sabor.
        </p>
      </div>

      {/* Nuestra Historia */}
      <div className="section-fade stagger-1 py-16 border-b border-border grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-4">
            01
          </span>
          <h2 className="font-display text-section-title uppercase text-foreground mb-6">
            Nuestra<br />Historia
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              LaSmash nació de una obsesión simple: hacer la mejor smash burger de Honduras. Sin complicaciones, sin menús kilométricos, sin pretensiones.
            </p>
            <p>
              Empezamos con una plancha, carne fresca y la convicción de que el sabor auténtico no necesita adornos. Lo que quedó es lo que ves hoy.
            </p>
            <p>
              Cada hamburguesa que sale de nuestra cocina es la misma que nos enamoró desde el principio. El proceso no cambia. La calidad tampoco.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <AppImage
            src="https://images.unsplash.com/photo-1599474151439-9f3c4e972009"
            alt="Smash burger close-up with sesame bun and melted cheese, warm golden tones, dark background"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw" />
          
        </div>
      </div>

      {/* Nuestra Carne */}
      <div className="section-fade stagger-2 py-16 border-b border-border grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_129c80ad5-1768472940917.png"
            alt="Raw beef patty being smashed on hot grill surface, dramatic dark kitchen lighting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw" />
          
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-4">
            02
          </span>
          <h2 className="font-display text-section-title uppercase text-foreground mb-6">
            Nuestra<br />Carne
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              La carne es el protagonista. No el bun, no la salsa, no los extras. La carne.
            </p>
            <p>
              Trabajamos con carne fresca de calidad. Nada congelado, nada procesado. Cada pieza se forma y va directo a la plancha.
            </p>
            <p>
              El smash no es solo una técnica. Es una decisión de sabor. Más superficie de contacto con el hierro caliente significa más costra, más Maillard, más intensidad en cada mordida.
            </p>
          </div>
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-xl">
              <span className="font-display text-3xl text-primary block">100%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-bold mt-1 block">Carne fresca</span>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl">
              <span className="font-display text-3xl text-primary block">0°</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-bold mt-1 block">Congelados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestro Proceso */}
      <div className="section-fade stagger-3 py-16">
        <div className="mb-12">
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase block mb-4">
            03
          </span>
          <h2 className="font-display text-section-title uppercase text-foreground">
            Nuestro<br />Proceso
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {processSteps?.map((step) =>
          <div
            key={step?.step}
            className="relative p-5 bg-card border border-border rounded-xl group hover:border-primary/50 transition-colors duration-300">
            
              <span className="font-display text-5xl text-foreground/5 absolute top-3 right-4 select-none">
                {step?.step}
              </span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">
                Paso {step?.step}
              </span>
              <h3 className="font-display text-base uppercase text-card-foreground mb-2 tracking-wide">
                {step?.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step?.description}
              </p>
              <div className="mt-4 w-6 h-0.5 bg-primary/30 group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
            </div>
          )}
        </div>
      </div>
    </div>);

}