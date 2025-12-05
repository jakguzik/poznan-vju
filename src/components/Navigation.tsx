import { Link, useLocation } from '@tanstack/react-router';
import { cn } from '~/lib/utils';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMenuToggle = () => {
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 400);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const navLinks = [
    { to: '/', label: 'Strona główna' },
    { to: '/program', label: 'Program' },
    { to: '/prelegenci', label: 'Prelegenci' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-black">
      <nav className="flex items-center justify-between px-6 py-4 w-full h-[73px] lg:h-[89px]">
        <Link 
          to="/" 
          className="transition-opacity hover:opacity-80"
        >
          <img 
            src="/logo-nav.svg" 
            alt="Poznań.VJU" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(link.to) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            asChild
            size="sm"
            className="ml-2 whitespace-nowrap"
          >
            <a 
              href="https://www.facebook.com/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gap-3"
            >
              <img src="/fb-icon.svg" alt="" className="size-5" aria-hidden="true" />
              Dołącz do wydarzenia
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={handleMenuToggle}
            className="p-2 text-foreground hover:bg-primary transition-all duration-300 ease-out relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <img
              src="/menu-open.svg"
              alt="Menu"
              className={cn(
                "absolute w-6 h-6 transition-all duration-300",
                mobileMenuOpen ? "scale-0 rotate-90" : "scale-100 rotate-0"
              )}
            />
            <img
              src="/menu-close.svg"
              alt="Close"
              className={cn(
                "absolute w-6 h-6 transition-all duration-300",
                mobileMenuOpen ? "scale-100 rotate-0" : "scale-0 -rotate-90"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 border-t bg-black z-50",
          isClosing ? "slide-up" : "slide-down"
        )}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleMenuClose}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  isActive(link.to) 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              size="sm"
              className="mt-2"
            >
              <a
                href="https://www.facebook.com/events"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
                className="gap-3"
              >
                <img src="/fb-icon.svg" alt="" className="size-5" aria-hidden="true" />
                Dołącz do wydarzenia
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

