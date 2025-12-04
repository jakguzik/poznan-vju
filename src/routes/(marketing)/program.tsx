import { createFileRoute } from '@tanstack/react-router';
import { CTASection } from '~/components/CTASection';
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/(marketing)/program')({
  component: ProgramPage,
});

// Przykładowe dane programu - później można przenieść do osobnego pliku
const programData = [
  {
    day: 'Dzień 1',
    date: '2025-01-15',
    events: [
      { time: '09:00', title: 'Rejestracja i powitanie', speaker: '' },
      { time: '10:00', title: 'Keynote: Przyszłość technologii', speaker: 'Jan Kowalski' },
      { time: '11:30', title: 'Warsztat: React 19', speaker: 'Anna Nowak' },
      { time: '13:00', title: 'Przerwa obiadowa', speaker: '' },
      { time: '14:00', title: 'Panel dyskusyjny', speaker: 'Panel ekspertów' },
      { time: '16:00', title: 'Networking', speaker: '' },
    ],
  },
  {
    day: 'Dzień 2',
    date: '2025-01-16',
    events: [
      { time: '09:00', title: 'Rejestracja', speaker: '' },
      { time: '10:00', title: 'Prezentacja: TypeScript Best Practices', speaker: 'Piotr Wiśniewski' },
      { time: '11:30', title: 'Warsztat: TanStack Query', speaker: 'Maria Zielińska' },
      { time: '13:00', title: 'Przerwa obiadowa', speaker: '' },
      { time: '14:00', title: 'Case Study: Skalowanie aplikacji', speaker: 'Tomasz Lewandowski' },
      { time: '16:00', title: 'Q&A Session', speaker: 'Wszyscy prelegenci' },
    ],
  },
  {
    day: 'Dzień 3',
    date: '2025-01-17',
    events: [
      { time: '09:00', title: 'Rejestracja', speaker: '' },
      { time: '10:00', title: 'Prezentacja: Modern CSS', speaker: 'Katarzyna Szymańska' },
      { time: '11:30', title: 'Warsztat: Performance Optimization', speaker: 'Michał Dąbrowski' },
      { time: '13:00', title: 'Przerwa obiadowa', speaker: '' },
      { time: '14:00', title: 'Closing Keynote', speaker: 'Organizatorzy' },
      { time: '15:30', title: 'Zakończenie i networking', speaker: '' },
    ],
  },
];

function ProgramPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 animate-in fade-in duration-700">
              Program wydarzenia
            </h1>
            
            <div className="space-y-12">
              {programData.map((day, dayIndex) => (
                <div 
                  key={day.day}
                  className="animate-in fade-in duration-700"
                  style={{ animationDelay: `${dayIndex * 100}ms` }}
                >
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">
                    {day.day} - {new Date(day.date).toLocaleDateString('pl-PL', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Godzina</th>
                          <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Tytuł</th>
                          <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Prelegent</th>
                        </tr>
                      </thead>
                      <tbody>
                        {day.events.map((event, eventIndex) => (
                          <tr 
                            key={eventIndex}
                            className="border-b hover:bg-accent/50 transition-colors"
                          >
                            <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
                              {event.time}
                            </td>
                            <td className="py-4 px-4 font-medium">
                              {event.title}
                            </td>
                            <td className="py-4 px-4 text-muted-foreground">
                              {event.speaker || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
