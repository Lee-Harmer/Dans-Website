import type { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact | Electric Component Sales',
  description: 'Get in touch with Electric Component Sales. Technical inquiries, representation questions, or general contact.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
