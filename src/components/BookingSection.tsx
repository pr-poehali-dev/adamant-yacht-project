import Icon from "@/components/ui/icon";
import { SERVICES, TARIFFS } from "@/components/ContentSections";

interface BookingForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  guests: string;
}

interface BookingSectionProps {
  form: BookingForm;
  setForm: (form: BookingForm) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  sending: boolean;
  setSending: (v: boolean) => void;
  sendError: string;
  setSendError: (v: string) => void;
  selectedTariff: number;
  setSelectedTariff: (i: number) => void;
}

export default function BookingSection({
  form,
  setForm,
  submitted,
  setSubmitted,
  sending,
  setSending,
  sendError,
  setSendError,
  selectedTariff,
  setSelectedTariff,
}: BookingSectionProps) {
  const currentTariff = TARIFFS[selectedTariff];
  const extraGuests = Math.max(0, parseInt(form.guests || "0") - 4);
  const price = currentTariff.price + extraGuests * 300;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("https://functions.poehali.dev/47fa07b1-dad6-4714-b5b9-ec9c89f47712", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: form.date,
          time: form.time,
          guests: form.guests,
          tariff: currentTariff.name,
          price,
        }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSubmitted(true);
    } catch {
      setSendError("Не удалось отправить заявку. Пожалуйста, позвоните нам напрямую.");
    } finally {
      setSending(false);
    }
  };

  return (
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
                {sendError && (
                  <p className="text-sm text-red-400 text-center">{sendError}</p>
                )}
                <button type="submit" disabled={sending} className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:opacity-95 active:scale-95 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--gold)", color: "#0d1e40" }}>
                  {sending ? "Отправляем..." : "Отправить заявку"}
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
  );
}
