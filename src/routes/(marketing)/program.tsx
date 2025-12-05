import { createFileRoute } from '@tanstack/react-router';
import { CTASection } from '~/components/CTASection';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/(marketing)/program')({
  component: ProgramPage,
  head: () => ({
    meta: [
      ...seo({
        title: "Program - Poznań.VJU 2025 | AV Festiwal",
        description: "Program Poznań.VJU 2025 (16-18.12.2025). Warsztaty Resolume, prelekcje, panele dyskusyjne, VJ Battle i after party. Sprawdź szczegółowy program wydarzenia.",
        keywords: "Poznań.VJU program, AV Festiwal program, VJ Battle, warsztaty Resolume, prelekcje VJ, Poznań 2025",
        image: "/opengraph.png",
        url: "/program"
      })
    ]
  })
});

type EventType = 'talk' | 'workshop' | 'panel' | 'break' | 'party' | 'battle' | 'info';

interface ProgramEvent {
  time: string;
  duration?: string;
  title: string;
  description?: string;
  speakers?: string[];
  type: EventType;
}

interface Venue {
  name: string;
  address?: string;
  events: ProgramEvent[];
  fbLink?: string;
  fbLabel?: string;
}

interface ProgramDay {
  day: string;
  date: string;
  venues: Venue[];
}

