import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}


import { cn } from '~/lib/utils';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}





