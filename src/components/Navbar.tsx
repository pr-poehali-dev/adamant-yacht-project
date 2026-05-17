import Icon from "@/components/ui/icon";

interface NavbarProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const NAV_LINKS = [
  ["services", "Услуги"],
  ["tariffs", "Тарифы"],
  ["gallery", "Галерея"],
  ["routes", "Маршруты"],
  ["reviews", "Отзывы"],
  ["booking", "Бронирование"],
];

export default function Navbar({ navOpen, setNavOpen, scrollTo }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-display text-2xl font-semibold text-white tracking-wide">
          <span style={{ color: "var(--gold)" }}>⚓</span> Адамант
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-yellow-300 transition-colors duration-200">{label}</button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("booking")}
          className="hidden md:block px-5 py-2 rounded text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "var(--gold)", color: "#0d1e40" }}
        >
          Забронировать
        </button>
        <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
          <Icon name={navOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {navOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-white/90 text-sm">
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left hover:text-yellow-300 transition-colors py-1 border-b border-white/10">{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
