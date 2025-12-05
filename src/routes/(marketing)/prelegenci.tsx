import { createFileRoute } from '@tanstack/react-router';
import { CTASection } from '~/components/CTASection';
import { cn } from '~/lib/utils';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/(marketing)/prelegenci')({
  component: PrelegenciPage,
  head: () => ({
    meta: [
      ...seo({
        title: "Prelegenci - Poznań.VJU 2025 | AV Festiwal",
        description: "Poznaj prelegentów Poznań.VJU 2025. Eksperci visual jockeyingu, mapping, produkcji wizualnej i współpracy VJ z artystami. Dołącz do wydarzenia 16-18.12.2025.",
        keywords: "Poznań.VJU prelegenci, VJ prelegenci, visual jockey prelegenci, mapping Poznań, AV Festiwal prelegenci",
        image: "/opengraph.png",
        url: "/prelegenci"
      })
    ]
  })
});

// Przykładowe dane prelegentów - później można przenieść do osobnego pliku
const prelegenci = [
  {
    id: 1,
    name: 'Jan Kowalski',
    role: 'Senior Frontend Developer',
    company: 'Tech Corp',
    bio: 'Ekspert w dziedzinie React i TypeScript z ponad 10-letnim doświadczeniem. Autor wielu artykułów i prelegent na konferencjach.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jan',
  },
  {
    id: 2,
    name: 'Anna Nowak',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    bio: 'Specjalistka od nowoczesnych frameworków i architektury aplikacji webowych. Pasjonatka czystego kodu.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
  },
  {
    id: 3,
    name: 'Piotr Wiśniewski',
    role: 'Tech Lead',
    company: 'BigTech Inc',
    bio: 'Lider techniczny z pasją do TypeScript i systemów skalowalnych. Mentor wielu programistów.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Piotr',
  },
  {
    id: 4,
    name: 'Maria Zielińska',
    role: 'Frontend Architect',
    company: 'Design Systems Co',
    bio: 'Architekt systemów frontendowych. Ekspertka w dziedzinie TanStack Query i zarządzania stanem.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  },
  {
    id: 5,
    name: 'Tomasz Lewandowski',
    role: 'DevOps Engineer',
    company: 'Cloud Solutions',
    bio: 'Specjalista od infrastruktury i skalowania aplikacji. Ekspert w dziedzinie CI/CD i cloud computing.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tomasz',
  },
  {
    id: 6,
    name: 'Katarzyna Szymańska',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    bio: 'Designerka z doświadczeniem w tworzeniu nowoczesnych interfejsów. Specjalistka od CSS i design systems.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Katarzyna',
  },
  {
    id: 7,
    name: 'Michał Dąbrowski',
    role: 'Performance Engineer',
    company: 'SpeedTech',
    bio: 'Ekspert od optymalizacji wydajności aplikacji webowych. Autor narzędzi do monitorowania performance.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michal',
  },
];

function PrelegenciPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 animate-in fade-in duration-700">
              Prelegenci
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prelegenci.map((prelegent, index) => (
                <div
                  key={prelegent.id}
                  className="group border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <img
                        src={prelegent.image}
                        alt={prelegent.name}
                        className="w-24 h-24 object-cover border-2 border-border transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{prelegent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{prelegent.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{prelegent.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prelegent.bio}
                    </p>
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
