'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { whatsappUrl } from '@/data/contact';
import { burgerGroups, menuCategories, menuItems } from '@/data/menu';
import type { MenuItem } from '@/types/menu';

const menuSections = [
  ...burgerGroups.map(({ patties, label, title }) => ({
    id: patties,
    label,
    title: `${title} — ${label}`,
    items: menuItems.filter((item) => item.category === 'smash-burgers' && item.patties === patties),
  })),
  ...menuCategories.map(({ id, label }) => ({
    id,
    label,
    title: label,
    items: menuItems.filter((item) => item.category === id),
  })),
];

const filters = [{ id: 'all' as const, label: 'Todo' }, ...menuSections];
type MenuFilter = (typeof filters)[number]['id'];

function MenuCard({ item }: { item: MenuItem }) {
  const burger = item.category === 'smash-burgers' ? item : null;
  const badge = item.badge ?? (item.bestSeller ? 'Más vendido' : null);
  const orderMessage = item.price === null
    ? `¡Hola, LaSmash! Quisiera consultar el precio de ${item.name} para hacer un pedido.`
    : `¡Hola, LaSmash! Quisiera pedir ${item.name}.`;

  return (
    <article className="card-hover bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden image-zoom">
        <AppImage
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 left-3 z-10 badge-pill bg-primary text-primary-foreground">
            {badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 z-10 bg-background/90 text-primary font-display text-base px-3 py-1 rounded-full tracking-wide">
          {item.price === null ? 'Precio por consultar' : `L ${item.price}`}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {burger && (
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            {burger.patties === 1 ? '1 carne' : `${burger.patties} carnes`}
          </p>
        )}
        <h3 className="font-display text-xl uppercase text-card-foreground tracking-wide mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        {burger && (
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
            <strong>Su especialidad:</strong> {burger.specialty}
          </p>
        )}
        <div className="mt-auto pt-5">
          <a
            href={`${whatsappUrl}?text=${encodeURIComponent(orderMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${item.name} por WhatsApp`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MenuClient() {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>('all');
  const visibleSections = activeFilter === 'all'
    ? menuSections
    : menuSections.filter(({ id }) => id === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div
        role="group"
        aria-label="Filtrar el menú"
        className="sticky top-16 z-30 bg-background/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 border-b border-border mb-10"
      >
        <div className="flex flex-wrap gap-2">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={activeFilter === id}
              aria-controls="menu-products"
              onClick={() => setActiveFilter(id)}
              className={`category-tab ${activeFilter === id ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div id="menu-products" className="space-y-12">
        {visibleSections.map(({ id, title, items }) => (
          <section key={id} aria-labelledby={`menu-group-${id}`}>
            <h2 id={`menu-group-${id}`} className="font-display text-2xl sm:text-3xl uppercase text-foreground mb-5">
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => <MenuCard key={item.id} item={item} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
