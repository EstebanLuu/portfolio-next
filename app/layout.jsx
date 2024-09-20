import { Poppins, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
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
  title: "Nicolas Luna | Portafolio de Desarrollo Web",
  description: "Bienvenido a mi portafolio. Soy Nicolas Luna, desarrollador web apasionado por crear soluciones digitales. Explora mis proyectos y habilidades en desarrollo web, diseño y aplicaciones frontend.",
  keywords: "Nicolas Luna, desarrollador web, portafolio, desarrollo web, diseño frontend, aplicaciones web, proyectos digitales",
  author: "Nicolas Luna",
  openGraph: {
    title: "Nicolas Luna | Desarrollo Web",
    description: "Descubre proyectos web innovadores y explora las habilidades de Nicolas Luna en desarrollo y diseño frontend.",
    image: "/favicon.ico",
    url: "http://nicolasestebanluna.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Luna | Desarrollo Web",
    description: "Explora el portafolio de Nicolas Luna para conocer proyectos y habilidades en el desarrollo web.",
    image: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='sidebarthumb'>
      <link rel="icon" href="/favicon.ico" />
      <body className={PoppinsFont.variable}>
        <SpeedInsights />
        <Analytics />
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
