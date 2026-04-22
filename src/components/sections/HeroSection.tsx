import { AnimatedSection } from "@/components/shared";
import { STATS } from "@/data/constants";

interface HeroSectionProps {
  t: (key: string) => string;
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ t, onScrollTo }: HeroSectionProps) {
  return (
    <>
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
                onClick={() => onScrollTo("portfolio")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
                style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
              >
                {t("hero_btn_portfolio")}
              </button>
              <button
                onClick={() => onScrollTo("contact")}
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
    </>
  );
}
