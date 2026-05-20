import type { Metadata } from 'next';
import Header from '@/components/Header';
import Territory from '@/components/sections/Territory';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Team | Electric Component Sales',
  description: 'Meet the ECS team and see our coverage area across the Upper Midwest.',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <Territory />
        <Team />
      </main>
      <Footer />
    </>
  );
}