const programData: ProgramDay[] = [
  {
    day: 'Wtorek',
    date: '2025-12-16',
    venues: [
      {
        name: 'Poczta Workspace',
        address: 'ul. 23 Lutego 26, Poznań',
        fbLink: 'https://fb.me/e/6FG15V2nL',
        fbLabel: 'SPRAWDŹ DZIEŃ 1',
        events: [
          { time: '17:30', duration: '30 min', title: 'Konferencja prasowa w TAMIE', type: 'info' },
          { time: '18:00', duration: '30 min', title: 'Prezentacja programu', type: 'talk' },
          { 
            time: '18:30', 
            duration: '1h 20 min', 
            title: 'Panel otwarcia', 
            type: 'panel',
            speakers: ['Karolina', 'Mikołaj', 'Kuba Guzik', 'Grzegorz Leszczyński', 'Clockwork', 'Michał Mierzwa', 'FTVision', 'Lola', 'Kuśwa VJs', 'Pixelo', 'Laserowy Maciej']
          },
          { 
            time: '20:00', 
            duration: '1h', 
            title: 'Produkcja o współpracy z VJ', 
            type: 'panel',
            speakers: ['Aulina Tarnawska', 'Sara Kordek', 'Joanna Tomczak', 'Arek Śmiłowski']
          },
          { time: '21:00', title: 'Koniec', type: 'info' },
        ],
      },
    ],
  },
  {
    day: 'Środa',
    date: '2025-12-17',
    venues: [
      {
        name: 'Uniwersytet Artystyczny (UAP)',
        address: 'Al. Marcinkowskiego 29, Poznań',
        fbLink: 'https://fb.me/e/6nKgtLRSt',
        fbLabel: 'SPRAWDŹ DZIEŃ 2',
        events: [
          { time: '17:30', duration: '1h', title: 'Warsztaty Resolume', speakers: ['Kuba'], type: 'workshop' },
          { time: '18:40', duration: '40 min', title: 'Prezentacja', speakers: ['Grzegorz Leszczyński'], type: 'talk' },
          { time: '19:30', duration: '40 min', title: 'Prezentacja', speakers: ['Michał Mierzwa'], type: 'talk' },
          { time: '20:20', duration: '40 min', title: 'Prezentacja', speakers: ['Karolina'], type: 'talk' },
          { time: '21:00', title: 'Koniec', type: 'info' },
        ],
      },
    ],
  },
  {
    day: 'Czwartek',
    date: '2025-12-18',
    venues: [
      {
        name: 'I LO im. Karola Marcinkowskiego ("Marcinek")',
        address: 'ul. Bukowska 16, Poznań',
        fbLink: 'https://fb.me/e/2uIIQla9Ul',
        fbLabel: 'SPRAWDŹ PRELEKCJE',
        events: [
          { 
            time: '14:30', 
            duration: '20 min', 
            title: 'O TEDx i współpracy WJU z LO nr1 — Otwarcie', 
            speakers: ['Mikołaj'], 
            type: 'talk' 
          },
          { 
            time: '15:00', 
            duration: '20 min', 
            title: 'Od Visual Family Collective do ATM Virtual Studio', 
            speakers: ['Kuba Grzeszczuk'], 
            type: 'talk' 
          },
          { 
            time: '15:30', 
            duration: '20 min', 
            title: 'Od Visual Family Collective do TVN', 
            speakers: ['Tomek Grzeszczuk'], 
            type: 'talk' 
          },
          { 
            time: '16:00', 
            duration: '20 min', 
            title: 'TBA', 
            speakers: ['Tom Skof'], 
            type: 'talk' 
          },
          { 
            time: '16:30', 
            duration: '20 min', 
            title: 'Wesoła Immersive', 
            speakers: ['Ludwik AV'], 
            type: 'talk' 
          },
          { 
            time: '17:00', 
            duration: '30 min', 
            title: 'Mapping na Poznańskim Teatrze Wielkim — Ewolucja przez lata', 
            description: 'Techniki powstawania mappingu',
            speakers: ['Clockwork'], 
            type: 'talk' 
          },
          { 
            time: '17:40', 
            duration: '40 min', 
            title: 'LJ/VJ Collabo', 
            speakers: ['Adam Serek', 'FKS - EYE'], 
            type: 'talk' 
          },
          { 
            time: '18:30', 
            duration: '40 min', 
            title: 'TOP VJ', 
            speakers: ['Emiko'], 
            type: 'talk' 
          },
          { 
            time: '19:20', 
            duration: '40 min', 
            title: 'TOP VJ', 
            speakers: ['Puch', 'Deruba'], 
            type: 'talk' 
          },
          { time: '20:00', title: 'Koniec w Marcinku', type: 'info' },
        ],
      },
      {
        name: 'Blue Note Jazz Club',
        address: 'ul. Kościuszki 79 (CK Zamek), Poznań',
        fbLink: 'https://fb.me/e/98m39XS8G',
        fbLabel: 'SPRAWDŹ VJ BATTLE',
        events: [
          { time: '20:30', title: 'Otwarcie drzwi', type: 'info' },
          { time: '21:00', duration: '1h 45 min', title: 'VJ Battle — Start', type: 'battle' },
          { time: '22:45', duration: '15 min', title: 'Wyniki VJ Battle', type: 'battle' },
          { time: '23:00', duration: '3h', title: 'After Party', type: 'party' },
          { time: '02:00', title: 'Koniec', type: 'info' },
        ],
      },
    ],
  },
];

// Simplified styles focusing on text color and subtle indicators
const eventTypeColors: Record<EventType, string> = {
  talk: 'text-blue-400',
  workshop: 'text-indigo-400',
  panel: 'text-purple-400',
  break: 'text-muted-foreground',
  party: 'text-primary',
  battle: 'text-primary',
  info: 'text-muted-foreground',
};

const eventTypeLabels: Record<EventType, string> = {
  talk: 'Prezentacja',
  workshop: 'Warsztaty',
  panel: 'Panel',
  break: 'Przerwa',
  party: 'Impreza',
  battle: 'Battle',
  info: 'Info',
};

