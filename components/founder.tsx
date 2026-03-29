import Image from 'next/image';
import { Zap, Tag, Fingerprint } from 'lucide-react';

export function Founder() {
  return (
    <section className="relative bg-surface-container-lowest py-24 md:py-48 px-6 md:px-16 overflow-hidden border-y border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="font-headline text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase text-white mb-16">
            Put* el que no lea quién soy
          </h2>
          
          <ul className="space-y-12">
            <li className="flex gap-6 items-start group">
              <Zap className="w-8 h-8 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-xl md:text-2xl text-on-surface leading-snug font-light">
                Escribí lo de arriba solo para picar tu ego.
              </p>
            </li>
            <li className="flex gap-6 items-start group">
              <Tag className="w-8 h-8 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-xl md:text-2xl text-on-surface leading-snug font-light">
                No creo en las etiquetas. Soy lo que decido ser hoy.
              </p>
            </li>
            <li className="flex gap-6 items-start group">
              <Fingerprint className="w-8 h-8 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-xl md:text-2xl text-on-surface leading-snug font-light">
                Decidí quién soy y me hago responsable de cada palabra.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="aspect-[4/5] relative overflow-hidden grayscale contrast-125 bg-surface-bright">
            <Image 
              src="https://picsum.photos/seed/founder-portrait/800/1000?grayscale" 
              alt="Founder Portrait" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 bg-primary-container p-8 md:p-12">
              <span className="font-headline text-4xl md:text-5xl font-black text-on-primary tracking-tighter">
                DREYFUS
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
