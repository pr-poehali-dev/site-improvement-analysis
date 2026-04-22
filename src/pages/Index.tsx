import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import NavBar from "@/components/NavBar";
import PortfolioSection from "@/components/PortfolioSection";
import { Lang, TRANSLATIONS, STATS, PARTS_BRANDS, PHOTO_2, PHOTO_3, PHOTO_5, GARAGE_PHOTOS, FAMILY_PHOTOS, OPENING_2022_PHOTOS, ROSTOV_DRIFT_PHOTOS, ROSTOV_DRIVE_SHOW_PHOTOS, CUSTOM_CONVENTION_2025_PHOTOS, OUR_WORK_PHOTOS } from "@/data/constants";



function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
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

function BlogAlbum({ title, desc, photosLabel, photos, cover }: {
  title: string; desc: string; photosLabel: string; photos: string[]; cover: string;
}) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="border border-border rounded-sm overflow-hidden hover:border-fire/40 transition-all duration-300">
      <div
        className="flex items-center gap-5 p-5 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <div className="w-24 h-16 rounded-sm overflow-hidden flex-shrink-0 border border-border">
          <img src={cover} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 min-w-0">

          <h3 className="font-display text-xl uppercase tracking-wide truncate">{title}</h3>
          <p className="font-body text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 text-muted-foreground">
          <span className="font-body text-xs">{photos.length} {photosLabel}</span>
          <Icon name={open ? "ChevronUp" : "ChevronDown"} size={18} className="text-fire" />
        </div>
      </div>

      {open && (
        <div className="border-t border-border p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {photos.map((url, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-sm cursor-pointer border border-border hover:border-fire/50 transition-all"
                onClick={() => setLightbox(url)}
                style={{display: 'block'}}
              >
                <img
                  src={url}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-card border border-border rounded-sm flex items-center justify-center text-foreground hover:text-fire transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

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

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/5bc3c815-add3-4abb-a611-45ae136e9a03.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 90% 45% / 0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 border border-fire/40 rounded-sm mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" />
              <span className="font-body text-xs text-fire tracking-widest uppercase">{t("hero_badge")}</span>
            </div>

            <img
              src="https://cdn.poehali.dev/files/f73e2b6c-0393-4f3a-a5dc-efbe878bfb52.png"
              alt="Chopper Doctors World"
              className="w-64 md:w-96 lg:w-[420px] object-contain mb-6 opacity-0 animate-fade-in drop-shadow-2xl"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            />

            <p
              className="font-display text-xl md:text-2xl text-fire/90 tracking-wide mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              {t("hero_slogan")}
            </p>

            <p
              className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              {t("hero_desc")}
            </p>

            <div
              className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("portfolio")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
                style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
              >
                {t("hero_btn_portfolio")}
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 border border-foreground/25 text-foreground hover:border-fire hover:text-fire transition-all rounded-sm"
              >
                {t("hero_btn_contact")}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-fire/50 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <AnimatedSection key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-fire mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-widest">{t(stat.key)}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection lang={lang} />

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
                onClick={() => scrollTo("contact")}
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

      {/* FAMILY */}
      <section id="family" className="py-24 px-6 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom left, hsl(0 90% 45% / 0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={FAMILY_PHOTOS.top_left} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={FAMILY_PHOTOS.top_right} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm border border-border col-span-2">
                  <img src={FAMILY_PHOTOS.bottom} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionLabel>{t("family_label")}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">{t("family_title")}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("family_p1")}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("family_p2")}</p>
              <p className="font-body text-fire italic text-lg leading-relaxed">{t("family_quote")}</p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-16">
            <SectionLabel>{t("blog_label")}</SectionLabel>
            <h3 className="font-display text-3xl uppercase tracking-tight mb-4">{t("blog_title")}</h3>
            <p className="font-body text-muted-foreground max-w-2xl leading-relaxed mb-8">{t("blog_desc")}</p>
            <BlogAlbum
              title={t("album_opening_title")}
              desc={t("album_opening_desc")}
              photosLabel={t("album_opening_photos")}
              photos={OPENING_2022_PHOTOS}
              cover="https://cdn.poehali.dev/files/a70aab46-8237-4451-b728-520f31544a23.jpg"
            />
            <div className="mt-6">
              <BlogAlbum
                title={t("album_rostov_title")}
                desc={t("album_rostov_desc")}
                photosLabel={t("album_rostov_photos")}
                photos={ROSTOV_DRIFT_PHOTOS}
                cover="https://cdn.poehali.dev/files/fa199657-90aa-4536-8b6b-51b9feb577c9.jpg"
              />
            </div>
            <div className="mt-6">
              <BlogAlbum
                title={t("album_drive_show_title")}
                desc={t("album_drive_show_desc")}
                photosLabel={t("album_drive_show_photos")}
                photos={ROSTOV_DRIVE_SHOW_PHOTOS}
                cover="https://cdn.poehali.dev/files/a1d1dc1f-4dfc-4a68-ba20-832ae8300470.jpg"
              />
            </div>
            <div className="mt-6">
              <BlogAlbum
                title={t("album_custom_conv_title")}
                desc={t("album_custom_conv_desc")}
                photosLabel={t("album_custom_conv_photos")}
                photos={CUSTOM_CONVENTION_2025_PHOTOS}
                cover="https://cdn.poehali.dev/files/4087c118-81c9-44d7-bb67-78648c716527.jpg"
              />
            </div>
            <div className="mt-6">
              <BlogAlbum
                title={t("album_our_work_title")}
                desc={t("album_our_work_desc")}
                photosLabel={t("album_our_work_photos")}
                photos={OUR_WORK_PHOTOS}
                cover="https://cdn.poehali.dev/files/3ab4bafb-95ee-4f59-8c8e-d2321cbf8dfe.jpg"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, hsl(0 90% 45% / 0.06) 0%, transparent 65%)" }} />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <SectionLabel>{t("contact_label")}</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-4">
            {t("contact_title")}<br />
            <span className="text-fire">{t("contact_title2")}</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
            {t("contact_desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className="font-display text-sm tracking-widest uppercase px-10 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
              style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
            >
              {t("contact_write")}
            </button>
            <a
              href="tel:+34656828348"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              {t("contact_call")}
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm font-body">
              <Icon name="MapPin" size={14} className="text-fire flex-shrink-0" />
              {t("contact_address")}
            </div>
            {t("contact_hours_title") !== "contact_hours_title" && (
              <div className="border border-border rounded-sm px-6 py-4 text-sm font-body text-center">
                <p className="text-fire font-display text-xs uppercase tracking-widest mb-2">{t("contact_hours_title")}</p>
                <p>{t("contact_hours_1")}</p>
                <p>{t("contact_hours_2")}</p>
                <p>{t("contact_hours_3")}</p>
                <p className="mt-2 text-xs text-muted-foreground/70">{t("contact_payment")}</p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-fire rounded-sm flex items-center justify-center">
                <Icon name="Wrench" size={12} className="text-white rotate-45" />
              </div>
              <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
                Chopper<span className="text-fire">Doctors</span> World
              </span>
            </div>
            <div className="flex items-center gap-4">
              {["Instagram", "Youtube", "MessageCircle"].map(icon => (
                <button key={icon} className="w-8 h-8 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:border-fire hover:text-fire transition-all">
                  <Icon name={icon} size={14} />
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-body">
            <p>{t("footer_rights")}</p>
            <button className="hover:text-fire transition-colors">{t("footer_terms")}</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;