import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/app/components/Hero';
import FeaturedBurgers from '@/app/components/FeaturedBurgers';
import WhySmash from '@/app/components/WhySmash';
import PromoBanner from '@/app/components/PromoBanner';
import ContactSection from '@/app/components/ContactSection';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'LaSmash | Smash Burgers — Choluteca, Honduras',
  description: 'Aplastamos la carne. Multiplicamos el sabor. Descubre las smash burgers de LaSmash en Choluteca.',
  openGraph: {
    title: 'LaSmash | Smash Burgers',
    description: 'Carne aplastada al momento, costra dorada y queso fundido en cada capa.',
    images: ['/assets/images/smash/hero.webp'],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedBurgers />
        <WhySmash />
        <PromoBanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
