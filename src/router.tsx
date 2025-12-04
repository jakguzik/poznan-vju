import { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { routeTree } from './routeTree.gen';
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary';
import { NotFound } from './components/NotFound';

export function getRouter() {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
  });
  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  // #region agent log - intercept router.invalidate
  const originalInvalidate = router.invalidate.bind(router);
  router.invalidate = function(...args: any[]) {
    fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'router.tsx:25',message:'router.invalidate intercepted',data:{args:JSON.stringify(args)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    return originalInvalidate(...args);
  };
  // #endregion

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
