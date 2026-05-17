import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import BookingSection from "@/components/BookingSection";

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [selectedTariff, setSelectedTariff] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "10:00", service: "Прогулки", guests: "2" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(s => (s + 1) % 3), 5000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen font-body bg-white overflow-x-hidden">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} scrollTo={scrollTo} />
      <HeroSection heroSlide={heroSlide} scrollTo={scrollTo} />
      <ContentSections
        activeService={activeService}
        setActiveService={setActiveService}
        selectedTariff={selectedTariff}
        setSelectedTariff={setSelectedTariff}
        scrollTo={scrollTo}
      />
      <BookingSection
        form={form}
        setForm={setForm}
        submitted={submitted}
        setSubmitted={setSubmitted}
        sending={sending}
        setSending={setSending}
        sendError={sendError}
        setSendError={setSendError}
        selectedTariff={selectedTariff}
        setSelectedTariff={setSelectedTariff}
      />

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
