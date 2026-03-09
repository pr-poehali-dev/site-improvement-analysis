import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/1ac2c649-fc84-4148-b681-1295400d49de.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/ebf1bd39-6f18-4554-86fd-105700fa195a.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/a27d7da8-6b03-48a2-a10b-0b8e71786a2b.jpg";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "portfolio", label: "Портфолио" },
  { id: "services", label: "Услуги" },
  { id: "blog", label: "Блог" },
];

const CATEGORIES = ["Все работы", "Чопперы", "Бобберы", "Реставрация", "Тюнинг", "Кастом"];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Iron Skull Chopper", category: "Чопперы", year: "2024", img: HERO_IMG, desc: "Полная сборка с нуля. Двигатель S&S 124\", рама на заказ, хардтейл." },
  { id: 2, title: "Midnight Bobber", category: "Бобберы", year: "2024", img: GALLERY_IMG_1, desc: "Реставрация Triumph 1969 года. Полный перебор двигателя, новая электрика." },
  { id: 3, title: "Panhead Revival", category: "Реставрация", year: "2023", img: GALLERY_IMG_2, desc: "Восстановление Harley-Davidson Panhead 1952 года до заводского состояния." },
  { id: 4, title: "Street Tracker Custom", category: "Кастом", year: "2023", img: GALLERY_IMG_1, desc: "Кастом на базе Honda CB750. Трекер с элементами кафе-рейсер." },
  { id: 5, title: "Chrome Beast", category: "Тюнинг", year: "2023", img: HERO_IMG, desc: "Полная хромировка и покраска. Двигатель форсирован до 120 л.с." },
  { id: 6, title: "Desert Racer", category: "Чопперы", year: "2022", img: GALLERY_IMG_2, desc: "Лонгбайк для дальних путешествий. Бак 30л, подвеска Pro-Link." },
];

const SERVICES = [
  { icon: "Wrench", title: "Кастом с нуля", desc: "Проектируем и собираем уникальный мотоцикл под ваш характер. От эскиза до первого выезда.", price: "от 350 000 ₽" },
  { icon: "RefreshCw", title: "Реставрация", desc: "Возвращаем к жизни классические мотоциклы. Оригинальные или улучшенные детали — ваш выбор.", price: "от 120 000 ₽" },
  { icon: "Settings", title: "Тюнинг и доработка", desc: "Форсировка двигателя, новая подвеска, тормоза. Делаем мотоцикл быстрее и надёжнее.", price: "от 45 000 ₽" },
  { icon: "Palette", title: "Кузовные работы", desc: "Покраска, хромирование, аэрография. Любой дизайн — от классики до авангарда.", price: "от 25 000 ₽" },
  { icon: "Zap", title: "Электрика и диагностика", desc: "Полная замена проводки, установка современной электроники, диагностика любой сложности.", price: "от 15 000 ₽" },
  { icon: "Shield", title: "Техническое обслуживание", desc: "Сезонное ТО, замена расходников, регулировки. Держим ваш байк в идеальном состоянии.", price: "от 8 000 ₽" },
];

const BLOG_POSTS = [
  { id: 1, date: "5 марта 2026", tag: "Кастом", title: "Как выбрать раму для чоппера: полный гайд", excerpt: "Разбираем все типы рам — хардтейл, софтейл, сдвоенная люлька. Что подойдёт именно вам и какие компромиссы придётся сделать.", img: GALLERY_IMG_2 },
  { id: 2, date: "18 февраля 2026", tag: "Реставрация", title: "Panhead vs Knucklehead: в чём разница и что лучше для реставрации", excerpt: "История двух легендарных двигателей Harley-Davidson. Сравниваем характеристики, доступность запчастей и сложность ремонта.", img: GALLERY_IMG_1 },
  { id: 3, date: "2 февраля 2026", tag: "Тюнинг", title: "5 модов, которые реально меняют характер мотоцикла", excerpt: "Не все тюнинги одинаково полезны. Делимся списком доработок с максимальным эффектом на управляемость и мощность.", img: HERO_IMG },
];

