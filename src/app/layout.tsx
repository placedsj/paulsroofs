import type { Metadata } from 'next';
import { Roboto, Roboto_Slab } from 'next/font/google';
import './globals.css';
import { Footer } from '../components/footer';

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Paul's Roofing - Southern NB Specialist",
  description: "The last roof you'll ever need.",
};

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}> 
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}