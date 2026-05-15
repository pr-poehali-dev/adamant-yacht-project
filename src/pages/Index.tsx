import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/5d6df807-5967-4513-b48d-b5442e90ff3a/files/4fa86da6-3fef-4bb0-9d53-4706144cdbdf.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/5d6df807-5967-4513-b48d-b5442e90ff3a/files/95677ca5-4072-47c2-b526-0d9dcd04f50f.jpg";
const FISHING_IMG = "https://cdn.poehali.dev/projects/5d6df807-5967-4513-b48d-b5442e90ff3a/files/023cb1dd-58b4-4f7b-b1f8-c2c01bc8e1b2.jpg";

const SERVICES = [
  { icon: "Fish", title: "Рыбалка", desc: "Выезд на лучшие места Кубани. Снасти, живая наживка, помощь опытного рыбака.", price: "от 4 000 ₽", duration: "4–8 часов" },
  { icon: "Waves", title: "Прогулки", desc: "Панорамные маршруты по реке Кубань. Красивые виды, свежий воздух, романтика.", price: "от 2 500 ₽", duration: "1–4 часа" },
  { icon: "Camera", title: "Фотосессии", desc: "Профессиональные съёмки на воде. Уникальные кадры для личного архива и соцсетей.", price: "от 3 500 ₽", duration: "2–3 часа" },
  { icon: "UtensilsCrossed", title: "Пикники", desc: "Выезд на живописный берег. Мангал, столик, природа — идеальный отдых с семьёй.", price: "от 5 000 ₽", duration: "4–6 часов" },
];

const TARIFFS = [
  {
    name: "Прогулка", hours: 2, price: 2500,
    features: ["До 8 человек", "Топливо включено", "Прохладительные напитки", "Маршрут по Кубани"],
    popular: false,
  },
  {
    name: "Полдня", hours: 4, price: 4500,
    features: ["До 8 человек", "Топливо включено", "Снасти для рыбалки", "Закуски на борту", "Остановка на берегу"],
    popular: true,
  },
  {
    name: "Весь день", hours: 8, price: 8000,
    features: ["До 8 человек", "Топливо включено", "Полный набор снастей", "Мангал и решётка", "Обед на берегу", "Капитан + помощник"],
    popular: false,
  },
];

const REVIEWS = [
  { name: "Александр К.", date: "Май 2025", rating: 5, text: "Отличная рыбалка! Поймали судака и леща. Капитан отвёз на отличное место, всё организовано на высшем уровне.", service: "Рыбалка" },
  { name: "Марина Ш.", date: "Апрель 2025", rating: 5, text: "Делали фотосессию на катере — просто сказка. Снимки получились невероятные, красивые виды на Кубань.", service: "Фотосессия" },
  { name: "Семья Петровых", date: "Март 2025", rating: 5, text: "Взяли на целый день с пикником. Дети в восторге, природа потрясающая. Обязательно вернёмся летом!", service: "Пикник" },
];

const SPECS = [
  { label: "Длина", value: "7,5 м" },
  { label: "Ширина", value: "2,4 м" },
  { label: "Вместимость", value: "8 чел." },
  { label: "Двигатель", value: "115 л.с." },
  { label: "Скорость", value: "до 45 км/ч" },
  { label: "Осадка", value: "0,45 м" },
];

const GALLERY = [
  { src: HERO_IMG, label: "Катер Адамант на Кубани" },
  { src: INTERIOR_IMG, label: "Уютный борт" },
  { src: FISHING_IMG, label: "Рыбалка на рассвете" },
];

