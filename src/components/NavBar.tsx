import Icon from "@/components/ui/icon";
import { Lang, LANGUAGES, TRANSLATIONS } from "@/data/constants";

interface NavBarProps {
  lang: Lang;
  langOpen: boolean;
  menuOpen: boolean;
  activeSection: string;
  onLangToggle: () => void;
  onLangSelect: (code: Lang) => void;
  onMenuToggle: () => void;
  onScrollTo: (id: string) => void;
}

const NAV_LINKS = [
  { id: "portfolio", key: "nav_bikes" },
  { id: "garage", key: "nav_garage" },
  { id: "parts", key: "nav_parts" },
  { id: "family", key: "nav_family" },
];

export default function NavBar({
  lang, langOpen, menuOpen, activeSection,
  onLangToggle, onLangSelect, onMenuToggle, onScrollTo,
}: NavBarProps) {
  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => onScrollTo("home")}>
          <img
            src="https://cdn.poehali.dev/files/72784b27-9292-49fa-b815-c6aaa9146f3e.jpg"
            alt="Chopper Doctors World"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className={`font-display text-sm tracking-widest uppercase transition-colors ${
                activeSection === link.id ? "text-fire" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.key)}
            </button>
          ))}
          <button
            onClick={() => onScrollTo("contact")}
            className="font-display text-sm tracking-widest uppercase px-5 py-2 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
          >
            {t("nav_contact")}
          </button>

          <div className="relative">
            <button
              onClick={onLangToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-sm text-muted-foreground hover:border-fire/50 hover:text-foreground transition-all font-body text-sm"
            >
              <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
              <span className="font-display text-xs tracking-widest">{lang.toUpperCase()}</span>
              <Icon name="ChevronDown" size={12} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm overflow-hidden z-50 min-w-[100px]">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => onLangSelect(l.code)}
                    className={`w-full flex items-center gap-2 px-3 py-2 font-body text-sm transition-colors ${
                      lang === l.code ? "text-fire bg-fire/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span className="font-display text-xs tracking-widest">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <div className="relative">
            <button
              onClick={onLangToggle}
              className="flex items-center gap-1 px-2 py-1 border border-border rounded-sm text-muted-foreground font-body text-xs"
            >
              <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
              <span>{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm overflow-hidden z-50">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => onLangSelect(l.code)}
                    className="w-full flex items-center gap-2 px-3 py-2 font-body text-xs text-muted-foreground hover:text-fire"
                  >
                    <span>{l.flag}</span><span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-foreground" onClick={onMenuToggle}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {[...NAV_LINKS, { id: "contact", key: "nav_contact" }].map(link => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className="font-display text-sm tracking-widest uppercase text-left text-muted-foreground hover:text-fire transition-colors"
            >
              {t(link.key)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}