function ProgramPage() {
  const scrollToDay = (dayId: string) => {
    const element = document.getElementById(dayId);
    if (element) {
      const offset = 240; // account for sticky header (117px) + day selector (~90px) + buffer
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <section className="pt-12 md:pt-16 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-6 animate-in fade-in duration-700 uppercase">
              Program wydarzenia
            </h1>
          </div>
        </div>
        
        {/* Day Selector - Full Width */}
        <div className="sticky top-[73px] lg:top-[89px] z-40 bg-black py-4 mb-8 w-full border-b border-border">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {programData.map((day) => (
                <button
                  key={day.day}
                  onClick={() => scrollToDay(day.day.toLowerCase())}
                  className="group flex flex-col items-center px-4 sm:px-6 py-2 sm:py-3 bg-card hover:bg-primary/10 border-2 border-border hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={`Przejdź do programu dnia: ${day.day}`}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors uppercase">
                    {day.day}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {new Date(day.date).toLocaleDateString('pl-PL', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl"> {/* Reduced width for better readability */}
            <div className="space-y-24 pb-8 w-full">
              {programData.map((day, dayIndex) => (
                <div 
                  key={day.day}
                  id={day.day.toLowerCase()}
                  className="animate-in fade-in duration-700 scroll-mt-64"
                  style={{ animationDelay: `${dayIndex * 100}ms` }}
                >
                  {/* Day Header */}
                  <div className="mb-16 text-center">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4 rounded-full border border-primary/20">
                      {new Date(day.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
                      {day.day}
                    </h2>
                  </div>
                  
                  {/* Venues */}
                  <div className="space-y-16">
                    {day.venues.map((venue, venueIndex) => (
                      <div key={venue.name} className="">
                        {/* Venue Header */}
                        <div className="flex flex-col items-start gap-2 mb-8 pb-4 border-b border-border/50">
                          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary block"></span>
                            {venue.name}
                          </h3>
                          {venue.address && (
                            <span className="text-sm text-muted-foreground pl-5">
                              {venue.address}
                            </span>
                          )}
                        </div>
                        
                        {/* Events List - Timeline Style */}
                        <div className="space-y-0">
                          {venue.events.map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className={cn(
                                "group relative grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-6 border-b border-border/20 transition-colors duration-300 hover:bg-white/5 px-4 -mx-4 rounded-lg",
                                event.type === 'break' && 'opacity-60 py-4'
                              )}
                            >
                              {/* Time Column */}
                              <div className="flex flex-col items-start">
                                <span className={cn(
                                  "font-mono font-bold text-lg",
                                  event.type === 'break' ? 'text-muted-foreground text-base' : 'text-foreground',
                                  (event.type === 'battle' || event.type === 'party') && 'text-primary'
                                )}>
                                  {event.time}
                                </span>
                                {event.duration && (
                                  <span className="text-xs text-muted-foreground/60 font-mono mt-1">
                                    {event.duration}
                                  </span>
                                )}
                              </div>
                              
                              {/* Content Column */}
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                                  <h4 className={cn(
                                    "font-sans font-bold text-lg md:text-xl leading-tight",
                                    event.type === 'break' && 'text-muted-foreground font-medium text-base',
                                    (event.type === 'battle' || event.type === 'party') && 'text-primary text-xl md:text-2xl'
                                  )}>
                                    {event.title}
                                  </h4>
                                  
                                  {event.type !== 'break' && event.type !== 'info' && (
                                    <span className={cn(
                                      "text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 self-start sm:self-auto mt-1 sm:mt-0",
                                      eventTypeColors[event.type],
                                      "border-current bg-transparent opacity-80"
                                    )}>
                                      {eventTypeLabels[event.type]}
                                    </span>
                                  )}
                                </div>
                                
                                {event.description && (
                                  <p className="text-sm text-muted-foreground/80 max-w-2xl">
                                    {event.description}
                                  </p>
                                )}
                                
                                {event.speakers && event.speakers.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Speaker:</span>
                                    {event.speakers.map((speaker, speakerIndex) => (
                                      <span
                                        key={speakerIndex}
                                        className="text-sm text-foreground/90 font-medium border-b border-transparent hover:border-primary transition-colors"
                                      >
                                        {speaker}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* FB Link Button */}
                        {venue.fbLink && venue.fbLabel && (
                          <div className="mt-8 flex justify-start">
                            <Button 
                              asChild
                              size="lg"
                              className="uppercase font-bold"
                            >
                              <a 
                                href={venue.fbLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="gap-3"
                              >
                                <img src="/fb-icon.svg" alt="" className="size-6 mb-1" aria-hidden="true" />
                                {venue.fbLabel}
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
