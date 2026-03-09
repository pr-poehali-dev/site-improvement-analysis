import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/1ac2c649-fc84-4148-b681-1295400d49de.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/ebf1bd39-6f18-4554-86fd-105700fa195a.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/a27d7da8-6b03-48a2-a10b-0b8e71786a2b.jpg";
const PHOTO_1 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/fe6da3f5-69fe-4b77-b401-319c0e2e02d4.jpg";
const PHOTO_2 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/62691b9e-c340-4e3f-8f8a-31efdf7a3559.jpg";
const PHOTO_3 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/4f2acc4e-1dc0-41a4-bf72-2ee08fb895c4.jpg";
const PHOTO_4 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/9c257ff6-fc47-4064-82f1-95c9aeb31499.jpg";
const PHOTO_5 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/7832bfc0-a7ed-40ac-9d47-fc1024f40000.jpg";
const PHOTO_6 = "https://cdn.poehali.dev/files/308fbeb2-6bce-4d94-8f05-56ac1c83e90e.jpg";
const PHOTO_7 = "https://cdn.poehali.dev/files/d0ba2cd0-20f7-493c-b8e3-bbde5f0b215c.jpg";
const PHOTO_8 = "https://cdn.poehali.dev/files/e81e58b2-b28b-4791-bdb6-d29bfb9194d5.jpg";
const PHOTO_9 = "https://cdn.poehali.dev/files/193dfe10-b240-4ba5-8cef-babb5313a655.jpg";
const PHOTO_10 = "https://cdn.poehali.dev/files/bbd8d093-e8d4-4600-bd4b-35f73d33aacd.jpg";
const PHOTO_11 = "https://cdn.poehali.dev/files/be1d996c-3fb3-4451-91a3-d23d681ef3de.jpg";
const PHOTO_12 = "https://cdn.poehali.dev/files/6d8b44ad-834a-47bf-999c-db9faccac504.jpg";
const PHOTO_13 = "https://cdn.poehali.dev/files/bef55930-8d01-476f-8c0b-04abb829049b.jpg";
const PHOTO_14 = "https://cdn.poehali.dev/files/3fae86bd-bc9e-4362-b537-91b93f66d782.jpg";
const PHOTO_15 = "https://cdn.poehali.dev/files/e1d2cf42-a8ee-4dab-a88c-6685fd690e12.jpg";
const PHOTO_16 = "https://cdn.poehali.dev/files/75f281aa-51e6-4944-854f-e5bd557c2fa0.jpg";
const PHOTO_17 = "https://cdn.poehali.dev/files/6d234d12-7c15-4802-b0b5-49cfa73f6fa3.jpg";
const PHOTO_18 = "https://cdn.poehali.dev/files/6c4fba4e-214e-4df7-a29d-c44ebe80ec95.jpg";
const PHOTO_19 = "https://cdn.poehali.dev/files/3ecf41ed-6d89-40ea-835c-6e27570ca1b9.jpg";
const PHOTO_20 = "https://cdn.poehali.dev/files/db1d40c1-5eaf-473c-bf4b-a6f593f3c0a1.jpg";
const PHOTO_21 = "https://cdn.poehali.dev/files/7a8cc7e5-d87e-47be-8770-9f66626bff24.png";
const PHOTO_22 = "https://cdn.poehali.dev/files/e98e2014-b919-436f-bb55-8dba0b73c1e4.jpg";
const PHOTO_23 = "https://cdn.poehali.dev/files/8706315d-d6ad-446d-b5c5-6f48f9385945.jpg";
const PHOTO_24 = "https://cdn.poehali.dev/files/e10c22d0-9e12-4ba3-af7b-77a4b11f308e.jpg";
const PHOTO_25 = "https://cdn.poehali.dev/files/65a081b1-f74a-48bf-87be-18a2da01a939.jpg";
const PHOTO_26 = "https://cdn.poehali.dev/files/dedb8931-8ae6-4f9a-a4fc-fb252c5a201d.jpg";
const PHOTO_27 = "https://cdn.poehali.dev/files/63588115-c711-42ed-8175-5c80b5c31cea.jpg";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "portfolio", label: "Мотоциклы" },
  { id: "garage", label: "Гараж" },
  { id: "parts", label: "Запчасти" },
  { id: "family", label: "Семья" },
];

