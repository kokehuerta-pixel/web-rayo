import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DREYFUS | Aggressive Authenticity',
  description: 'No buscamos conversaciones cómodas. Buscamos impacto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="font-body bg-[#131313] text-[#e2e2e2] antialiased selection:bg-[#5a8cff] selection:text-[#002c72]">
        {children}
      </body>
    </html>
  );
}
