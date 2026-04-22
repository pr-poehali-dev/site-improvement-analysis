import Icon from "@/components/ui/icon";
import { AnimatedSection, SectionLabel } from "@/components/shared";
import { PARTS_BRANDS, GARAGE_PHOTOS } from "@/data/constants";

interface GaragePartsSectionProps {
  t: (key: string) => string;
  onScrollTo: (id: string) => void;
}

export default function GaragePartsSection({ t, onScrollTo }: GaragePartsSectionProps) {
  return (
    <>
      {/* GARAGE */}
      <section id="garage" className="py-24 px-6 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, hsl(0 90% 45% / 0.06) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>{t("garage_label")}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">{t("garage_title")}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("garage_p1")}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t("garage_p2").split("Harley-Davidson")[0]}
                <span className="text-fire font-medium">Harley-Davidson</span>
                {t("garage_p2").split("Harley-Davidson")[1] ?? ""}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Wrench", key: "garage_custom" },
                  { icon: "Settings", key: "garage_service" },
                  { icon: "Zap", key: "garage_electric" },
                  { icon: "Shield", key: "garage_warranty" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center gap-3 p-3 border border-border rounded-sm bg-background">
                    <Icon name={item.icon} size={16} className="text-fire flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{t(item.key)}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onScrollTo("contact")}
                className="mt-8 font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
                style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.35)" }}
              >
                {t("garage_btn")}
              </button>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-sm border border-border col-span-2">
                  <img src={GARAGE_PHOTOS.main} alt="Garage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={GARAGE_PHOTOS.left} alt="Garage work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={GARAGE_PHOTOS.right} alt="Garage detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PARTS */}
      <section id="parts" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionLabel>{t("parts_label")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">{t("parts_title")}</h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-4">{t("parts_p1")}</p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-12">
              {t("parts_p2")} <span className="text-fire">{t("parts_p2_accent")}</span>
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {PARTS_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  title={brand.name}
                  className="group/brand relative flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-body text-sm text-muted-foreground hover:border-fire/50 hover:text-foreground transition-all cursor-default"
                >
                  {brand.logo && (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-10 h-10 object-contain rounded-sm opacity-70"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                  {brand.name}
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background border border-border text-foreground text-xs font-body px-2 py-1 rounded-sm opacity-0 group-hover/brand:opacity-100 transition-opacity duration-200 z-10">
                    {brand.name}
                  </span>
                </div>
              ))}
              <div className="px-4 py-2 border border-fire/30 rounded-sm font-body text-sm text-fire bg-fire/5">
                {t("parts_more")}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
