export type Lang = "en" | "de" | "ru" | "es" | "nl";

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
];

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    nav_bikes: "Motorcycles", nav_garage: "Garage", nav_parts: "Parts", nav_family: "Family",
    nav_contact: "Contact",
    hero_badge: "Welcome to Chopper Doctors World",
    hero_slogan: "Where \"Built to Ride\" is not just a slogan, it's a way of life.",
    hero_desc: "With a passion that comes from over 30 years of bike building and riding experience, Chopper Doctors build bikes that combine American style, with meticulousness of Swiss quality, and the old school attitude. Everything we do is dedicated to the pursuit of excellence, in quality, technology, style and design. The ultimate chopper created to fulfill your dreams.",
    hero_btn_portfolio: "Bike Gallery", hero_btn_contact: "Contact Us",
    stats_years: "years of experience", stats_projects: "projects", stats_certified: "H-D Certified", stats_passion: "passion",
    portfolio_label: "Custom Motorcycles", portfolio_title: "Bike Gallery",
    portfolio_desc: "We build bikes that are made to be ridden, not just admired. Contact us when you are ready and we can help you bring your ideas into reality.",
    cat_all: "All Works", cat_choppers: "Choppers", cat_bobbers: "Bobbers", cat_restoration: "Restoration", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Harley Garage", garage_title: "Customizing, Service and Repairs",
    garage_p1: "Your bike is a reflection of you, and we can help you with anything you need when it comes to customizing. While helping you accomplish your dream bike, we will advise you on not only style, but rideability.",
    garage_p2: "Certified by Harley-Davidson, with multiple degrees from MMI, we can perform all your service and repair needs.",
    garage_custom: "Customizing", garage_service: "Service & Maintenance", garage_electric: "Electrics", garage_warranty: "H-D Warranty",
    garage_btn: "Garage Gallery",
    parts_label: "Parts & Components", parts_title: "New & Custom Designed Parts",
    parts_p1: "When it comes to parts we combine the latest technology with best performance and top quality, to insure you have a trouble free and enjoyable ride.",
    parts_p2: "This is accomplished by only associating ourselves with the best parts distributors and producers in the world. If what you are looking for is not already made —",
    parts_p2_accent: "we can design and produce anything you would need.",
    parts_more: "… and more",
    family_label: "Roadtrips & Family", family_title: "Photo Album & Family",
    family_p1: "Growing up in the California biker culture, who we ride with is as important as what we ride.",
    family_p2: "We choose to surround ourselves with like minded people, that enjoy riding and the idea of what freedom is. This is why most of our customers become family.",
    family_quote: "\"If we have to explain, you won't understand.\"",
    family_btn: "Gallery",
    contact_label: "Contact", contact_title: "Let's bring your", contact_title2: "ideas into reality.",
    contact_desc: "Contact us when you are ready and we can help you bring your ideas into reality.",
    contact_write: "Write to Us", contact_call: "+34 656 82 83 48",
    contact_address: "Calle Polonia, 35, San Pedro de Alcántara, 29670 Marbella, Málaga, Spain",
    contact_hours_title: "Business Hours",
    contact_hours_1: "Tue, Wed & Thu: 10am – 7pm",
    contact_hours_2: "Fri & Sat: 10am – 12pm and 2pm – 6pm",
    contact_hours_3: "Closed Sunday & Monday",
    contact_payment: "We accept cash, credit card and bank transfer.",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, Spain",
    footer_terms: "Terms of Use",
    modal_order: "Order Similar Project",
  },
  de: {
    nav_bikes: "Motorräder", nav_garage: "Werkstatt", nav_parts: "Teile", nav_family: "Familie",
    nav_contact: "Kontakt",
    hero_badge: "Willkommen bei Chopper Doctors World",
    hero_slogan: "Wo \"Built to Ride\" nicht nur ein Slogan ist, sondern ein Lebensstil.",
    hero_desc: "Mit einer Leidenschaft, geprägt aus über 30 Jahren Motorradbau und eigener Fahrerfahrung, erschafft Chopper Doctors Motorräder aus einer Kombination aus American Style, der Sorgfalt Schweizer Qualität und einer guten Portion Old School Persönlichkeit. Alles was wir produzieren ist dem Ziel gewidmet, in allen Teilbereichen Perfektion zu erreichen — in Qualität, Technologie, Style und Design. Die ultimative Chopper, gebaut um deine Träume zu verwirklichen.",
    hero_btn_portfolio: "Bike Galerie", hero_btn_contact: "Kontaktiere uns",
    stats_years: "Jahre Erfahrung", stats_projects: "Projekte", stats_certified: "H-D Zertifiziert", stats_passion: "Leidenschaft",
    portfolio_label: "Custom Choppers", portfolio_title: "Bike Galerie",
    portfolio_desc: "Wir bauen Motorräder, die zum Fahren gemacht sind, nicht nur zur Bewunderung. Kontaktiere uns, wenn du bereit bist deine Ideen Realität werden zu lassen, wir helfen dir gerne dabei.",
    cat_all: "Alle Arbeiten", cat_choppers: "Chopper", cat_bobbers: "Bobber", cat_restoration: "Restaurierung", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Werkstatt", garage_title: "Customizing, Service & Reparaturen",
    garage_p1: "Dein Bike spiegelt deine Persönlichkeit wieder, darum sind wir gerne bereit dich durch unser Fachwissen bei jeder Art von Customizing zu unterstützen. Während wir gemeinsam dein Traummotorrad erschaffen, liegt unser Augenmerk neben dem vollendeten Style, auch auf einem komfortablen Fahrgefühl.",
    garage_p2: "Zertifiziert durch Harley-Davidson und mehreren Auszeichnungen durch MMI, ist es uns ausserdem möglich all deine Wünsche im Service- und Reparaturbereich zu erfüllen.",
    garage_custom: "Customizing", garage_service: "Service & Reparaturen", garage_electric: "Elektrik", garage_warranty: "H-D Garantie",
    garage_btn: "Werkstatt Galerie",
    parts_label: "Teile, Zubehör & Sonderanfertigungen", parts_title: "Teile, Zubehör & Sonderanfertigungen",
    parts_p1: "Wenn es darum geht Motorradteile herzustellen, kombinieren wir neueste Technologien, geprägt durch beste Resultate und absoluter Spitzenqualität, nur so garantieren wir dir eine stressfreie und sorglose Fahrt. Unser hohes Mass an Qualität und Zuverlässigkeit gelingt uns durch die enge Zusammenarbeit mit den weltweit führenden Teileherstellern und Händlern.",
    parts_p2: "Falls du auf der Suche bist nach etwas, dass es so noch nie gab —",
    parts_p2_accent: "können wir es für dich designen und herstellen.",
    parts_more: "… und weitere",
    family_label: "Roadtrips & Familienalbum", family_title: "Roadtrips & Familienalbum",
    family_p1: "Aufgewachsen in der amerikanischen Bikerkultur Californiens, wo es ebenso wichtig ist mit wem gefahren wird, als auch mit was, haben wir uns dazu entschieden uns mit gleichgesinnten Menschen zu umgeben.",
    family_p2: "Menschen, die ihre Bikes lieben und das damit verbundene Fahrgefühl und die noch wissen, wie sich Freiheit anfühlt. Das ist auch der Grund warum die meisten unserer Kunden mittlerweile zur Familie geworden sind.",
    family_quote: "\"Müssten wir dir dies erklären, würdest du es vermutlich nicht verstehen.\"",
    family_btn: "Galerie",
    contact_label: "Kontakt", contact_title: "Lass uns deine Ideen", contact_title2: "Realität werden lassen.",
    contact_desc: "Kontaktiere uns, wenn du bereit bist deine Ideen Realität werden zu lassen, wir helfen dir gerne dabei.",
    contact_write: "Schreib uns", contact_call: "+34 656 82 83 48",
    contact_address: "Calle Polonia, 35, San Pedro de Alcántara, 29670 Marbella, Málaga, Spanien",
    contact_hours_title: "Öffnungszeiten",
    contact_hours_1: "Di, Mi & Do: 10:00 – 19:00 Uhr",
    contact_hours_2: "Fr & Sa: 10:00 – 12:00 und 14:00 – 18:00 Uhr",
    contact_hours_3: "Sonntag & Montag geschlossen",
    contact_payment: "Wir akzeptieren Bargeld, Kreditkarten und Banküberweisungen.",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, Spanien",
    footer_terms: "Nutzungsbedingungen",
    modal_order: "Ähnliches Projekt bestellen",
  },
  ru: {
    nav_bikes: "Мотоциклы", nav_garage: "Гараж", nav_parts: "Запчасти", nav_family: "Семья",
    nav_contact: "Связаться",
    hero_badge: "Добро пожаловать в мир Chopper Doctors",
    hero_slogan: "«Создан для езды» — это не просто слоган, это образ жизни",
    hero_desc: "Благодаря более чем 30-летнему опыту, Chopper Doctors производит чопперы, которые сочетают американский стиль с тщательностью швейцарского качества и традициями старой школы.",
    hero_btn_portfolio: "Смотреть мотоциклы", hero_btn_contact: "Связаться с нами",
    stats_years: "лет опыта", stats_projects: "проектов", stats_certified: "сертифицировано H-D", stats_passion: "страсть к делу",
    portfolio_label: "Кастомные мотоциклы", portfolio_title: "Мотоцикл Галерея",
    portfolio_desc: "Мы производим мотоциклы, которые существуют не только для восхищения, но и конечно для поездок. Бескомпромиссный чоппер, созданный для осуществления вашей мечты.",
    cat_all: "Все работы", cat_choppers: "Чопперы", cat_bobbers: "Бобберы", cat_restoration: "Реставрация", cat_tuning: "Тюнинг", cat_custom: "Кастом",
    garage_label: "Гараж Harley", garage_title: "Кастомизация, Сервис и Ремонт",
    garage_p1: "Ваш байк является вашим отражением, и мы можем помочь вам со всем чем угодно, когда дело доходит до кастомизации. Помогая воплотить мотоцикл вашей мечты, мы предложим вам не только стиль, но и отличные ездовые качества.",
    garage_p2: "Мы сертифицированы Harley-Davidson, с многочисленными степенями MMI, и мы можем удовлетворить все ваши запросы по обслуживанию и ремонту.",
    garage_custom: "Кастомизация", garage_service: "Сервис и ТО", garage_electric: "Электрика", garage_warranty: "Гарантия H-D",
    garage_btn: "Гараж Галерея",
    parts_label: "Запчасти и комплектующие", parts_title: "Новые и специально разработанные детали",
    parts_p1: "Когда речь идет о запасных частях, мы сочетаем новейшие технологии с лучшими характеристиками и высочайшим качеством, для обеспечения вашей беспроблемной и приятной поездки.",
    parts_p2: "Мы работаем только с лучшими в мире дистрибьюторами и производителями запчастей. Если то, что вы ищете, ещё не произведено —",
    parts_p2_accent: "мы можем разработать и изготовить всё, что вам нужно.",
    parts_more: "… и более",
    family_label: "Наша семья", family_title: "Фотоальбом & путешествия",
    family_p1: "Взрослея на калифорнийской культуре байкеров, мы знаем, что люди, с которыми мы ездим, так же важны, как и то, на чём мы ездим.",
    family_p2: "Мы предпочитаем окружать себя единомышленниками, которым нравится путешествовать на мотоцикле, и которые знают, что такое свобода. Именно поэтому большинство наших клиентов становятся семьей.",
    family_quote: "«Если вам нужно это объяснять — вы такое вряд ли поймёте.»",
    family_btn: "Галерея путешествий",
    contact_label: "Контакты", contact_title: "Воплотим вашу", contact_title2: "мечту.",
    contact_desc: "Свяжитесь с нами, когда вам будет удобно, и мы поможем воплотить ваши идеи в жизнь.",
    contact_write: "Написать нам", contact_call: "+34 656 82 83 48",
    contact_address: "Calle Polonia, 35, San Pedro de Alcántara, 29670 Марбелья, Малага, Испания",
    contact_hours_title: "Часы работы",
    contact_hours_1: "Вт, ср и чт: 10:00 – 19:00",
    contact_hours_2: "Пт и сб: 10:00 – 12:00 и 14:00 – 18:00",
    contact_hours_3: "Воскресенье и понедельник — выходной",
    contact_payment: "Принимаем наличные, кредитную карту и банковский перевод.",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Марбелья, Малага, Испания",
    footer_terms: "Условия использования",
    modal_order: "Заказать похожий проект",
  },
  es: {
    nav_bikes: "Motos", nav_garage: "Garaje", nav_parts: "Piezas", nav_family: "Familia",
    nav_contact: "Contacto",
    hero_badge: "Bienvenidos a Chopper Doctors World",
    hero_slogan: "Donde \"Creado para rodar\" no es sólo un eslogan, sino un modo de vida.",
    hero_desc: "Con una pasión que viene de más de 30 años de experiencia en la construcción y montaje de motos, Chopper Doctors construye motocicletas en las que se combina el estilo Americano, la calidad Suiza, y la actitud old school. Todo lo que hacemos está dirigido a la búsqueda de la excelencia, en calidad, tecnología, estilo y diseño. La chopper definitiva creada para cumplir tus sueños.",
    hero_btn_portfolio: "Galería de Motos", hero_btn_contact: "Contáctanos",
    stats_years: "años de experiencia", stats_projects: "proyectos", stats_certified: "Certificado H-D", stats_passion: "pasión",
    portfolio_label: "Custom Choppers", portfolio_title: "Galería de Motos",
    portfolio_desc: "Construimos motos que están hechas para rodar, no solo para ser admiradas. Contáctanos cuando estés listo y te ayudaremos a llevar tus ideas a la realidad.",
    cat_all: "Todos", cat_choppers: "Choppers", cat_bobbers: "Bobbers", cat_restoration: "Restauración", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Garaje Harley", garage_title: "Personalización, Servicio y Reparación",
    garage_p1: "Tu moto es tu propio reflejo, y te podemos ayudar a personalizarla. A la vez que te ayudamos a conseguir la motocicleta de tus sueños, te aconsejaremos no solo en estilo, sino también en la manejabilidad.",
    garage_p2: "Certificado por Harley-Davidson, con múltiples grados de MMI, podemos cubrir todas tus necesidades de servicio y reparación.",
    garage_custom: "Personalización", garage_service: "Servicio y Mantenimiento", garage_electric: "Electricidad", garage_warranty: "Garantía H-D",
    garage_btn: "Garaje Galería",
    parts_label: "Piezas y Componentes", parts_title: "Diseño de Piezas Nuevas y Personalizadas",
    parts_p1: "Cuando se trata de piezas, combinamos la última tecnología con el mejor rendimiento y calidad, para asegurar que tengas un paseo agradable y sin ningún problema.",
    parts_p2: "Esto se consigue asociándonos con los mejores distribuidores y fabricantes de piezas del mundo. Si lo que estás buscando aún no existe —",
    parts_p2_accent: "podemos diseñar y fabricar lo que necesites.",
    parts_more: "… y otros",
    family_label: "Viajes de Carretera & Familia", family_title: "Álbum de Fotos Familiar",
    family_p1: "Creciendo en la cultura biker de California, con quién rodemos es tan importante como lo que rodamos.",
    family_p2: "Elegimos rodearnos de gente que piensa como nosotros, que disfrutan yendo en moto y de la idea de libertad. Por eso la mayoría de nuestros clientes se convierten en familia.",
    family_quote: "\"Si tenemos que explicarlo, no lo entenderías.\"",
    family_btn: "Galería",
    contact_label: "Contacto", contact_title: "Llevemos tus ideas", contact_title2: "a la realidad.",
    contact_desc: "Contáctanos cuando estés listo y te ayudaremos a llevar tus ideas a la realidad.",
    contact_write: "Escríbenos", contact_call: "+34 656 82 83 48",
    contact_address: "Calle Polonia, 35, San Pedro de Alcántara, 29670 Marbella, Málaga, España",
    contact_hours_title: "Horas de Trabajo",
    contact_hours_1: "Mar, mié y jue: 10:00 – 19:00",
    contact_hours_2: "Vie y sáb: 10:00 – 12:00 y 14:00 – 18:00",
    contact_hours_3: "Cerrado domingo y lunes",
    contact_payment: "Aceptamos efectivo, tarjeta de crédito y transferencia bancaria.",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, España",
    footer_terms: "Términos de uso",
    modal_order: "Pedir proyecto similar",
  },
  nl: {
    nav_bikes: "Motoren", nav_garage: "Workshop", nav_parts: "Onderdelen", nav_family: "Familie",
    nav_contact: "Contact",
    hero_badge: "Welkom bij Chopper Doctors World",
    hero_slogan: "Hier is \"Built to Ride\" geen slogan, maar een overtuiging.",
    hero_desc: "Onze passie komt vooruit uit meer dan 30 jaar ervaring met het bouwen en rijden van motoren. Chopper Doctors bouwt motoren die Amerikaanse stijl combineren met nauwkeurige Zwitserse kwaliteit en een \"old school\" gevoel. In alles wat wij doen, streven wij naar de beste kwaliteit, technologie, stijl en design. Het creëren van de ultieme chopper, die al jouw wensen vervult.",
    hero_btn_portfolio: "Bike Galerij", hero_btn_contact: "Neem contact op",
    stats_years: "jaar ervaring", stats_projects: "projecten", stats_certified: "H-D Gecertificeerd", stats_passion: "passie",
    portfolio_label: "Custom Motoren", portfolio_title: "Bike Galerij",
    portfolio_desc: "De motoren die wij bouwen zijn gemaakt om te rijden en niet alleen om te bewonderen. Neem vrijblijvend contact met ons op en wij zullen je helpen om jouw ideeën en wensen realiteit te laten worden.",
    cat_all: "Alle werken", cat_choppers: "Choppers", cat_bobbers: "Bobbers", cat_restoration: "Restauratie", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Harley Workshop", garage_title: "Customizing, Service & Reparaties",
    garage_p1: "Jouw motor is een verlengstuk van jezelf en wij kunnen je helpen om hem te customizen. Het realiseren van de motorfiets van jouw dromen gaat bij ons niet alleen gepaard met advies over stijl en looks, maar ook met de zorg voor kwaliteit en functionaliteit om de berijdbaarheid te waarborgen.",
    garage_p2: "Certified by Harley-Davidson, with multiple degrees from MMI, we can perform all your service and repair needs.",
    garage_custom: "Customizing", garage_service: "Service & Onderhoud", garage_electric: "Elektrisch", garage_warranty: "H-D Garantie",
    garage_btn: "Workshop Galerij",
    parts_label: "Onderdelen & Componenten", parts_title: "Nieuwe & Custom Ontworpen Onderdelen",
    parts_p1: "Op het gebied van onderdelen combineren wij de meest recente technologie met de beste performance en kwaliteit, zodat jij zonder problemen kan genieten van jouw motor.",
    parts_p2: "Wij werken dus alleen samen met de beste merken en fabrikanten. Mocht je op zoek zijn naar een onderdeel dat nog niet bestaat —",
    parts_p2_accent: "dan ontwerpen en produceren wij alles wat jij nodig hebt.",
    parts_more: "… en meer",
    family_label: "Toertochten & Familie", family_title: "Familie Fotoalbum",
    family_p1: "Wij komen voort uit de biker cultuur van California, USA. Voor ons zijn de personen met wie je rijdt minstens even belangrijk als waarop je rijdt.",
    family_p2: "Wij begeven ons graag onder mensen met dezelfde overtuiging, die genieten van een goede rit en van vrijheid. Daarom zijn onze klanten geen klanten, maar familie.",
    family_quote: "\"En familie hoef je niets uit te leggen.\"",
    family_btn: "Galerij",
    contact_label: "Contact", contact_title: "Laten we jouw", contact_title2: "ideeën realiteit maken.",
    contact_desc: "Neem vrijblijvend contact met ons op en wij zullen je helpen om jouw ideeën en wensen realiteit te laten worden.",
    contact_write: "Schrijf ons", contact_call: "+34 656 82 83 48",
    contact_address: "Calle Polonia, 35, San Pedro de Alcántara, 29670 Marbella, Málaga, Spanje",
    contact_hours_title: "Kantooruren",
    contact_hours_1: "Di, wo & do: 10:00 – 19:00",
    contact_hours_2: "Vr & za: 10:00 – 12:00 en 14:00 – 18:00",
    contact_hours_3: "Zondag & maandag gesloten",
    contact_payment: "Wij accepteren contant geld, creditcard en bankoverschrijving.",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, Spanje",
    footer_terms: "Gebruiksvoorwaarden",
    modal_order: "Vergelijkbaar project bestellen",
  },
};

