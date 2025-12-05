export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Poznań.VJU. Wszystkie prawa zastrzeżone.
          </p>
          <div className="mt-4">
            <img 
              src="/EU.svg" 
              alt="Unia Europejska" 
              className="h-8 w-auto opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
