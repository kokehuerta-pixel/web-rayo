import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/dreyfus-hero/1920/1080?grayscale&blur=2" 
          alt="Hero background" 
          fill
          className="object-cover object-center filter contrast-125 brightness-50"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 pb-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="font-headline text-6xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase text-white editorial-text-overlap mb-6">
            TE VAS A <br/><span className="text-primary-container">MORIR</span>
          </h1>
          <p className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white mb-12">
            ¿Qué carajo estás haciendo con tu vida?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-on-surface text-lg leading-relaxed max-w-md font-light">
              Soy Diego Dreyfus y no busco cambiar tu vida. Me dedico a crecer y si quieres usar mi proceso para inspirarte, qué chingón.
            </p>
            <div className="flex flex-col md:items-end">
              <button className="w-full md:w-auto px-12 py-6 bg-primary-container text-on-primary font-headline font-black tracking-widest uppercase hover:bg-primary hover:scale-105 transition-all duration-200 active:scale-95">
                QUIERO INSPIRARME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
