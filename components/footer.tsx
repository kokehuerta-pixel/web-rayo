import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 w-full">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-black text-white font-headline tracking-tighter uppercase">DREYFUS</span>
          <p className="font-body text-xs tracking-widest uppercase text-on-surface-variant">
            © {new Date().getFullYear()} DREYFUS. AGGRESSIVE AUTHENTICITY.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {['Privacidad', 'Términos', 'Soporte'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="font-body text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary-container transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex gap-8 font-headline font-bold text-sm uppercase tracking-widest">
          <Link href="#" className="text-on-surface-variant hover:text-white transition-colors">IG</Link>
          <Link href="#" className="text-on-surface-variant hover:text-white transition-colors">IN</Link>
          <Link href="#" className="text-on-surface-variant hover:text-white transition-colors">X</Link>
        </div>
        
      </div>
    </footer>
  );
}
