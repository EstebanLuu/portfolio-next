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
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='sidebarthumb'>
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
