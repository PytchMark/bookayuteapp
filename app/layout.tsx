import type { ReactNode } from 'react';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ModalEntry from '../components/ModalEntry';
import { baseMetadata } from '../lib/seo';

export const metadata = baseMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-24">{children}</main>
        <Footer />
        <ModalEntry />
      </body>
    </html>
  );
}