const STATS = [
  { value: "12+", label: "лет в деле" },
  { value: "340+", label: "проектов" },
  { value: "8", label: "мастеров в команде" },
  { value: "100%", label: "гарантия качества" },
];

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

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Все работы");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredPortfolio = activeCategory === "Все работы"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 bg-fire rounded-sm flex items-center justify-center glow-fire">
              <Icon name="Wrench" size={16} className="text-background rotate-45" />
            </div>
            <span className="font-display text-xl tracking-widest uppercase text-foreground">
              Chopper<span className="text-fire">Doctors</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-display text-sm tracking-widest uppercase transition-colors ${
                  activeSection === link.id ? "text-fire" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("services")}
              className="font-display text-sm tracking-widest uppercase px-5 py-2 bg-fire text-background hover:bg-fire/80 transition-all rounded-sm"
            >
              Связаться
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-display text-sm tracking-widest uppercase text-left text-muted-foreground hover:text-fire transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 border border-fire/40 rounded-sm mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" />
              <span className="font-body text-xs text-fire tracking-widest uppercase">Мастерская кастомных мотоциклов</span>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <span className="block text-foreground">Chopper</span>
              <span className="block text-fire">Doctors</span>
              <span className="block text-foreground text-3xl md:text-4xl mt-2 font-body font-light italic">World</span>
            </h1>

            <p
              className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Строим уникальные мотоциклы, которые живут вечно. Каждый байк — это история. Ваша история.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("portfolio")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-background hover:bg-fire/80 transition-all rounded-sm glow-fire"
              >
                Смотреть работы
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 border border-foreground/30 text-foreground hover:border-fire hover:text-fire transition-all rounded-sm"
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <AnimatedSection key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-fire mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-12 bg-fire" />
                  <span className="font-body text-xs text-fire uppercase tracking-widest">Наши работы</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Портфолио</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-body text-xs uppercase tracking-widest px-4 py-2 rounded-sm border transition-all ${
                      activeCategory === cat
                        ? "bg-fire text-background border-fire"
                        : "border-border text-muted-foreground hover:border-fire/50 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPortfolio.map((item, i) => (
              <AnimatedSection key={item.id}>
                <div
                  className="group relative overflow-hidden rounded-sm cursor-pointer bg-card border border-border hover:border-fire/40 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                  onClick={() => setSelectedWork(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-xs text-fire uppercase tracking-widest px-2 py-0.5 border border-fire/40 rounded-sm">
                        {item.category}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">{item.year}</span>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fire/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fire/3 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-fire" />
              <span className="font-body text-xs text-fire uppercase tracking-widest">Что мы делаем</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Услуги</h2>
            <p className="font-body text-muted-foreground max-w-lg mb-14">
              Полный цикл работ — от идеи до готового мотоцикла. Берёмся за проекты любой сложности.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={i}>
                <div className="group p-6 border border-border hover:border-fire/40 rounded-sm bg-background hover:bg-card transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fire/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-sm border border-border group-hover:border-fire/40 flex items-center justify-center mb-5 transition-colors">
                      <Icon name={service.icon} size={22} className="text-fire" />
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-wide mb-3">{service.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-fire text-lg">{service.price}</span>
                      <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-fire group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 border border-fire/30 rounded-sm bg-fire/5">
              <p className="font-body text-muted-foreground">Не нашли нужную услугу? Расскажите о вашем проекте</p>
              <button className="font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-background hover:bg-fire/80 transition-all rounded-sm glow-fire">
                Обсудить проект
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-12 bg-fire" />
                  <span className="font-body text-xs text-fire uppercase tracking-widest">Наш дневник</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Блог</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-fire transition-colors">
                Все статьи <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <AnimatedSection key={post.id}>
                <article className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-sm mb-4 border border-border">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs text-fire uppercase tracking-widest px-2 py-0.5 border border-fire/30 rounded-sm">
                      {post.tag}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide mb-2 group-hover:text-fire transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-muted-foreground group-hover:text-fire transition-colors">
                    <span className="font-body text-xs uppercase tracking-widest">Читать далее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="border-t border-border bg-card py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fire/5 via-transparent to-fire/5 pointer-events-none" />
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-4">
            Есть проект?<br />
            <span className="text-fire">Поговорим.</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto">
            Расскажите о своей мечте — мы воплотим её в металле и хроме.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="font-display text-sm tracking-widest uppercase px-10 py-4 bg-fire text-background hover:bg-fire/80 transition-all rounded-sm glow-fire">
              Написать нам
            </button>
            <a
              href="tel:+70000000000"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-fire rounded-sm flex items-center justify-center">
              <Icon name="Wrench" size={12} className="text-background rotate-45" />
            </div>
            <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
              Chopper<span className="text-fire">Doctors</span> World
            </span>
          </div>
          <p className="font-body text-xs text-muted-foreground">© 2026 Все права защищены</p>
          <div className="flex items-center gap-4">
            {["Instagram", "Youtube", "MessageCircle"].map(icon => (
              <button key={icon} className="w-8 h-8 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:border-fire hover:text-fire transition-all">
                <Icon name={icon} size={14} />
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="max-w-2xl w-full bg-card border border-border rounded-sm overflow-hidden"
            style={{ animation: "scale-in 0.3s ease-out" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <img src={selectedWork.img} alt={selectedWork.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-foreground hover:text-fire transition-colors"
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
              <button className="font-display text-sm tracking-widest uppercase px-6 py-3 bg-fire text-background hover:bg-fire/80 transition-all rounded-sm">
                Заказать похожий проект
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;