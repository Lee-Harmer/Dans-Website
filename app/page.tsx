import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import MfrStrip from '@/components/sections/MfrStrip';
import About from '@/components/sections/About';
import WhyARep from '@/components/sections/WhyARep';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <MfrStrip />
        <About />
        <WhyARep />
      </main>
      <Footer />
    </>
  );
}
