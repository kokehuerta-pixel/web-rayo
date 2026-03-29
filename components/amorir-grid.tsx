export function AmorirGrid() {
  const items = [
    { id: '01', title: 'Cuerpo', desc: 'Tu vehículo biológico. Aprende a escucharlo antes de que se detenga.' },
    { id: '02', title: 'Dinero', desc: 'Energía de intercambio. Deja de perseguirlo y empieza a atraerlo.' },
    { id: '03', title: 'Mente y Emociones', desc: 'El software que corre tu vida. Actualízalo o quédate obsoleto.' },
    { id: '04', title: 'Trabajo', desc: 'Tu expresión en el mundo. Si no es arte, es esclavitud.' },
    { id: '05', title: 'Tiempo', desc: 'Lo único que no recuperas. Deja de matarlo.' },
    { id: '06', title: 'Diversión', desc: 'El combustible del alma. Sin gozo, la vida es una carga.' },
  ];

  return (
    <section id="amorir" className="bg-surface py-24 md:py-48 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="font-headline text-7xl md:text-[8rem] font-black leading-none tracking-tighter uppercase text-white mb-6">
            AMORIR
          </h2>
          <h3 className="font-headline text-2xl md:text-3xl text-primary-container font-bold tracking-tight uppercase mb-12">
            El Arte del Buen Vivir
          </h3>
          <p className="text-xl text-on-surface-variant mb-12 max-w-md font-light leading-relaxed">
            Una comunidad digital de miles de humanos compartiéndose y empujándose. No es para todos, es para los que se atreven a sentir.
          </p>
          <button className="px-12 py-5 border border-outline-variant text-white font-headline font-bold tracking-widest uppercase hover:bg-white hover:text-surface transition-all duration-300">
            Quiero ser parte →
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
          {items.map((item) => (
            <div key={item.id} className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group cursor-pointer">
              <span className="text-primary-container font-headline text-sm font-bold tracking-widest block mb-6">
                {item.id}
              </span>
              <h4 className="font-headline text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
