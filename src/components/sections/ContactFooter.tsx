import Icon from "@/components/ui/icon";
import { AnimatedSection, SectionLabel } from "@/components/shared";

interface ContactFooterProps {
  t: (key: string) => string;
}

export default function ContactFooter({ t }: ContactFooterProps) {
  return (
    <>
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
            <a
              href="mailto:mickey@thechopperdoctor.com"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm flex items-center gap-2"
              style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
            >
              <Icon name="Mail" size={16} />
              mickey@thechopperdoctor.com
            </a>
            <a
              href="mailto:pauly@chopperdoctor.ru"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm flex items-center gap-2"
              style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
            >
              <Icon name="Mail" size={16} />
              pauly@chopperdoctor.ru
            </a>
            <a
              href="tel:+34656828348"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              {t("contact_call")}
            </a>
            <a
              href="tel:+79895175076"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 989 517-50-76
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
            <a href="mailto:mickey@thechopperdoctor.com" className="hover:text-fire transition-colors flex items-center gap-1.5">
              <Icon name="Mail" size={12} />
              mickey@thechopperdoctor.com
            </a>
            <button className="hover:text-fire transition-colors">{t("footer_terms")}</button>
          </div>
        </div>
      </footer>
    </>
  );
}
