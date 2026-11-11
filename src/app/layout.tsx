import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Anton, Manrope } from 'next/font/google';
import '../styles/tailwind.css';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'LaSmash | Smash Burgers',
  description: 'Smash burgers, combos y mucho sabor. Descubre el menú de LaSmash. Aplastada, dorada e irresistible.',
  openGraph: {
    title: 'LaSmash | Smash Burgers',
    description: 'Smash burgers hechas para quitarte el hambre de verdad.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        {children}
</body>
    </html>
  );
}