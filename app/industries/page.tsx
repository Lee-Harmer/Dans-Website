import type { Metadata } from 'next';
import Header from '@/components/Header';
import IndustriesServed from '@/components/sections/IndustriesServed';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industries Served | Electric Component Sales',
  description: 'ECS serves Solar, OEM, Construction, Data Center, Medical, Military/Aerospace, Industrial Automation, and End User markets across the Upper Midwest.',
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesServed />
      </main>
      <Footer />
    </>
  );
}
