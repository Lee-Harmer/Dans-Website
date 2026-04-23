import type { Metadata } from 'next';
import Header from '@/components/Header';
import Manufacturers from '@/components/sections/Manufacturers';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Manufacturers | Electric Component Sales',
  description: 'ECS represents 20+ premier manufacturers across Electronic and Electrical markets in the Upper Midwest. View our complete line card.',
};

export default function ManufacturersPage() {
  return (
    <>
      <Header />
      <main>
        <Manufacturers />
      </main>
      <Footer />
    </>
  );
}
