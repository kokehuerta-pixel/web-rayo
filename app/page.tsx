import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Manifesto } from '@/components/manifesto';
import { AmorirGrid } from '@/components/amorir-grid';
import { Founder } from '@/components/founder';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Nav />
      <Hero />
      <Manifesto />
      <AmorirGrid />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}
