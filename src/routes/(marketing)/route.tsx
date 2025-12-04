import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { Navigation } from '~/components/Navigation';
import { Footer } from '~/components/Footer';

export const Route = createFileRoute('/(marketing)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

