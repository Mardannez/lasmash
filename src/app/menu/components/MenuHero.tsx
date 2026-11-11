import AppImage from '@/components/ui/AppImage';

export default function MenuHero() {
  return (
    <section className="border-b border-border bg-muted pt-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10">
        <div>
          <h1 className="font-display text-hero-lg uppercase leading-none text-foreground">
            Menú
          </h1>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            Elige tu Smash de una, dos o tres carnes.
          </p>
        </div>
        <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl bg-background sm:h-40 sm:w-56">
          <AppImage
            src="/assets/images/smash/tripleta.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 639px) 112px, 224px"
          />
        </div>
      </div>
    </section>
  );
}
