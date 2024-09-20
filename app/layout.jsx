import { Poppins, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.scss";

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { PathnameProvider } from '@/hooks/pathname';

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainMono',
});

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-poppins',
});


export const metadata = {
  title: "Nicolas Luna",
  description: "Bienvenido a mi portafolio, donde comparto mis proyectos y el trabajo que me apasiona en el desarrollo web. Explora mis habilidades y lo que he creado hasta ahora.",
  keywords: "Nicolas Luna, desarrollador web, portafolio, proyectos web, diseño web, desarrollo frontend, aplicaciones web",
  author: "Nicolas Luna",
  openGraph: {
    title: "Nicolas Luna",
    description: "Explora mi portafolio y descubre proyectos web innovadores diseñados para sobresalir en el mundo digital.",
    image: "/previewPortfolio.png",
    url: "http://nicolasestebanluna.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Luna",
    description: "Descubre mis proyectos, habilidades y logros en el desarrollo web a través de mi portafolio.",
    image: "/previewPortfolio.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='sidebarthumb'>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={PoppinsFont.variable}>
        <SpeedInsights />
        <PathnameProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </PathnameProvider>
      </body>
    </html>
  );
}
