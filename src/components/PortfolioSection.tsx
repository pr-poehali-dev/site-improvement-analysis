import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Lang, TRANSLATIONS, PORTFOLIO_ITEMS } from "@/data/constants";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

function AnimatedSectionLocal({ children, className = "" }: AnimatedSectionProps) {
  const [inView, setInView] = useState(false);
  const ref = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(node);
  };
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-12 bg-fire" />
      <span className="font-body text-xs text-fire uppercase tracking-widest">{children}</span>
    </div>
  );
}

interface PortfolioSectionProps {
  lang: Lang;
}

export default function PortfolioSection({ lang }: PortfolioSectionProps) {
  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  const [activeCategory, setActiveCategory] = useState(TRANSLATIONS[lang].cat_all);
  const [selectedWork, setSelectedWork] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const prevLangRef = { current: lang };
  if (prevLangRef.current !== lang) {
    setActiveCategory(TRANSLATIONS[lang].cat_all);
    prevLangRef.current = lang;
  }

  const categories = [t("cat_all"), t("cat_choppers"), t("cat_bobbers"), t("cat_restoration"), t("cat_tuning"), t("cat_custom")];

  const filteredPortfolio = activeCategory === t("cat_all")
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => {
        const catMap: Record<string, string> = {
          [t("cat_choppers")]: "Чопперы", [t("cat_bobbers")]: "Бобберы",
          [t("cat_restoration")]: "Реставрация", [t("cat_tuning")]: "Тюнинг", [t("cat_custom")]: "Кастом",
        };
        return item.category === (catMap[activeCategory] || activeCategory);
      });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSectionLocal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <SectionLabel>{t("portfolio_label")}</SectionLabel>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">{t("portfolio_title")}</h2>
                <p className="font-body text-muted-foreground max-w-2xl leading-relaxed">{t("portfolio_desc")}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-xs uppercase tracking-widest px-4 py-2 rounded-sm border transition-all ${
                    activeCategory === cat
                      ? "bg-fire text-white border-fire"
                      : "border-border text-muted-foreground hover:border-fire/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSectionLocal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPortfolio.map((item) => (
              <AnimatedSectionLocal key={item.id}>
                <div
                  className="group relative overflow-hidden rounded-sm cursor-pointer bg-card border border-border hover:border-fire/40 transition-all duration-300"
                  onClick={() => setSelectedWork(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-fire/60">
                          <Icon name="Play" size={20} className="text-fire ml-1" />
                        </div>
                      </div>
                    )}
                    <img
                      src="https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/logos/logo_transparent.png"
                      alt=""
                      className="absolute bottom-2 left-2 w-10 h-10 object-contain opacity-60 pointer-events-none"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-xs text-fire uppercase tracking-widest px-2 py-0.5 border border-fire/40 rounded-sm">
                        {item.category}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">{item.year}</span>
                      {item.video && <Icon name="Video" size={12} className="text-fire ml-1" />}
                    </div>
                    <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-sm bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Expand" size={14} className="text-fire" />
                  </div>
                </div>
              </AnimatedSectionLocal>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="max-w-2xl w-full bg-card border border-border rounded-sm overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video relative bg-black">
              {selectedWork.video ? (
                <video
                  src={selectedWork.video}
                  poster={selectedWork.img}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img src={selectedWork.img} alt={selectedWork.title} className="w-full h-full object-cover" />
              )}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-foreground hover:text-fire transition-colors z-10"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-body text-xs text-fire uppercase tracking-widest px-2 py-0.5 border border-fire/40 rounded-sm">
                  {selectedWork.category}
                </span>
                <span className="font-body text-xs text-muted-foreground">{selectedWork.year}</span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-3">{selectedWork.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{selectedWork.desc}</p>
              <button
                onClick={() => { setSelectedWork(null); scrollToContact(); }}
                className="font-display text-sm tracking-widest uppercase px-6 py-3 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
              >
                {t("modal_order")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}