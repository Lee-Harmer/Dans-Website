import type { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/sections/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | Electric Component Sales',
  description: 'Founded in 1967, ECS has spent over five decades building an unmatched presence in the Upper Midwest for electronic and electrical manufacturers.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
