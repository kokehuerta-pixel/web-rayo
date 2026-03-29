import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 w-full max-w-[1440px] mx-auto">
        <Link href="/" className="text-3xl font-black tracking-tighter text-white font-headline uppercase">
          DREYFUS
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {['AMORir', 'Eventos', 'Cursos', 'Quiénes Somos', 'Contacto'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-headline font-bold tracking-tighter uppercase text-on-surface hover:text-primary-container transition-colors hover:scale-105 duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden md:block px-8 py-3 bg-primary-container text-on-primary font-headline font-bold uppercase tracking-tighter hover:bg-primary transition-colors active:scale-95">
            INGRESAR
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}
