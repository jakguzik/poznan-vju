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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-in fade-in duration-700">
            Dołącz do wydarzenia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-in fade-in duration-700 delay-150">
            Nie przegap okazji do spotkania z ekspertami i wymiany doświadczeń
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-300">
            <Button 
              asChild
              size="lg"
            >
              <a 
                href="https://www.facebook.com/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-4"
              >
                <img src="/fb-icon.svg" alt="" className="size-6 mb-1" aria-hidden="true" />
                Dołącz do wydarzenia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



