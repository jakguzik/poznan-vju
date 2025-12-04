import { Link } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';

export function HeroSection() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:4',message:'HeroSection render',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  return (
    <section className="relative h-[calc(100vh-64px)] sm:h-[calc(100vh-72px)] overflow-hidden flex items-center justify-center">
      {/* Background pattern */}
      <div 
        className="absolute inset-[40px] sm:inset-[48px] md:inset-[64px] lg:inset-[80px] pointer-events-none"
        style={{
          backgroundImage: 'url(/background-pattern.svg)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      {/* Corner decorations */}
      <img src="/decor-01.svg" alt="" className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none" aria-hidden="true" />
      <img src="/decor-02.svg" alt="" className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none" aria-hidden="true" />
      <img src="/decor-03.svg" alt="" className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none" aria-hidden="true" />
      <img src="/decor-04.svg" alt="" className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none" aria-hidden="true" />
      
      {/* Single Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full px-4">
        
        {/* Logo */}
        <div className="animate-in fade-in duration-1000 w-full max-w-3xl mx-auto flex justify-center">
          <img 
            src="/logo-hero.svg" 
            alt="Poznań.VJU" 
            className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
          />
        </div>
        
        {/* Buttons */}
        <div className="animate-in fade-in duration-1000 delay-500 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button 
            asChild
            size="lg"
            className="text-base px-8 py-6 hover:scale-105 transition-transform"
          >
            <a 
              href="https://www.facebook.com/events" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Dołącz do wydarzenia
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 hover:scale-105 transition-transform"
          >
            <Link to="/program">
              Sprawdź program
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
}
