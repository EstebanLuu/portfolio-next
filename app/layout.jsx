import { Poppins, JetBrains_Mono } from 'next/font/google';
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
  description: "Portfolio de Nicolas Luna, desarrollador web con experiencia en tecnologías modernas. Explora mis proyectos, habilidades y logros en el desarrollo de software, incluyendo aplicaciones web y móviles. Aquí encontrarás una visión general de mi trabajo, tecnologías que manejo y cómo puedo aportar a futuros proyectos.",
  keywords: "desarrollador web, portafolio, tecnologías web, React, Next.js, JavaScript, desarrollo de software",
  author: "Nicolas Luna",
  openGraph: {
    title: "Nicolas Luna | Portfolio",
    description: "Explora el portafolio de Nicolas Luna, un desarrollador web especializado en tecnologías modernas. Descubre proyectos destacados y habilidades en desarrollo de software.",
    image: "/assets/previewPortfolio",
    url: "http://nicolasestebanluna.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Luna | Portfolio",
    description: "Descubre el portafolio de Nicolas Luna y explora proyectos, habilidades y logros en el desarrollo web.",
    image: "/assets/previewPortfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='sidebarthumb'>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={PoppinsFont.variable}>
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
