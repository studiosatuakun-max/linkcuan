import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'LinkCuan — Satu Link Banyak Cuan',
  description: 'Platform jualan + afiliasi dengan escrow, fee transparan, dan Automation Ads.',
};

export const viewport = {
  themeColor: '#facc15',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <head>
        <link rel='manifest' href='/manifest.webmanifest' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='bg-bg text-text antialiased'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
