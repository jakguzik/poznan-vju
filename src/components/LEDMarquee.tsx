export function LEDMarquee() {
  const message = 'POZNAŃ.VJU · AV FESTIWAL · MAŁE ŚWIĘTO VJÓW W POZNANIU · SPOTKANIE ARTYSTÓW WIZUALNYCH · MAPPING · WIZUALIZACJE · VISUAL JOCKEYING · WSPÓLNOTA VJÓW · ';

  return (
    <div className="w-full overflow-hidden bg-black border-t border-border relative">
      {/* LED Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(244, 41, 132, 0.3) 1px, transparent 1px),
            radial-gradient(circle, rgba(244, 41, 132, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px',
        }}
      />

      <div className="led-marquee-container py-[30px] relative">
        <div className="led-marquee-content-wrapper">
          <div className="led-marquee-content">
            <span
              className="led-text inline-block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider"
              style={{
                fontFamily: '"Bitcount Grid Double", monospace',
                fontWeight: 300,
                textShadow: `
                  0 0 10px rgba(244, 41, 132, 0.8),
                  0 0 20px rgba(244, 41, 132, 0.5),
                  0 0 30px rgba(244, 41, 132, 0.3)
                `,
                color: '#F42984',
              }}
              aria-hidden="true"
            >
              {message}
            </span>
            <span
              className="led-text inline-block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider"
              style={{
                fontFamily: '"Bitcount Grid Double", monospace',
                fontWeight: 300,
                textShadow: `
                  0 0 10px rgba(244, 41, 132, 0.8),
                  0 0 20px rgba(244, 41, 132, 0.5),
                  0 0 30px rgba(244, 41, 132, 0.3)
                `,
                color: '#F42984',
              }}
              aria-hidden="true"
            >
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
