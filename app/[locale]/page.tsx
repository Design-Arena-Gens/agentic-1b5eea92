import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
