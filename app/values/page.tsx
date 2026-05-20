import type { Metadata } from 'next';
import Header from '@/components/Header';
import OurValues from '@/components/sections/OurValues';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Values | Electric Component Sales',
  description: 'The principles that have guided Electric Component Sales since 1967 — integrity, accountability, expertise, teamwork, and continuous growth.',
};

export default function ValuesPage() {
  return (
    <>
      <Header />
      <main>
        <OurValues />
      </main>
      <Footer />
    </>
  );
}
