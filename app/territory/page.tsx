import type { Metadata } from 'next';
import Header from '@/components/Header';
import Territory from '@/components/sections/Territory';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Territory | Electric Component Sales',
  description: 'ECS provides dedicated coverage across Minnesota, Wisconsin, Iowa, North Dakota, South Dakota, and Nebraska.',
};

export default function TerritoryPage() {
  return (
    <>
      <Header />
      <main>
        <Territory />
      </main>
      <Footer />
    </>
  );
}
