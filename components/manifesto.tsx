import Image from 'next/image';

export function Manifesto() {
  return (
    <section id="quiénes-somos" className="py-24 md:py-48 px-6 md:px-16 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-12 order-2 lg:order-1">
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase border-l-4 border-primary-container pl-6 leading-tight">
            Nuestro <br/>Manifiesto
          </h2>
          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed text-on-surface-variant font-light">
            <p>
              Creemos en la <strong className="text-white font-bold">autenticidad agresiva</strong>. En un mundo saturado de filtros y verdades a medias, la única moneda con valor real es la honestidad brutal con uno mismo.
            </p>
            <p>
              No estamos aquí para motivarte con palabras vacías. Estamos aquí para recordarte que el poder reside en la acción desmedida y en la responsabilidad absoluta sobre tus resultados.
            </p>
            <p className="text-white text-2xl md:text-3xl font-headline font-bold italic tracking-tight mt-12">
              &quot;El cambio no es una meta, es un síntoma de tu evolución.&quot;
            </p>
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-[4/5] order-1 lg:order-2">
          <Image 
            src="https://picsum.photos/seed/manifesto-desk/800/1000?grayscale" 
            alt="Authentic lifestyle" 
            fill
            className="object-cover border-b-8 border-primary-container filter contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
