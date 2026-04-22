import { useState } from "react";
import NavBar from "@/components/NavBar";
import PortfolioSection from "@/components/PortfolioSection";
import HeroSection from "@/components/sections/HeroSection";
import GaragePartsSection from "@/components/sections/GaragePartsSection";
import FamilySection from "@/components/sections/FamilySection";
import ContactFooter from "@/components/sections/ContactFooter";
import { Lang, TRANSLATIONS } from "@/data/constants";

const Index = () => {
  const [lang, setLang] = useState<Lang>("ru");
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLangSelect = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar
        lang={lang}
        langOpen={langOpen}
        menuOpen={menuOpen}
        activeSection={activeSection}
        onLangToggle={() => setLangOpen(!langOpen)}
        onLangSelect={handleLangSelect}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onScrollTo={scrollTo}
      />

      <HeroSection t={t} onScrollTo={scrollTo} />

      <PortfolioSection lang={lang} />

      <GaragePartsSection t={t} onScrollTo={scrollTo} />

      <FamilySection t={t} />

      <ContactFooter t={t} />
    </div>
  );
};

export default Index;
