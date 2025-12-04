import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { type Theme, setTheme as setThemeServer } from '~/lib/theme';

const LS_KEY = 'vite-ui-theme';
type Ctx = { theme: Theme; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({
  initial,
  children,
}: {
  initial: Theme;
  children: React.ReactNode;
}) {
  // 1 Initialize with the server value to avoid hydration mismatch
  const [theme, setThemeState] = useState<Theme>(initial);

  // 2 After mount, check localStorage and update if different
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme-provider.tsx:20',message:'ThemeProvider useEffect entry',data:{initial,lsKey:LS_KEY},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    const ls = localStorage.getItem(LS_KEY) as Theme | null;
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme-provider.tsx:22',message:'ThemeProvider localStorage check',data:{ls,initial,willUpdate:ls && ls !== initial},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    if (ls && ls !== initial) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme-provider.tsx:24',message:'ThemeProvider setThemeState called',data:{newTheme:ls,oldTheme:initial},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      setThemeState(ls);
    }
  }, [initial]);

  // 3 keep DOM and LS up to date
  useLayoutEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme-provider.tsx:28',message:'ThemeProvider useLayoutEffect entry',data:{theme},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    const root = document.documentElement;
    root.classList.remove('light', 'dark');

    const applied =
      theme === 'system'
        ? matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    root.classList.add(applied);
    localStorage.setItem(LS_KEY, theme);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/aaaaec1c-2773-4fad-b6fe-fb7030c6fff7',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme-provider.tsx:40',message:'ThemeProvider useLayoutEffect exit',data:{theme,applied},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  }, [theme]);

  // 3 listen to cross-tab changes
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === LS_KEY && e.newValue) {
        const t = e.newValue as Theme;
        if (t !== theme) setThemeState(t);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [theme]);

  // 4 update both stores on toggle
  const setTheme = (next: Theme) => {
    setThemeState(next);
    localStorage.setItem(LS_KEY, next);
    setThemeServer({ data: next }); // persist cookie for future requests
  };

  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
};