const HERO_IMG = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/1ac2c649-fc84-4148-b681-1295400d49de.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/ebf1bd39-6f18-4554-86fd-105700fa195a.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/files/a27d7da8-6b03-48a2-a10b-0b8e71786a2b.jpg";
const PHOTO_1 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/fe6da3f5-69fe-4b77-b401-319c0e2e02d4.jpg";
export const PHOTO_2 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/62691b9e-c340-4e3f-8f8a-31efdf7a3559.jpg";
export const PHOTO_3 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/4f2acc4e-1dc0-41a4-bf72-2ee08fb895c4.jpg";
const PHOTO_4 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/9c257ff6-fc47-4064-82f1-95c9aeb31499.jpg";
export const PHOTO_5 = "https://cdn.poehali.dev/projects/7385d977-dc23-483a-a854-a24ce1679a8d/bucket/7832bfc0-a7ed-40ac-9d47-fc1024f40000.jpg";
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
const PHOTO_25 = "https://cdn.poehali.dev/files/65a081b1-f74a-48bf-987be-18a2da01a939.jpg";
const PHOTO_26 = "https://cdn.poehali.dev/files/dedb8931-8ae6-4f9a-a4fc-fb252c5a201d.jpg";
const PHOTO_27 = "https://cdn.poehali.dev/files/63588115-c711-42ed-8175-5c80b5c31cea.jpg";
const PHOTO_28 = "https://cdn.poehali.dev/files/01ed108d-010c-4ceb-98c7-763faed979cf.jpg";
const PHOTO_29 = "https://cdn.poehali.dev/files/1b2f7c39-1183-481d-acec-9eccc7f238ce.jpg";
const PHOTO_30 = "https://cdn.poehali.dev/files/12de10aa-0eaf-4f35-aa88-2ba678443cce.jpg";
const PHOTO_31 = "https://cdn.poehali.dev/files/380bf8c5-0732-4d98-baa8-2eef8811be79.jpg";
const PHOTO_32 = "https://cdn.poehali.dev/files/de849e6d-9574-49a9-9206-1f12cb0c9fb8.jpg";
const PHOTO_33 = "https://cdn.poehali.dev/files/68fdedb7-e8fd-4f2b-b474-def004fadd55.jpg";
const PHOTO_34 = "https://cdn.poehali.dev/files/1c1cbb43-50ee-4b6f-a2d3-df77bbd091c0.jpg";
const PHOTO_35 = "https://cdn.poehali.dev/files/b190267e-9352-4d97-9e97-0f56d4a0eb91.jpg";
const PHOTO_36 = "https://cdn.poehali.dev/files/a6ec5fcc-001d-4493-9566-bbe1ad9e0064.jpg";
const PHOTO_37 = "https://cdn.poehali.dev/files/afa4a7e0-0744-47ca-9fd1-1a72d2861144.jpg";
const PHOTO_38 = "https://cdn.poehali.dev/files/b72504ab-31ef-46ea-b8ab-bdf45b5b9644.jpg";
const PHOTO_39 = "https://cdn.poehali.dev/files/79dbfd2a-875e-4766-865d-e6cf6cced7d8.jpg";

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  year: string;
  img: string;
  desc: string;
  video?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
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
  { id: 34, title: "CDW Signature Red", category: "Чопперы", year: "2025", img: PHOTO_28, desc: "Фирменный чоппер Chopper Doctors World. Красно-чёрный окрас, паук на двигателе, студийная съёмка." },
  { id: 35, title: "Crimson Iron Cross", category: "Чопперы", year: "2024", img: PHOTO_29, desc: "Красный кастом с железным крестом. Серебряный аэрограф, хром, деревянный амбар на фоне." },
  { id: 36, title: "Desert Green Flame", category: "Бобберы", year: "2024", img: PHOTO_30, desc: "Чёрный боббер с зелёным огнём на баке. Спицованные колёса, открытый V-twin, пустынная дорога." },
  { id: 37, title: "Full Flame Orange", category: "Чопперы", year: "2023", img: PHOTO_31, desc: "Полностью огненный оранжевый чоппер. Аэрограф на всех панелях, хром, пустынная трасса." },
  { id: 38, title: "Blue Skull Trike", category: "Тюнинг", year: "2023", img: PHOTO_32, desc: "Кастомный трайк с черепами и бирюзовым аэрографом. Хром везде, три колеса, мощный V-twin." },
  { id: 39, title: "Bordeaux Estate", category: "Чопперы", year: "2022", img: PHOTO_33, desc: "Бордовый чоппер с гравировкой на баке у особняка. Хром, широкие колёса, европейский стиль." },
  { id: 40, title: "Aventador V-Rod", category: "Тюнинг", year: "2025", img: PHOTO_34, desc: "Жёлто-чёрный кастом V-Rod Aventador. Карбоновые панели, широкая задняя резина, экстремальный тюнинг." },
  { id: 41, title: "Green Flame Bobber", category: "Бобберы", year: "2024", img: PHOTO_35, desc: "Ярко-зелёный боббер с пламенным аэрографом. Хромированный V-twin, спицованные колёса, уличный стиль." },
  { id: 42, title: "Black Street Chopper", category: "Чопперы", year: "2024", img: PHOTO_36, desc: "Полностью чёрный стрит-чоппер. Минималистичный дизайн, хромированные выхлопы, городской байк." },
  { id: 43, title: "Orange Purple Tribal", category: "Кастом", year: "2023", img: PHOTO_37, desc: "Оранжевый кастом с фиолетовым трибал-аэрографом. Хром, широкие колёса, вечерняя атмосфера." },
  { id: 44, title: "Loco Swiss Chopper", category: "Чопперы", year: "2023", img: PHOTO_38, desc: "Чёрный чоппер Loco на альпийском лугу. Спицованные колёса, серебристый бак, швейцарский пейзаж." },
  { id: 45, title: "Blue Woodpile", category: "Бобберы", year: "2022", img: PHOTO_39, desc: "Голубой боббер у поленницы дров. Хромированный двигатель, классические крылья, природный фон." },
];

export const PARTS_BRANDS = [
  "S&S", "Baker", "DNA", "Custom Chrome", "Motorcycle Storehouse",
  "Parts Europe", "W&W", "Jims", "Performance Machine", "BDL",
  "Vance and Hines", "Arlen Ness", "Carlini", "Wild1", "Kustom Tech",
  "West Coast Choppers", "Thundercycle Design", "Paul Yaffe Bagger Nation",
  "Red Neck Engineering",
];

export const STATS = [
  { value: "30+", key: "stats_years" },
  { value: "340+", key: "stats_projects" },
  { value: "100%", key: "stats_certified" },
  { value: "∞", key: "stats_passion" },
];

export const GARAGE_PHOTOS = {
  main: PHOTO_3,
  left: GALLERY_IMG_2,
  right: PHOTO_5,
};

export const FAMILY_PHOTOS = {
  top_left: PHOTO_4,
  top_right: GALLERY_IMG_1,
  bottom: PHOTO_1,
};