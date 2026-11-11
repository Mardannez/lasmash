import AppImage from '@/components/ui/AppImage';

const highlights = [
  'Carne aplastada al momento',
  'Costra dorada irresistible',
  'Queso fundido en cada capa',
];

export default function WhySmash() {
  return (
    <section className="py-16 sm:py-20 bg-muted" aria-labelledby="smash-technique">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <div>
            <h2 id="smash-technique" className="font-display text-section-title uppercase text-foreground mb-5">
              ¿Qué hace diferente a <span className="text-primary">una Smash?</span>
            </h2>
            <p className="text-lg font-bold text-foreground mb-4">
              No es solo una hamburguesa. Es una técnica.
            </p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Aplastamos bolas de carne fresca directamente sobre una plancha muy caliente. El contacto con el calor crea una costra dorada, crujiente y llena de sabor, mientras la carne se mantiene jugosa por dentro.
              </p>
              <p>
                Preparamos cada Smash al momento y la terminamos con queso fundido, pan suave ligeramente tostado, vegetales frescos y nuestras salsas.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <AppImage
              src="/assets/images/smash/plancha.webp"
              alt="Una prensa aplasta la carne de una smash burger sobre la plancha caliente"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <ul className="mt-8 grid sm:grid-cols-3 gap-3">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="font-bold text-sm text-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
