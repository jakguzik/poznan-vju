import { Link } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-96px)] sm:h-[calc(100vh-112px)] overflow-hidden flex items-center justify-center">
      {/* Background pattern */}
      <div 
        className="absolute inset-[32px] sm:inset-[40px] md:inset-[50px] pointer-events-none"
        style={{
          backgroundImage: 'url(/bg-pixels.svg)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      {/* Corner decorations */}
      <img src="/decor-01.svg" alt="" className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] pointer-events-none" aria-hidden="true" />
      <img src="/decor-02.svg" alt="" className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] pointer-events-none" aria-hidden="true" />
      <img src="/decor-03.svg" alt="" className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] pointer-events-none" aria-hidden="true" />
      <img src="/decor-04.svg" alt="" className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] pointer-events-none" aria-hidden="true" />
      
      {/* Single Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full px-4">
        
        {/* Logo */}
        <div className="animate-in fade-in duration-1000 w-full max-w-3xl mx-auto flex justify-center">
          <img 
            src="/PZV-logo.svg" 
            alt="Poznań.VJU" 
            className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain"
          />
        </div>
        
        {/* Buttons */}
        <div className="animate-in fade-in duration-1000 delay-500 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
          >
            <a
              href="https://fb.me/e/6FG15V2nL"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 sm:gap-3"
            >
              <img src="/fb-icon.svg" alt="" className="size-4 sm:size-5 mb-1" aria-hidden="true" />
              Dołącz do wydarzenia
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
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
