import { cn } from '~/lib/utils';

interface LogosSectionProps {
  className?: string;
}

interface Logo {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

// Logo patronów medialnych
const patronatLogos: Logo[] = [
  { src: '/afera-logo.svg', alt: 'Afera', height: 'h-16' },
];

// Logo organizatorów
const organizatorLogos: Logo[] = [
  { src: '/vju-logo.svg', alt: 'VJU', height: 'h-10' },
  { src: '/damdam-logo.svg', alt: 'DamDam' },
  { src: '/medialab-logo.svg', alt: 'Medialab', width: 'w-20' },
  { src: '/pzn-logo.svg', alt: 'PZN', width: 'w-20' },
];

export function LogosSection({ className }: LogosSectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* PATRONAT MEDIALNY */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-6 text-center md:text-left">
              PATRONAT MEDIALNY
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {patronatLogos.length > 0 ? (
                patronatLogos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo.src} 
                    alt={logo.alt} 
                    className={cn("w-auto opacity-70 hover:opacity-100 transition-opacity", logo.height || "h-12")}
                  />
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Logo patronów medialnych</p>
              )}
            </div>
          </div>

          {/* ORGANIZATORZY */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-6 text-center md:text-left">
              ORGANIZATORZY
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {organizatorLogos.length > 0 ? (
                organizatorLogos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo.src} 
                    alt={logo.alt} 
                    className={cn("opacity-70 hover:opacity-100 transition-opacity", logo.height || "h-12", logo.width || "w-auto")}
                  />
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Logo organizatorów</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

