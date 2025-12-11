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
  { src: '/afera-logo.svg', alt: 'Afera', height: 'h-20 md:h-24' },
];

// Logo partnerów
const partnerLogos: Logo[] = [
  { src: '/bluenote-logo.svg', alt: 'Blue Note', height: 'h-12 md:h-14' },
  { src: '/goodtaste-logo.svg', alt: 'Good Taste', height: 'h-12 md:h-14' },
  { src: '/marcinek-logo.svg', alt: 'Marcinek', height: 'h-12 md:h-14' },
  { src: '/poczta-cowork-logo.svg', alt: 'Poczta Co-Work', height: 'h-12 md:h-14' },
];

// Logo organizatorów
const organizatorLogos: Logo[] = [
  { src: '/vju-logo.svg', alt: 'VJU', height: 'h-8 md:h-10' },
  { src: '/damdam-logo.svg', alt: 'DamDam', height: 'h-16 md:h-18' },
  { src: '/medialab-logo.svg', alt: 'Medialab', height: 'h-6 md:h-7' },
  { src: '/pzn-logo.svg', alt: 'PZN', height: 'h-14 md:h-16' },
];

export function LogosSection({ className }: LogosSectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center lg:items-start">
          {/* PATRONAT MEDIALNY */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">
              PATRONAT MEDIALNY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
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

          {/* PARTNERZY */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">
              PARTNERZY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={cn("w-auto opacity-70 hover:opacity-100 transition-opacity", logo.height || "h-12")}
                />
              ))}
            </div>
          </div>

          {/* ORGANIZATORZY */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center">
              ORGANIZATORZY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
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

