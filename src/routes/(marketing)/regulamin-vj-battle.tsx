import { createFileRoute } from '@tanstack/react-router';
import { CTASection } from '~/components/CTASection';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/(marketing)/regulamin-vj-battle')({
  component: RegulaminVJBattlePage,
  head: () => ({
    meta: [
      ...seo({
        title: "Regulamin VJ Battle - Poznań.VJU 2025",
        description: "Regulamin konkursu VJ Battle podczas Poznań.VJU 2025. Kategorie OPEN i MEDIA LAB, nagrody, zasady oceniania i zgłoszenia.",
        keywords: "VJ Battle regulamin, konkurs VJ, Poznań.VJU 2025, VJ competition",
        image: "/opengraph.png",
        url: "/regulamin-vj-battle"
      })
    ]
  })
});

function RegulaminVJBattlePage() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 animate-in fade-in duration-700">
              Regulamin Konkursu „VJ Battle"
            </h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Organizator i informacje ogólne</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Organizatorem konkursu jest <strong>Fundacja DamDam</strong>, siedziba: al. Niepodległości 2, 61-874 Poznań, KRS 000711982.</li>
                  <li>Konkurs pod nazwą VJ Battle odbędzie się dnia <strong>18.12.2025, o godz. 20:00</strong>.</li>
                  <li>Miejsce wydarzenia: <strong>Klub Blue Note, Poznań</strong>.</li>
                  <li>Konkurs obejmuje dwie kategorie: <strong>OPEN</strong> i <strong>MEDIA LAB</strong>.</li>
                  <li>Zgłoszenia udziału należy przesyłać na adres: <a href="mailto:vjbattle@cech.video" className="text-primary hover:underline">vjbattle@cech.video</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Cele konkursu</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Promocja sztuki VJ-skiej i twórczości audiowizualnej.</li>
                  <li>Integracja artystów i twórców nowych mediów.</li>
                  <li>Wymiana doświadczeń twórczych i technologicznych.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Kategorie konkursowe</h2>

                <h3 className="text-xl font-medium mt-6 mb-3">A) Kategoria OPEN</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Uczestnicy zgłoszeni za pomocą e-maila: <a href="mailto:vjbattle@cech.video" className="text-primary hover:underline">vjbattle@cech.video</a></li>
                  <li>Udział dla osób indywidualnych oraz zespołów</li>
                  <li>System pucharowy – zwycięzca rundy przechodzi dalej</li>
                  <li>Kolejność występów może zostać ustalona losowo</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">B) Kategoria MEDIA LAB</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Udział wyłącznie dla studentów UAP w Poznaniu</li>
                  <li>Czas prezentacji około 30 minut</li>
                  <li>Ocenia kapituła konkursowa powołana przez organizatora</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Nagrody</h2>

                <h3 className="text-xl font-medium mt-6 mb-3">OPEN</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>1. miejsce</strong> - 2000 zł</li>
                  <li><strong>2. miejsce</strong> - 1000 zł</li>
                  <li><strong>3. miejsce</strong> - 500 zł</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">MEDIA LAB</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nagrody rzeczowe</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Organizator zastrzega prawo przyznania wyróżnień.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Zasady oceniania</h2>

                <h3 className="text-xl font-medium mt-6 mb-3">Kategoria OPEN</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Głosowanie publiczności (np. InstaStories) lub</li>
                  <li>Decyzja kapituły konkursowej</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">Kategoria MEDIA LAB</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Decyzja kapituły konkursowej</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">Kryteria oceny:</h3>
                <p>Koncepcja, kreatywność, jakość artystyczna i audiowizualna</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Materiały wizualne i zasady techniczne</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dozwolone materiały pre-produkowane i/lub generowane na żywo</li>
                  <li>Zakaz treści naruszających prawo i prawa autorskie</li>
                  <li>Organizator zapewnia podstawowe złącza i infrastrukturę projekcyjną</li>
                  <li>Uczestnicy we własnym zakresie zapewniają sprzęt</li>
                  <li>Każdy uczestnik otrzyma czas na konfigurację techniczną</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Zgłoszenia</h2>
                <p className="mb-4">Zgłoszenie powinno zawierać:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Imię i nazwisko / nazwa zespołu</li>
                  <li>Pseudonim</li>
                  <li>Kategorię</li>
                  <li>Skład</li>
                  <li>Dane kontaktowe</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Liczba miejsc ograniczona — decyduje kolejność zgłoszeń.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Licencje, publikacje i zgody</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zgłoszenie udziału oznacza akceptację regulaminu</li>
                  <li>Uczestnik wyraża zgodę na publikację materiałów z wydarzenia w celach promocyjnych</li>
                  <li>Organizator może zmienić regulamin — informując uczestników</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Postanowienia końcowe</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>W sprawach nieuregulowanych decyduje organizator i kapituła</li>
                  <li>Organizator nie odpowiada za szkody wynikłe z winy uczestników</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
