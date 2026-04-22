import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

export function useInView(threshold = 0.15) {
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

export function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-12 bg-fire" />
      <span className="font-body text-xs text-fire uppercase tracking-widest">{children}</span>
    </div>
  );
}

export function BlogAlbum({ title, desc, photosLabel, photos, cover }: {
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
