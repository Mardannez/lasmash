import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import AboutContent from '@/app/about/components/AboutContent';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Nosotros | LaSmash',
  description: 'Conoce la historia de LaSmash. Nacimos para hacer la mejor smash burger de Honduras.',
  openGraph: {
    title: 'Nosotros — LaSmash',
    description: 'Nacimos para hacer Smash. Conoce nuestra historia.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
