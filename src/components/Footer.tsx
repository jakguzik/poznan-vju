import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Poznań.VJU. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link 
              to="/" 
              className="transition-colors hover:text-foreground"
            >
              Strona główna
            </Link>
            <Link 
              to="/program" 
              className="transition-colors hover:text-foreground"
            >
              Program
            </Link>
            <Link 
              to="/prelegenci" 
              className="transition-colors hover:text-foreground"
            >
              Prelegenci
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
