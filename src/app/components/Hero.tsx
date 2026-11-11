import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Hero() {
  return (
    <section className="bg-background pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-ink">
            Choluteca, Honduras
          </p>
          <h1 className="mb-5 font-display text-section-title uppercase leading-[1.08] text-foreground">
            Aplastamos la carne.{' '}
            <span className="block text-brand">Multiplicamos el sabor.</span>
          </h1>
          <p className="mb-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            No hacemos hamburguesas comunes. Hacemos Smash.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver menú
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
            >
              Pedir ahora
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <AppImage
            src="/assets/images/smash/doble.webp"
            alt="La Doble Smash con queso americano fundido, pepinillos y cebolla"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 600px"
          />
        </div>
      </div>
    </section>
  );
}
