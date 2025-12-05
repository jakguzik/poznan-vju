import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("relative overflow-hidden w-full pt-16 pb-20 md:pt-24 md:pb-28", className)}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/bg-pixels-grey.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-in fade-in duration-700 font-heading uppercase">
            WIDZIMY SIĘ?
          </h2>
          <p className="mt-4 text-lg text-white animate-in fade-in duration-700 delay-150">
            Nie przegap małego święta VJów w Poznaniu. Spotkaj się z artystami wizualnymi, wymień doświadczenia i odkryj świat visual jockeyingu
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none mx-auto animate-in fade-in duration-700 delay-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}



