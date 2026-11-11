import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuHero from '@/app/menu/components/MenuHero';
import MenuClient from '@/app/menu/components/MenuClient';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Menú | LaSmash Smash Burgers',
  description: 'Elige tu Smash de una, dos o tres carnes. Explora las hamburguesas, combos, acompañantes, extras y bebidas de LaSmash.',
  openGraph: {
    title: 'Menú LaSmash',
    description: 'Ocho smash burgers con costra dorada y queso fundido. Elige tu favorita.',
    images: ['/assets/images/smash/hero.webp'],
  },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        <MenuHero />
        <MenuClient />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
