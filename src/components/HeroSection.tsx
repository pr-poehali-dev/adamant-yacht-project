const HERO_IMG = "https://cdn.poehali.dev/files/7dc4c246-b44f-4b4b-9cb1-e8881802ae7d.jpg";
const PIER_IMG = "https://cdn.poehali.dev/files/cd97b22e-ab0a-4e58-b4aa-6bceb3d23128.jpg";
const RIVER_IMG = "https://cdn.poehali.dev/files/7401d533-aa8d-44c7-9fdb-60d34868a061.jpeg";

const SPECS = [
  { label: "Длина", value: "5,0 м" },
  { label: "Ширина", value: "2,4 м" },
  { label: "Вместимость", value: "6 чел." },
  { label: "Двигатель", value: "40 л.с." },
  { label: "Скорость", value: "до 35 км/ч" },
  { label: "Осадка", value: "0,35 м" },
];

interface HeroSectionProps {
  heroSlide: number;
  scrollTo: (id: string) => void;
}

export default function HeroSection({ heroSlide, scrollTo }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[HERO_IMG, PIER_IMG, RIVER_IMG].map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Катер Адамант"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: heroSlide === i ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,30,64,0.55) 0%, rgba(13,30,64,0.35) 50%, rgba(13,30,64,0.88) 100%)" }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 C360,80 1080,20 1440,50 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <p className="font-body tracking-[0.3em] text-sm uppercase mb-4 animate-fade-in" style={{ color: "var(--gold-light)", animationFillMode: "both" }}>
          Краснодарский край · Река Кубань
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-semibold leading-none mb-6 animate-fade-in animate-delay-200" style={{ animationFillMode: "both" }}>
          Катер<br />
          <span className="italic" style={{ color: "var(--gold-light)" }}>Адамант</span>
        </h1>
        <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto animate-fade-in animate-delay-300" style={{ color: "rgba(255,255,255,0.75)", animationFillMode: "both" }}>
          Аренда катера для рыбалки, прогулок, фотосессий и пикников. До 8 человек, лучшие маршруты Кубани.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400" style={{ animationFillMode: "both" }}>
          <button
            onClick={() => scrollTo("booking")}
            className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
            style={{ background: "var(--gold)", color: "#0d1e40" }}
          >
            Забронировать
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Наши услуги
          </button>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 z-10 px-4">
        <div className="max-w-2xl mx-auto glass rounded-2xl px-6 py-4 flex flex-wrap justify-center gap-6">
          {SPECS.slice(0, 4).map((s) => (
            <div key={s.label} className="text-center text-white">
              <div className="font-display text-xl font-semibold" style={{ color: "var(--gold-light)" }}>{s.value}</div>
              <div className="text-xs text-white/55 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}