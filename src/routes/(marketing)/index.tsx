import { createFileRoute } from '@tanstack/react-router';
import { HeroSection } from '~/components/HeroSection';
import { LogosSection } from '~/components/LogosSection';

export const Route = createFileRoute('/(marketing)/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosSection />
    </>
  );
}
