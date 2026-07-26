import type { Metadata } from 'next';
import { Crimson_Text, Inter } from 'next/font/google';
import './globals.css';

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Catalix Global | Intelligent Strategy, CIO Advisory, ERP & AI Governance',
  description:
    'Catalix Global is a premier B2B consulting firm empowering enterprise leadership through strategic CIO/CDO advisory, ERP governance, digital transformation, and AI adoption.',
  keywords: [
    'CIO Advisory',
    'CDO Advisory',
    'ERP Advisory',
    'Digital Transformation',
    'AI Governance',
    'Supply Chain Optimization',
    'OEE Improvement',
    'Enterprise Consulting',
  ],
  authors: [{ name: 'Catalix Global' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Catalix Global | Intelligent Transformation Consulting',
    description: 'Transform enterprise operations through high-impact CIO advisory, ERP alignment, and AI governance.',
    url: 'https://www.catalixglobal.com',
    siteName: 'Catalix Global',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ChatbotWidget from '@/components/ChatbotWidget';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className="bg-brand-cream text-brand-text font-sans antialiased selection:bg-brand-gold/30 selection:text-brand-navy"
        suppressHydrationWarning
      >
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
