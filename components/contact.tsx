'use client';

export function Contact() {
  return (
    <section id="contacto" className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-white/5">
      {/* Left Side: Information */}
      <div className="p-8 md:p-16 lg:p-24 space-y-24 bg-surface border-r border-white/5">
        <div className="space-y-12">
          <h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter text-white leading-[0.9]">
            Hablemos <br/><span className="text-primary-container">Verdades.</span>
          </h2>
          <p className="font-body text-xl text-on-surface-variant max-w-md leading-relaxed font-light">
            No buscamos conversaciones cómodas. Buscamos impacto. Si estás listo para la autenticidad agresiva, este es el lugar.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="font-headline font-bold text-xl uppercase tracking-widest text-primary-container">
            No me contactes si...
          </h3>
          <ul className="space-y-6 font-headline text-2xl md:text-3xl font-bold uppercase leading-tight text-white">
            <li className="flex gap-4 items-start"><span className="text-primary-container">/</span> Buscas validación en lugar de crecimiento.</li>
            <li className="flex gap-4 items-start"><span className="text-primary-container">/</span> Tienes miedo de cuestionar el status quo.</li>
            <li className="flex gap-4 items-start"><span className="text-primary-container">/</span> Prefieres la estética sobre la sustancia.</li>
          </ul>
        </div>
      </div>

      {/* Right Side: The Form */}
      <div className="p-8 md:p-16 lg:p-24 bg-surface-container-lowest flex flex-col justify-center">
        <form className="space-y-12 max-w-xl w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="name" className="font-headline font-bold text-xs uppercase tracking-widest text-outline">Nombre</label>
            <input 
              type="text" 
              id="name" 
              placeholder="¿QUIÉN ERES?" 
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-2xl p-4 px-0 font-headline font-bold placeholder:text-surface-bright transition-colors outline-none text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="font-headline font-bold text-xs uppercase tracking-widest text-outline">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="TU@CANAL.COM" 
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-2xl p-4 px-0 font-headline font-bold placeholder:text-surface-bright transition-colors outline-none text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="font-headline font-bold text-xs uppercase tracking-widest text-outline">Asunto</label>
            <select 
              id="subject" 
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-2xl p-4 px-0 font-headline font-bold appearance-none transition-colors outline-none text-white cursor-pointer"
            >
              <option className="bg-surface text-white">PROYECTO RADICAL</option>
              <option className="bg-surface text-white">CONFERENCIA</option>
              <option className="bg-surface text-white">CONSULTORÍA CRÍTICA</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="font-headline font-bold text-xs uppercase tracking-widest text-outline">Tu Verdad</label>
            <textarea 
              id="message" 
              rows={4}
              placeholder="ESCRIBE AQUÍ SIN FILTROS..." 
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-2xl p-4 px-0 font-headline font-bold placeholder:text-surface-bright transition-colors outline-none text-white resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-primary-container text-on-primary font-headline font-black text-2xl py-8 tracking-widest uppercase hover:bg-primary transition-all active:scale-[0.98] mt-8"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}
