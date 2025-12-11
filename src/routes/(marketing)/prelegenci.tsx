import { createFileRoute } from '@tanstack/react-router';
import { CTASection } from '~/components/CTASection';
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

const prelegenci = [
  {
    id: 1,
    name: 'Karolina Jacewicz',
    role: 'wykładowczyni/laborantka MediaLab UAP, twórczyni multimedialna',
    bio: 'Współprowadzi pracownię w MediaLab UAP, zajmując się mappingiem i scenografią multimedialną w projektach uczelnianych.',
  },
  {
    id: 2,
    name: 'Mikołaj Ludwik Jaksim',
    role: 'twórca wizualny',
    bio: 'Współtworzy wizualizacje i animacje na wydarzenia. Działa w kolektywie WJU VJS i przy fundacji DamDam.',
  },
  {
    id: 3,
    name: 'Kuba Guzik',
    role: 'współtwórca Medialab UAP, twórca wizualny',
    bio: 'Specjalizuje się w brandingu i rozwiązaniach digitalowych. Realizuje projekty graficzne, tożsamości marek oraz interaktywne formy wizualne w ramach działalności studia HEHE.',
  },
  {
    id: 4,
    name: 'Grzegorz Leszczyński',
    role: 'animator, twórca wizualny, VJ',
    bio: 'Specjalizuje się w animacji i oprawach wizualnych na żywo, mappingach i wizualizacjach koncertowych. Związany z kolektywem WJU VJS i fundacją DamDam działających przy scenie klubowej.',
  },
  {
    id: 5,
    name: 'Clockwork',
    role: 'studio multimedialne (Karol Zagrodzki i Mateusz Gurtowski)',
    bio: 'Specjalizuje się w mappingu 3D, wizualach wielkoformatowych i scenografii multimedialnej dla dużych wydarzeń i marek.',
  },
  {
    id: 6,
    name: 'Michał Mierzwa',
    role: 'projektant i współzałożyciel studia Uniforma',
    bio: 'Zajmuje się brandingiem, projektami digital i identity designem. Tworzy również treści edukacyjne dla projektantów.',
  },
  {
    id: 7,
    name: 'FTVision',
    role: 'producent materiałów wizualnych dla VJ-ów',
    bio: 'Tworzy i sprzedaje pętle wideo 4K (DXV) do wizualizacji live w klubach i na festiwalach. Skoncentrowani na scenie elektronicznej i wizualnym opakowaniu wydarzeń.',
  },
  {
    id: 8,
    name: 'Lola Haze (LOLA)',
    role: 'VJ, graphic designer, rezydentka klubu Tama',
    bio: 'Tworzy rozbudowane wizualizacje na imprezach klubowych i festiwalach oraz współtworzy oprawę wizualną Tamy. Laureatka nagrody Munoludy – VJ Roku w Polsce.',
  },
  {
    id: 9,
    name: 'Kuśwa VJs',
    role: 'duet VJ-ski / kolektyw wizualny',
    bio: 'Tworzą animacje oraz wizuale na imprezy i festiwale, działając aktywnie na scenie klubowej. Współpracują z artystami wizualnymi i muzycznymi.',
  },
  {
    id: 10,
    name: 'Pixelo',
    role: 'marka zasobów graficznych i narzędzi kreatywnych',
    bio: 'Działa głównie jako dostawca fontów i materiałów graficznych online.',
  },
  {
    id: 11,
    name: 'Laserowy Maciej',
    role: 'realizator pokazów laserowych',
    bio: 'Tworzy oprawy laserowe na festiwalach i wydarzeniach klubowych, współpracując z profesjonalnymi ekipami scenotechnicznymi.',
  },
  {
    id: 12,
    name: 'Paulina Tarnawska',
    role: 'Production Director, Good Taste Production',
    bio: 'Kieruje produkcją koncertów i festiwali, odpowiadając za logistykę i realizację wydarzeń. Pracuje przy dużych produkcjach scenicznych i trasach koncertowych.',
  },
  {
    id: 13,
    name: 'Sara Kordek',
    role: 'Creative Director, Good Taste Production',
    bio: 'Zajmuje się warstwą kreatywną, komunikacją i rozwojem wydarzeń muzycznych i multimedialnych. Wspiera produkcję koncertów i festiwali.',
  },
  {
    id: 14,
    name: 'Joanna Tomczak',
    role: 'współwłaścicielka klubu Tama',
    bio: 'Zarządza klubem i jego programem wydarzeń, współtworząc rozwój sceny klubowej w Poznaniu. Angażuje się w projekty łączące muzykę i sztukę współczesną.',
  },
  {
    id: 15,
    name: 'Arek Śmiłowski',
    role: 'współwłaściciel i booker klubu Tama',
    bio: 'Odpowiada za booking artystów i organizację koncertów oraz imprez, rozwijając markę klubu w Polsce i Europie.',
  },
  {
    id: 16,
    name: 'Kuba Grzeszczuk',
    role: 'realizator multimediów i systemów AV',
    bio: 'Pracuje przy eventach jako lider ekip odpowiedzialnych za wideo, LED-y i technologię sceniczną. Współpracuje przy produkcjach hybrydowych i XR.',
  },
  {
    id: 17,
    name: 'Tomek Grzeszczuk (to_mi_chill)',
    role: 'VJ i twórca wizualizacji live',
    bio: 'Od lat aktywny na polskiej scenie klubowej, jego wizuale prezentowane są w klubach i na festiwalach w całej Polsce. Tworzy autorskie animacje, mappingi i generatywne wizuale.',
  },
  {
    id: 18,
    name: 'Localhost.tv – Tom Skof',
    role: 'producent, VJ, realizator multimedialny',
    bio: 'Tworzy projekty na styku muzyki i obrazu — mapping, streaming AV, scenografie wideo. Współtworzy platformę Localhost TV integrującą środowisko twórców.',
  },
  {
    id: 19,
    name: 'Ludwik AV (Ludwik Kamiński)',
    role: 'visual artist, stage designer, VJ',
    bio: 'Działa głównie w Krakowie, tworząc rozbudowane oprawy wizualne koncertów i imprez klubowych. Łączy światło, scenografię i wizuale generatywne.',
  },
  {
    id: 20,
    name: 'FKS-EYE',
    role: 'duet twórców wizualnych',
    bio: 'Realizuje mappingi 3D i rozbudowane oprawy sceniczne festiwali i dużych imprez. Pracuje w kolektywach wizualnych i projektach skupiających twórców AV.',
  },
  {
    id: 21,
    name: 'Emiko (Emilia Gumańska)',
    role: 'visual artist, reżyserka wideo, VJ',
    bio: 'Tworzy teledyski, projekty 3D i animacje oraz oprawy wizualne na wydarzenia audio-wizualne. Łączy twórczość VJ z działalnością filmową.',
  },
  {
    id: 22,
    name: 'PUH + Deruba (Pushka Studio)',
    role: 'duet twórców wizualnych',
    bio: 'Specjalizują się w projektach mappingowych, instalacjach AV oraz kompleksowych oprawach scenicznych. Współpracują przy koncertach i festiwalach zapewniając kontent i obsługę wideo.',
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
                    <h3 className="text-xl font-semibold mb-1">{prelegent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{prelegent.role}</p>
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
