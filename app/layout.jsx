import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';


const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainMono',
});

export const metadata = {
  title: "Nicolas Luna",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
