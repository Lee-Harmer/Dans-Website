import type { Metadata } from 'next';
import Header from '@/components/Header';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Team | Electric Component Sales',
  description: 'Meet the ECS team — industry veterans with deep roots in the Upper Midwest electrical and electronic market.',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
}