const ROUTES = [
  { id: 1, name: "Городской маршрут", km: 12, desc: "Краснодар → Мостовой парк → Набережная", time: "1,5 ч" },
  { id: 2, name: "Пикниковый берег", km: 25, desc: "Краснодар → Белозёрный → Живописная бухта", time: "3 ч" },
  { id: 3, name: "Рыбацкий выезд", km: 40, desc: "Краснодар → Тимашевск → Лучшие плёсы Кубани", time: "5–6 ч" },
];

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [selectedTariff, setSelectedTariff] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "10:00", service: "Прогулки", guests: "2" });
  const [submitted, setSubmitted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const currentTariff = TARIFFS[selectedTariff];
  const extraGuests = Math.max(0, parseInt(form.guests || "0") - 4);
  const price = currentTariff.price + extraGuests * 300;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen font-body bg-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-2xl font-semibold text-white tracking-wide">
            <span style={{ color: "var(--gold)" }}>⚓</span> Адамант
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {[["services","Услуги"],["tariffs","Тарифы"],["gallery","Галерея"],["routes","Маршруты"],["reviews","Отзывы"],["booking","Бронирование"]].map(([id, label]) => (
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
            {[["services","Услуги"],["tariffs","Тарифы"],["gallery","Галерея"],["routes","Маршруты"],["reviews","Отзывы"],["booking","Бронирование"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left hover:text-yellow-300 transition-colors py-1 border-b border-white/10">{label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Катер Адамант" className="w-full h-full object-cover" />
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
          <p className="font-body text-white/75 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in animate-delay-300" style={{ animationFillMode: "both" }}>
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

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Что мы предлагаем</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "var(--navy)" }}>Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveService(i)}
                className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
                style={activeService === i
                  ? { background: "var(--navy)", color: "white", transform: "scale(1.04)", boxShadow: "0 20px 60px rgba(26,49,99,0.25)" }
                  : { background: "#f7f9fc" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={activeService === i ? { background: "var(--gold)", color: "#0d1e40" } : { background: "#dae8ff", color: "var(--navy)" }}
                >
                  <Icon name={s.icon} size={22} fallback="Star" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={activeService === i ? { color: "rgba(255,255,255,0.75)" } : { color: "#6b7280" }}>{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm" style={activeService === i ? { color: "var(--gold-light)" } : { color: "var(--gold)" }}>{s.price}</span>
                  <span className="text-xs" style={activeService === i ? { color: "rgba(255,255,255,0.5)" } : { color: "#9ca3af" }}>{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24" style={{ background: "#f7f9fc" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Прозрачные цены</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "var(--navy)" }}>Тарифы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TARIFFS.map((t, i) => (
              <div
                key={i}
                onClick={() => setSelectedTariff(i)}
                className="relative rounded-2xl p-8 cursor-pointer transition-all duration-300"
                style={selectedTariff === i
                  ? { background: "var(--navy)", color: "white", transform: "scale(1.04)", boxShadow: "0 24px 64px rgba(13,30,64,0.3)" }
                  : { background: "white" }}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ background: "var(--gold)", color: "#0d1e40" }}>
                    Популярный
                  </div>
                )}
                <div className="mb-1">
                  <span className="text-sm uppercase tracking-wider font-semibold" style={selectedTariff === i ? { color: "rgba(255,255,255,0.5)" } : { color: "#9ca3af" }}>
                    {t.hours} часа
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold mb-2">{t.name}</h3>
                <div className="mb-6">
                  <span className="font-body text-4xl font-bold" style={selectedTariff === i ? { color: "var(--gold-light)" } : { color: "var(--navy)" }}>
                    {t.price.toLocaleString("ru")} ₽
                  </span>
                </div>
                <ul className="space-y-2 mb-8">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={selectedTariff === i ? { color: "rgba(255,255,255,0.8)" } : { color: "#4b5563" }}>
                      <Icon name="Check" size={13} fallback="Circle" style={selectedTariff === i ? { color: "var(--gold-light)" } : { color: "var(--gold)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => { e.stopPropagation(); scrollTo("booking"); }}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={selectedTariff === i ? { background: "var(--gold)", color: "#0d1e40" } : { background: "var(--navy)", color: "white" }}
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">* Дополнительно от 5 человек — +300 ₽/чел. Индивидуальные условия по запросу.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Посмотри сам</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "var(--navy)" }}>Галерея</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: "auto auto" }}>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-2" style={{ height: "420px" }}>
              <img src={GALLERY[0].src} alt={GALLERY[0].label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{GALLERY[0].label}</div>
            </div>
            {GALLERY.slice(1).map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: "200px" }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24" style={{ background: "var(--navy-dark)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Куда идём</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white">Маршруты на Кубани</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden" style={{ height: "420px", border: "2px solid rgba(201,162,39,0.25)" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=38.9765%2C45.0355&z=9&l=map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Маршруты катера Адамант"
              />
            </div>
            <div className="space-y-4">
              {ROUTES.map((r) => (
                <div key={r.id} className="glass rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300" style={{ borderColor: "rgba(201,162,39,0.2)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs uppercase tracking-wider mb-1 block" style={{ color: "var(--gold)" }}>Маршрут {r.id}</span>
                      <h3 className="font-display text-2xl text-white font-semibold">{r.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">{r.km} км</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{r.time}</div>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{r.desc}</p>
                </div>
              ))}
              <button
                onClick={() => scrollTo("booking")}
                className="w-full py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
                style={{ background: "var(--gold)", color: "#0d1e40" }}
              >
                Выбрать маршрут и забронировать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Технические данные</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "var(--navy)" }}>Характеристики катера</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SPECS.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center" style={{ background: "#f7f9fc" }}>
                <div className="font-display text-3xl font-semibold mb-1" style={{ color: "var(--navy)" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "#9ca3af" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24" style={{ background: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Что говорят гости</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "var(--navy)" }}>Отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#4b5563" }}>«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "#9ca3af" }}>{r.date}</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#dae8ff", color: "var(--navy)" }}>{r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 font-body" style={{ color: "var(--gold)" }}>Онлайн-запись</p>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "var(--navy)" }}>Бронирование</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-3xl p-8 shadow-xl" style={{ background: "var(--navy)" }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="font-display text-3xl text-white mb-3">Заявка принята!</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Свяжемся с вами в течение 30 минут для подтверждения бронирования.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold" style={{ background: "var(--gold)", color: "#0d1e40" }}>
                    Новая заявка
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-2xl text-white mb-6">Оставить заявку</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Ваше имя</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван Иванов"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Телефон</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (900) 000-00-00"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Услуга</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all appearance-none"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title} style={{ background: "#1a3163" }}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Дата</label>
                      <input type="date" required value={form.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Время</label>
                      <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all appearance-none"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                        {["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"].map((t) => (
                          <option key={t} value={t} style={{ background: "#1a3163" }}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Количество гостей</label>
                    <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all appearance-none"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={String(n)} style={{ background: "#1a3163" }}>{n} чел.</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:opacity-95 active:scale-95 mt-2"
                    style={{ background: "var(--gold)", color: "#0d1e40" }}>
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-3xl font-semibold mb-2" style={{ color: "var(--navy)" }}>Расчёт стоимости</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>Выберите тариф — цена рассчитается автоматически.</p>
              </div>
              <div className="space-y-3">
                {TARIFFS.map((t, i) => (
                  <button key={i} onClick={() => setSelectedTariff(i)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200"
                    style={selectedTariff === i
                      ? { borderColor: "var(--gold)", background: "#fffbf0" }
                      : { borderColor: "#e5e7eb", background: "white" }}>
                    <div className="text-left">
                      <div className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{t.name} · {t.hours} ч.</div>
                      <div className="text-xs" style={{ color: "#9ca3af" }}>{t.features.slice(0, 2).join(", ")}</div>
                    </div>
                    <div className="font-bold text-base" style={{ color: selectedTariff === i ? "var(--gold)" : "var(--navy)" }}>
                      {t.price.toLocaleString("ru")} ₽
                    </div>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl p-6" style={{ background: "#f7f9fc" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm" style={{ color: "#6b7280" }}>Тариф «{currentTariff.name}»</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>{currentTariff.price.toLocaleString("ru")} ₽</span>
                </div>
                {extraGuests > 0 && (
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm" style={{ color: "#6b7280" }}>Доп. {extraGuests} чел.</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>+{(extraGuests * 300).toLocaleString("ru")} ₽</span>
                  </div>
                )}
                <div className="flex items-center justify-between" style={{ borderTop: "1px solid #e5e7eb", paddingTop: "12px" }}>
                  <span className="font-semibold" style={{ color: "var(--navy)" }}>Итого</span>
                  <span className="font-display text-3xl font-semibold" style={{ color: "var(--gold)" }}>
                    {price.toLocaleString("ru")} ₽
                  </span>
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ border: "2px solid rgba(201,162,39,0.25)", background: "white" }}>
                <h4 className="font-semibold mb-4" style={{ color: "var(--navy)" }}>Связаться напрямую</h4>
                <div className="space-y-3">
                  <a href="tel:+79001234567" className="flex items-center gap-3 text-sm hover:opacity-75 transition-opacity">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#dae8ff" }}>
                      <Icon name="Phone" size={15} style={{ color: "var(--navy)" }} />
                    </div>
                    <span style={{ color: "var(--navy)" }}>+7 (900) 123-45-67</span>
                  </a>
                  <a href="https://wa.me/79001234567" className="flex items-center gap-3 text-sm hover:opacity-75 transition-opacity">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#d1fae5" }}>
                      <Icon name="MessageCircle" size={15} style={{ color: "#16a34a" }} />
                    </div>
                    <span style={{ color: "#6b7280" }}>WhatsApp</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#fef3c7" }}>
                      <Icon name="MapPin" size={15} style={{ color: "var(--gold)" }} />
                    </div>
                    <span style={{ color: "#6b7280" }}>г. Краснодар, причал Северный</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: "var(--navy-dark)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <div className="font-display text-2xl font-semibold mb-1">
                <span style={{ color: "var(--gold)" }}>⚓</span> Адамант
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>г. Краснодар · Река Кубань</div>
            </div>
            <div className="flex gap-6 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {[["services","Услуги"],["tariffs","Тарифы"],["routes","Маршруты"],["booking","Бронирование"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{label}</button>
              ))}
            </div>
            <div className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>© 2025 Катер Адамант</div>
          </div>
        </div>
      </footer>
    </div>
  );
}