const CATEGORIES = ["Все работы", "Чопперы", "Бобберы", "Реставрация", "Тюнинг", "Кастом"];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Iron Skull Chopper", category: "Чопперы", year: "2024", img: HERO_IMG, desc: "Полная сборка с нуля. Двигатель S&S 124\", рама на заказ, хардтейл." },
  { id: 2, title: "Midnight Bobber", category: "Бобберы", year: "2024", img: GALLERY_IMG_1, desc: "Реставрация Triumph 1969 года. Полный перебор двигателя, новая электрика." },
  { id: 3, title: "Panhead Revival", category: "Реставрация", year: "2023", img: GALLERY_IMG_2, desc: "Восстановление Harley-Davidson Panhead 1952 года до заводского состояния." },
  { id: 4, title: "Street Tracker Custom", category: "Кастом", year: "2023", img: GALLERY_IMG_1, desc: "Кастом на базе Honda CB750. Трекер с элементами кафе-рейсер." },
  { id: 5, title: "Chrome Beast", category: "Тюнинг", year: "2023", img: HERO_IMG, desc: "Полная хромировка и покраска. Двигатель форсирован до 120 л.с." },
  { id: 6, title: "Desert Racer", category: "Чопперы", year: "2022", img: GALLERY_IMG_2, desc: "Лонгбайк для дальних путешествий. Бак 30л, подвеска Pro-Link." },
  { id: 7, title: "Orange Flame Chopper", category: "Чопперы", year: "2025", img: PHOTO_1, desc: "Кастом с огненным аэрографом. Хромированный V-twin, низкий хардтейл, рельсы как сцена." },
  { id: 8, title: "Blue Thunder", category: "Кастом", year: "2025", img: PHOTO_2, desc: "Синий кастом Chopper Doctors с пламенным аэрографом. Флагманский проект мастерской." },
  { id: 9, title: "Red Baron", category: "Чопперы", year: "2024", img: PHOTO_3, desc: "Массивный красно-чёрный чоппер с открытым двигателем. Мастер на борту — байк на зависть." },
  { id: 10, title: "Three Kings", category: "Кастом", year: "2024", img: PHOTO_4, desc: "Три разных чоппера на трассе. Демонстрация диапазона стилей мастерской." },
  { id: 11, title: "Dark Phantom", category: "Бобберы", year: "2024", img: PHOTO_5, desc: "Классический боббер с полным хромом. Бак с аэрографом, спицованные колёса." },
  { id: 12, title: "Crimson Show Chopper", category: "Чопперы", year: "2025", img: PHOTO_6, desc: "Выставочный чоппер бордово-хромового окраса. Пламенный аэрограф на баке, широкая резина." },
  { id: 13, title: "S&S X-Wedge Pro", category: "Кастом", year: "2025", img: PHOTO_7, desc: "Агрессивный оранжевый кастом на двигателе S&S X-Wedge. Низкая посадка, хром везде." },
  { id: 14, title: "Black Dragon", category: "Чопперы", year: "2024", img: PHOTO_8, desc: "Чёрный чоппер с красным символом на баке. Хромированный V-twin, минималистичный дизайн." },
  { id: 15, title: "Workshop Special", category: "Реставрация", year: "2024", img: PHOTO_9, desc: "Мастерская сборка — синий чоппер у фасада Harley-Davidson. Золотые выхлопы, спицованные колёса." },
  { id: 16, title: "Garage Custom", category: "Кастом", year: "2023", img: PHOTO_10, desc: "Кастом из нашего гаража. Тёмно-красный бак с золотым пинстрайпингом, открытый V-twin." },
  { id: 17, title: "Stealth Bobber", category: "Бобберы", year: "2023", img: PHOTO_11, desc: "Полностью чёрный боббер. Матовые поверхности, минимум хрома — максимум характера." },
  { id: 18, title: "Long Fork Fire", category: "Чопперы", year: "2023", img: PHOTO_12, desc: "Длинновилочный чоппер с огненным аэрографом. Спицованные колёса 300+, рама на заказ." },
  { id: 19, title: "Gold Flame Rider", category: "Кастом", year: "2022", img: PHOTO_13, desc: "Красно-золотой кастом с мастером. Пламенный бак, хромированный V-twin, широкое заднее колесо." },
  { id: 20, title: "Vineyard Cruiser", category: "Чопперы", year: "2022", img: PHOTO_14, desc: "Чёрный хардтейл на фоне виноградников. Красный аэрограф, хромированный двигатель, шоу-класс." },
  { id: 21, title: "Black Tribal Chopper", category: "Чопперы", year: "2025", img: PHOTO_15, desc: "Чёрный шоу-чоппер с трибал-аэрографом на колёсах. Открытый V-twin, хром, студийная съёмка." },
  { id: 22, title: "Steel Blue Bobber", category: "Бобберы", year: "2025", img: PHOTO_16, desc: "Стальной голубой боббер у ретро-гаража. Золотые детали двигателя, классическая вилка." },
  { id: 23, title: "Sky Blue Star", category: "Кастом", year: "2024", img: PHOTO_17, desc: "Голубой кастом со звёздой на двигателе. Спицованные колёса, двухцветная рама, мощная подвеска." },
  { id: 24, title: "Blue Star Pro", category: "Чопперы", year: "2024", img: PHOTO_18, desc: "Синий чоппер со звёздным мотивом и золотыми спицами. Студийный шоу-класс, длинная вилка." },
  { id: 25, title: "Midland Black & Red", category: "Бобберы", year: "2024", img: PHOTO_19, desc: "Чёрно-красный боббер Midland Choppers. Матовые поверхности, красная рама, современный стиль." },
  { id: 26, title: "Candy Red Show Bike", category: "Тюнинг", year: "2023", img: PHOTO_20, desc: "Вишнёво-красный шоу-байк на подиуме. Хромированный V-twin, выставочный уровень отделки." },
  { id: 27, title: "Midland Ghost Flames", category: "Бобберы", year: "2023", img: PHOTO_21, desc: "Чёрный боббер с серыми ghost-flames. Матовая отделка, кованые диски, лаконичный дизайн." },
  { id: 28, title: "Deep Red Custom", category: "Кастом", year: "2023", img: PHOTO_22, desc: "Тёмно-красный кастом с хромированным V-twin. Массивный бак, чистые линии, звёздный акцент." },
  { id: 29, title: "Orange & White Cruiser", category: "Чопперы", year: "2022", img: PHOTO_23, desc: "Оранжево-белый чоппер в чистом студийном стиле. Хром, мощный двигатель, широкие колёса." },
  { id: 30, title: "Silver Eagle", category: "Кастом", year: "2022", img: PHOTO_24, desc: "Серебристый кастом с орлиным аэрографом. Хромированные детали, роскошные колёса, дорожный класс." },
  { id: 31, title: "Gold Bagger", category: "Тюнинг", year: "2022", img: PHOTO_25, desc: "Золотисто-бордовый бэггер с кастомной покраской. Хром, кофры, выставочная работа." },
  { id: 32, title: "Red Muscle Chopper", category: "Чопперы", year: "2021", img: PHOTO_26, desc: "Красный мускульный чоппер на лужайке. Хромированный V-twin без крышек, хардтейл, шоу-формат." },
  { id: 33, title: "Country Road Star", category: "Кастом", year: "2021", img: PHOTO_27, desc: "Чёрный кастом с огненным аэрографом на дороге. Звезда на двигателе, хром, осенний пейзаж." },
];

