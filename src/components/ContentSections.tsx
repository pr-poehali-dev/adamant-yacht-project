import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/files/7dc4c246-b44f-4b4b-9cb1-e8881802ae7d.jpg";
const PIER_IMG = "https://cdn.poehali.dev/files/cd97b22e-ab0a-4e58-b4aa-6bceb3d23128.jpg";
const RIVER_IMG = "https://cdn.poehali.dev/files/7401d533-aa8d-44c7-9fdb-60d34868a061.jpeg";
const CATCH1_IMG = "https://cdn.poehali.dev/files/6de3446a-6495-44fe-ba92-0fe3c8b4c9c3.jpeg";
const BOAT3_IMG = "https://cdn.poehali.dev/files/4009da30-57c8-4243-9378-7dfbcfad106b.jpg";
const BOAT4_IMG = "https://cdn.poehali.dev/files/52095060-abe0-4f99-b555-9588d39d0d4f.jpg";
const CATCH2_IMG = "https://cdn.poehali.dev/files/13f0974d-fad8-4f7b-80e9-9c65d222e44c.jpeg";
const BOAT5_IMG = "https://cdn.poehali.dev/files/e6c2644d-4811-4021-973d-773bc6a96ed5.jpg";


export const SERVICES = [
  { icon: "Fish", title: "Рыбалка", desc: "Выезд на лучшие места реки Кубани. Снасти, живая наживка, помощь опытного рыбака.", price: "от 4 000 ₽", duration: "от 2 часов" },
  { icon: "Waves", title: "Прогулки", desc: "Панорамные маршруты по реке Кубань. Красивые виды, свежий воздух, романтика.", price: "от 1 500 ₽/1 чел", duration: "1 час" },
  { icon: "Camera", title: "Фотосессии", desc: "Профессиональные съёмки на воде. Уникальные кадры для личного архива и соцсетей.", price: "от 3 500 ₽", duration: "1 час" },
  { icon: "UtensilsCrossed", title: "Пикники", desc: "Выезд в живописные места реки. Постановка на якорь, рыбалка, столик, природа — идеальный отдых с семьёй.", price: "от 3 500 ₽", duration: "от 1 часа" },
];

export const TARIFFS = [
  {
    name: "Прогулка", hours: 1, price: 3500,
    features: ["До 5 человек", "Топливо включено", "Прохладительные напитки", "Маршруты по Кубани"],
    popular: false,
  },
  {
    name: "Полдня", hours: 4, price: 9000,
    features: ["До 5 человек", "Топливо включено", "Снасти для рыбалки", "Закуски с собой", "Остановка на якоре"],
    popular: true,
  },
  {
    name: "Весь день", hours: 7, price: 13000,
    features: ["До 5 человек", "Топливо включено", "Полный набор снастей", "Остановка на якоре", "Обед на борту, с собой", "Капитан на борту"],
    popular: false,
  },
];

const REVIEWS = [
  { name: "Андрей Н.", date: "Июль 2025", rating: 5, text: "Отличная рыбалка! Поймали судака и леща и несколько карасей. Капитан отвёз на отличное место, всё организовано на высшем уровне.", service: "Рыбалка" },
  { name: "Марина Ш.", date: "Июль 2025", rating: 5, text: "Молодожены делали фотосессию на катере — просто сказка, белое платье невесты отлично сочеталось с белой надстройкой катера. Снимки получились невероятные, красивые виды на Кубань.", service: "Фотосессия" },
  { name: "Семья Нерух", date: "Май 2026", rating: 5, text: "Взяли катер на целый день с пикником и рыбалкой на борту. Дети в восторге, даже поймали пару карасей на удочку, любезно предоставленной капитаном, природа потрясающая. Обязательно вернёмся летом!", service: "Пикник" },
];

const SPECS = [
  { label: "Длина", value: "5,0 м" },
  { label: "Ширина", value: "2,4 м" },
  { label: "Вместимость", value: "6 чел." },
  { label: "Двигатель", value: "40 л.с." },
  { label: "Скорость", value: "до 35 км/ч" },
  { label: "Осадка", value: "0,35 м" },
];

const GALLERY = [
  { src: HERO_IMG, label: "Катер Адамант на Кубанской набережной" },
  { src: PIER_IMG, label: "На причале" },
  { src: BOAT5_IMG, label: "Адамант у причала — вид на корму" },
  { src: RIVER_IMG, label: "Вид с борта — свежий ветер Кубани" },
  { src: BOAT3_IMG, label: "Катер Адамант по реке Кубань" },
  { src: BOAT4_IMG, label: "В путь по реке Кубань" },
  { src: CATCH1_IMG, label: "Богатый улов — сом и лещ" },
  { src: CATCH2_IMG, label: "С уловом — судак и сазан" },
];

const ROUTES = [
  { id: 1, name: "Городской маршрут", km: 12, desc: "Краснодар → Юбилейный → Кубано-Набережная", time: "1 ч" },
  { id: 2, name: "Солнечный остров", km: 15, desc: "Причал - 4й Воронежский проезд → Солнечный остров → Живописные берега", time: "1 ч" },
  { id: 3, name: "Рыбацкий выезд", km: 15, desc: "Краснодар → Солнечный остров → Довля рыбы на якоре", time: "2-3 ч" },
];

interface ContentSectionsProps {
  activeService: number;
  setActiveService: (i: number) => void;
  selectedTariff: number;
  setSelectedTariff: (i: number) => void;
  scrollTo: (id: string) => void;
}

export default function ContentSections({
  activeService,
  setActiveService,
  selectedTariff,
  setSelectedTariff,
  scrollTo,
}: ContentSectionsProps) {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer md:col-span-2 md:row-span-2" style={{ height: "420px" }}>
              <img src={GALLERY[0].src} alt={GALLERY[0].label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{GALLERY[0].label}</div>
            </div>
            {GALLERY.slice(1, 3).map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: "200px" }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {GALLERY.slice(3).map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: "260px" }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    </>
  );
}