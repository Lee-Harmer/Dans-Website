import type { Metadata } from 'next';
import Header from '@/components/Header';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'What We Do | Electric Component Sales',
  description: 'Three specialized divisions — Electronic, Electrical, and Networking — each with dedicated teams, deep market relationships, and focused expertise.',
};

export default function WhatWeDoPage() {
  return (
    <>
      <Header />
      <main>
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