const PARTS_BRANDS = [
  "S&S", "Baker", "DNA", "Custom Chrome", "Motorcycle Storehouse",
  "Parts Europe", "W&W", "Jims", "Performance Machine", "BDL",
  "Vance and Hines", "Arlen Ness", "Carlini", "Wild1", "Kustom Tech",
  "West Coast Choppers", "Thundercycle Design", "Paul Yaffe Bagger Nation",
  "Red Neck Engineering",
];

const STATS = [
  { value: "30+", label: "лет опыта" },
  { value: "340+", label: "проектов" },
  { value: "100%", label: "сертифицировано H-D" },
  { value: "∞", label: "страсть к делу" },
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-12 bg-fire" />
      <span className="font-body text-xs text-fire uppercase tracking-widest">{children}</span>
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 bg-fire rounded-sm flex items-center justify-center" style={{ boxShadow: "0 0 20px hsl(0 90% 45% / 0.5)" }}>
              <Icon name="Wrench" size={16} className="text-white rotate-45" />
            </div>
            <span className="font-display text-xl tracking-widest uppercase text-foreground">
              Chopper<span className="text-fire">Doctors</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7">
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
              onClick={() => scrollTo("contact")}
              className="font-display text-sm tracking-widest uppercase px-5 py-2 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${PHOTO_2})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        {/* Red glow accent */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 90% 45% / 0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 border border-fire/40 rounded-sm mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" />
              <span className="font-body text-xs text-fire tracking-widest uppercase">Добро пожаловать в мир Chopper Doctors</span>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <span className="block text-foreground">Chopper</span>
              <span className="block text-fire">Doctors</span>
              <span className="block text-foreground/70 text-3xl md:text-4xl mt-1 font-body font-light italic normal-case">World</span>
            </h1>

            <p
              className="font-display text-xl md:text-2xl text-fire/90 tracking-wide mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              «Создан для езды» — это не просто слоган, это образ жизни
            </p>

            <p
              className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              Благодаря более чем 30-летнему опыту, Chopper Doctors производит чопперы, которые сочетают американский стиль с тщательностью швейцарского качества и традициями старой школы.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("portfolio")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
                style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
              >
                Смотреть мотоциклы
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="font-display text-sm tracking-widest uppercase px-8 py-4 border border-foreground/25 text-foreground hover:border-fire hover:text-fire transition-all rounded-sm"
              >
                Связаться с нами
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
                <div className="font-body text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO — Кастомные мотоциклы */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <SectionLabel>Кастомные мотоциклы</SectionLabel>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4">Мотоцикл Галерея</h2>
                <p className="font-body text-muted-foreground max-w-2xl leading-relaxed">
                  Мы производим мотоциклы, которые существуют не только для восхищения, но и конечно для поездок.
                  Бескомпромиссный чоппер, созданный для осуществления вашей мечты.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map(cat => (
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
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPortfolio.map((item) => (
              <AnimatedSection key={item.id}>
                <div
                  className="group relative overflow-hidden rounded-sm cursor-pointer bg-card border border-border hover:border-fire/40 transition-all duration-300"
                  onClick={() => setSelectedWork(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
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

      {/* GARAGE — Harley Сервис */}
      <section id="garage" className="py-24 px-6 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, hsl(0 90% 45% / 0.06) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>Гараж Harley</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Кастомизация, Сервис и Ремонт
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                Ваш байк является вашим отражением, и мы можем помочь вам со всем чем угодно, когда дело доходит до кастомизации. Помогая воплотить мотоцикл вашей мечты, мы предложим вам не только стиль, но и отличные ездовые качества.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Мы <span className="text-fire font-medium">сертифицированы Harley-Davidson</span>, с многочисленными степенями MMI, и мы можем удовлетворить все ваши запросы по обслуживанию и ремонту.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Wrench", text: "Кастомизация" },
                  { icon: "Settings", text: "Сервис и ТО" },
                  { icon: "Zap", text: "Электрика" },
                  { icon: "Shield", text: "Гарантия H-D" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 border border-border rounded-sm bg-background">
                    <Icon name={item.icon} size={16} className="text-fire flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 font-display text-sm tracking-widest uppercase px-8 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
                style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.35)" }}
              >
                Гараж Галерея
              </button>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-sm border border-border col-span-2">
                  <img src={PHOTO_3} alt="Garage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={GALLERY_IMG_2} alt="Garage work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={PHOTO_5} alt="Garage detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PARTS — Запчасти */}
      <section id="parts" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionLabel>Запчасти и комплектующие</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Новые и специально разработанные детали
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Когда речь идет о запасных частях, мы сочетаем новейшие технологии с лучшими характеристиками и высочайшим качеством, для обеспечения вашей беспроблемной и приятной поездки.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Мы работаем только с лучшими в мире дистрибьюторами и производителями запчастей. Если то, что вы ищете, ещё не произведено — <span className="text-fire">мы можем разработать и изготовить всё, что вам нужно.</span>
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {PARTS_BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="px-4 py-2 border border-border rounded-sm font-body text-sm text-muted-foreground hover:border-fire/50 hover:text-foreground transition-all cursor-default"
                >
                  {brand}
                </div>
              ))}
              <div className="px-4 py-2 border border-fire/30 rounded-sm font-body text-sm text-fire bg-fire/5">
                … и более
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
                  <img src={PHOTO_4} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <img src={GALLERY_IMG_1} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm border border-border col-span-2">
                  <img src={PHOTO_1} alt="Family rides" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionLabel>Наша семья</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Фотоальбом & путешествия
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                Взрослея на калифорнийской культуре байкеров, мы знаем, что люди, с которыми мы ездим, так же важны, как и то, на чём мы ездим.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                Мы предпочитаем окружать себя единомышленниками, которым нравится путешествовать на мотоцикле, и которые знают, что такое свобода. Именно поэтому большинство наших клиентов становятся семьей.
              </p>
              <p className="font-body text-fire italic text-lg leading-relaxed">
                «Если вам нужно это объяснять — вы такое вряд ли поймёте.»
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 font-display text-sm tracking-widest uppercase px-8 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm"
              >
                Галерея путешествий
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, hsl(0 90% 45% / 0.06) 0%, transparent 65%)" }} />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <SectionLabel>Контакты</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-4">
            Воплотим вашу<br />
            <span className="text-fire">мечту.</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
            Свяжитесь с нами, когда вам будет удобно, и мы поможем воплотить ваши идеи в жизнь.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className="font-display text-sm tracking-widest uppercase px-10 py-4 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
              style={{ boxShadow: "0 0 30px hsl(0 90% 45% / 0.4)" }}
            >
              Написать нам
            </button>
            <a
              href="tel:+1234567890"
              className="font-display text-sm tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm font-body">
              <Icon name="MapPin" size={14} className="text-fire" />
              29670 Марбелья, Малага, Испания
            </div>
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
            <p>© 2020 Chopper Doctors World — 29670 Марбелья, Малага, Испания</p>
            <button className="hover:text-fire transition-colors">Условия использования сайта</button>
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
              <button
                onClick={() => { setSelectedWork(null); scrollTo("contact"); }}
                className="font-display text-sm tracking-widest uppercase px-6 py-3 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
              >
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