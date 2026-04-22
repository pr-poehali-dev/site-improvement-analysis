import { AnimatedSection, SectionLabel, BlogAlbum } from "@/components/shared";
import { FAMILY_PHOTOS, OPENING_2022_PHOTOS, ROSTOV_DRIFT_PHOTOS, ROSTOV_DRIVE_SHOW_PHOTOS, CUSTOM_CONVENTION_2025_PHOTOS, OUR_WORK_PHOTOS } from "@/data/constants";

interface FamilySectionProps {
  t: (key: string) => string;
}

export default function FamilySection({ t }: FamilySectionProps) {
  return (
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
  );
}
