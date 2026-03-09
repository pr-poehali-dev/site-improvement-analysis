import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type Lang = "en" | "de" | "ru" | "es" | "nl";

const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
];

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
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
    nav_bikes: "Motorräder", nav_garage: "Garage", nav_parts: "Teile", nav_family: "Familie",
    nav_contact: "Kontakt",
    hero_badge: "Willkommen in der Welt der Chopper Doctors",
    hero_slogan: '"Zum Fahren gebaut" — das ist nicht nur ein Slogan, das ist ein Lebensstil',
    hero_desc: "Mit über 30 Jahren Erfahrung baut Chopper Doctors Chopper, die amerikanischen Stil mit Schweizer Qualität und Old-School-Tradition verbinden.",
    hero_btn_portfolio: "Motorräder ansehen", hero_btn_contact: "Kontakt aufnehmen",
    stats_years: "Jahre Erfahrung", stats_projects: "Projekte", stats_certified: "H-D Zertifiziert", stats_passion: "Leidenschaft",
    portfolio_label: "Custom-Motorräder", portfolio_title: "Motorrad Galerie",
    portfolio_desc: "Wir bauen Motorräder, die nicht nur zur Bewunderung, sondern natürlich auch zum Fahren existieren. Ein kompromissloser Chopper, gebaut um Ihren Traum zu erfüllen.",
    cat_all: "Alle Arbeiten", cat_choppers: "Chopper", cat_bobbers: "Bobber", cat_restoration: "Restaurierung", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Harley Garage", garage_title: "Customizing, Service & Reparatur",
    garage_p1: "Ihr Bike ist Ihr Spiegelbild, und wir können Ihnen bei allem helfen, wenn es ums Customizing geht. Wir helfen Ihnen, Ihr Traummotorrad zu verwirklichen — nicht nur mit Stil, sondern auch mit hervorragenden Fahreigenschaften.",
    garage_p2: "Wir sind Harley-Davidson zertifiziert, mit zahlreichen MMI-Abschlüssen, und können alle Ihre Service- und Reparaturanfragen erfüllen.",
    garage_custom: "Customizing", garage_service: "Service & Wartung", garage_electric: "Elektrik", garage_warranty: "H-D Garantie",
    garage_btn: "Garage Galerie",
    parts_label: "Teile & Komponenten", parts_title: "Neue & speziell entwickelte Teile",
    parts_p1: "Bei Ersatzteilen kombinieren wir neueste Technologie mit bester Leistung und höchster Qualität für eine problemlose und angenehme Fahrt.",
    parts_p2: "Wir arbeiten nur mit den weltbesten Distributoren und Herstellern. Wenn das, was Sie suchen, noch nicht hergestellt wurde —",
    parts_p2_accent: "können wir alles entwickeln und herstellen, was Sie brauchen.",
    parts_more: "… und mehr",
    family_label: "Unsere Familie", family_title: "Fotoalbum & Reisen",
    family_p1: "Aufgewachsen in der kalifornischen Biker-Kultur wissen wir, dass die Menschen, mit denen wir fahren, genauso wichtig sind wie das, worauf wir fahren.",
    family_p2: "Wir umgeben uns gerne mit Gleichgesinnten, die gerne mit dem Motorrad reisen und wissen, was Freiheit bedeutet. Deshalb werden die meisten unserer Kunden zur Familie.",
    family_quote: '"Wenn Sie das erklaert bekommen muessen - werden Sie es wahrscheinlich nicht verstehen."',
    family_btn: "Reise Galerie",
    contact_label: "Kontakt", contact_title: "Lassen Sie uns Ihren", contact_title2: "Traum verwirklichen.",
    contact_desc: "Kontaktieren Sie uns zu Ihrer Zeit und wir helfen Ihnen, Ihre Ideen in die Realität umzusetzen.",
    contact_write: "Schreiben Sie uns", contact_call: "Anrufen",
    contact_address: "29670 Marbella, Málaga, Spanien",
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
    contact_write: "Написать нам", contact_call: "Позвонить",
    contact_address: "29670 Марбелья, Малага, Испания",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Марбелья, Малага, Испания",
    footer_terms: "Условия использования",
    modal_order: "Заказать похожий проект",
  },
  es: {
    nav_bikes: "Motos", nav_garage: "Garaje", nav_parts: "Piezas", nav_family: "Familia",
    nav_contact: "Contacto",
    hero_badge: "Bienvenido al mundo de Chopper Doctors",
    hero_slogan: "«Construida para rodar» — no es solo un eslogan, es un estilo de vida",
    hero_desc: "Con más de 30 años de experiencia, Chopper Doctors fabrica choppers que combinan el estilo americano con la precisión de la calidad suiza y las tradiciones de la vieja escuela.",
    hero_btn_portfolio: "Ver motocicletas", hero_btn_contact: "Contáctenos",
    stats_years: "años de experiencia", stats_projects: "proyectos", stats_certified: "Certificado H-D", stats_passion: "pasión",
    portfolio_label: "Motos Custom", portfolio_title: "Galería de Motos",
    portfolio_desc: "Fabricamos motocicletas que existen no solo para admirar, sino también para montar. Un chopper sin compromisos, construido para hacer realidad tu sueño.",
    cat_all: "Todos", cat_choppers: "Choppers", cat_bobbers: "Bobbers", cat_restoration: "Restauración", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Garaje Harley", garage_title: "Personalización, Servicio y Reparación",
    garage_p1: "Tu moto es tu reflejo, y podemos ayudarte con todo lo relacionado con la personalización. Al ayudarte a hacer realidad la moto de tus sueños, te ofrecemos no solo estilo, sino también un excelente rendimiento de conducción.",
    garage_p2: "Estamos certificados por Harley-Davidson, con numerosos títulos MMI, y podemos satisfacer todas sus solicitudes de servicio y reparación.",
    garage_custom: "Personalización", garage_service: "Servicio y Mantenimiento", garage_electric: "Electricidad", garage_warranty: "Garantía H-D",
    garage_btn: "Galería del Garaje",
    parts_label: "Piezas y Componentes", parts_title: "Piezas Nuevas y de Diseño Especial",
    parts_p1: "Cuando se trata de repuestos, combinamos la última tecnología con el mejor rendimiento y la más alta calidad para garantizar un viaje sin problemas y agradable.",
    parts_p2: "Solo trabajamos con los mejores distribuidores y fabricantes del mundo. Si lo que buscas aún no se ha fabricado —",
    parts_p2_accent: "podemos diseñar y fabricar todo lo que necesites.",
    parts_more: "… y más",
    family_label: "Nuestra Familia", family_title: "Álbum de Fotos & Viajes",
    family_p1: "Creciendo en la cultura motera de California, sabemos que las personas con las que montamos son tan importantes como lo que montamos.",
    family_p2: "Preferimos rodearnos de personas afines que aman viajar en moto y que saben lo que es la libertad. Por eso la mayoría de nuestros clientes se convierten en familia.",
    family_quote: "«Si necesitas que te lo expliquen — probablemente no lo entenderás.»",
    family_btn: "Galería de Viajes",
    contact_label: "Contacto", contact_title: "Hagamos realidad", contact_title2: "tu sueño.",
    contact_desc: "Contáctenos cuando le sea conveniente y le ayudaremos a hacer realidad sus ideas.",
    contact_write: "Escríbenos", contact_call: "Llamar",
    contact_address: "29670 Marbella, Málaga, España",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, España",
    footer_terms: "Términos de uso",
    modal_order: "Pedir proyecto similar",
  },
  nl: {
    nav_bikes: "Motoren", nav_garage: "Garage", nav_parts: "Onderdelen", nav_family: "Familie",
    nav_contact: "Contact",
    hero_badge: "Welkom in de wereld van Chopper Doctors",
    hero_slogan: "\"Gebouwd om te rijden\" — dat is niet alleen een slogan, het is een levensstijl",
    hero_desc: "Met meer dan 30 jaar ervaring bouwt Chopper Doctors choppers die Amerikaans stijl combineren met Zwitserse kwaliteit en old-school traditie.",
    hero_btn_portfolio: "Bekijk motoren", hero_btn_contact: "Neem contact op",
    stats_years: "jaar ervaring", stats_projects: "projecten", stats_certified: "H-D Gecertificeerd", stats_passion: "passie",
    portfolio_label: "Custom Motoren", portfolio_title: "Motor Galerij",
    portfolio_desc: "Wij bouwen motorfietsen die niet alleen bestaan om te bewonderen, maar uiteraard ook om te rijden. Een compromisloze chopper, gebouwd om uw droom te vervullen.",
    cat_all: "Alle werken", cat_choppers: "Choppers", cat_bobbers: "Bobbers", cat_restoration: "Restauratie", cat_tuning: "Tuning", cat_custom: "Custom",
    garage_label: "Harley Garage", garage_title: "Customizing, Service & Reparatie",
    garage_p1: "Uw motor is uw spiegelbeeld en wij kunnen u helpen met alles wat met customizing te maken heeft. Bij het realiseren van uw droommotor bieden wij niet alleen stijl, maar ook uitstekende rijprestaties.",
    garage_p2: "Wij zijn Harley-Davidson gecertificeerd, met talrijke MMI-graden, en kunnen aan al uw service- en reparatieverzoeken voldoen.",
    garage_custom: "Customizing", garage_service: "Service & Onderhoud", garage_electric: "Elektrisch", garage_warranty: "H-D Garantie",
    garage_btn: "Garage Galerij",
    parts_label: "Onderdelen & Componenten", parts_title: "Nieuwe & Speciaal Ontworpen Onderdelen",
    parts_p1: "Als het om reserveonderdelen gaat, combineren wij de nieuwste technologie met de beste prestaties en de hoogste kwaliteit voor een probleemloze en plezierige rit.",
    parts_p2: "Wij werken alleen met de beste distributeurs en fabrikanten ter wereld. Als wat u zoekt nog niet is gefabriceerd —",
    parts_p2_accent: "kunnen wij alles ontwerpen en bouwen wat u nodig heeft.",
    parts_more: "… en meer",
    family_label: "Onze Familie", family_title: "Fotoalbum & Reizen",
    family_p1: "Opgegroeid in de Californische bikercultuur weten wij dat de mensen met wie wij rijden net zo belangrijk zijn als waarop wij rijden.",
    family_p2: "Wij omringen ons liever met gelijkgestemden die graag op de motor reizen en die weten wat vrijheid is. Daarom worden de meeste van onze klanten familie.",
    family_quote: "\"Als je het uitgelegd moet krijgen — zul je het waarschijnlijk niet begrijpen.\"",
    family_btn: "Reis Galerij",
    contact_label: "Contact", contact_title: "Laten we uw", contact_title2: "droom waarmaken.",
    contact_desc: "Neem contact met ons op wanneer het u uitkomt en wij helpen u uw ideeën tot werkelijkheid te maken.",
    contact_write: "Schrijf ons", contact_call: "Bellen",
    contact_address: "29670 Marbella, Málaga, Spanje",
    footer_rights: "© 2020 Chopper Doctors World — 29670 Marbella, Málaga, Spanje",
    footer_terms: "Gebruiksvoorwaarden",
    modal_order: "Vergelijkbaar project bestellen",
  },
};

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

const PARTS_BRANDS = [
  "S&S", "Baker", "DNA", "Custom Chrome", "Motorcycle Storehouse",
  "Parts Europe", "W&W", "Jims", "Performance Machine", "BDL",
  "Vance and Hines", "Arlen Ness", "Carlini", "Wild1", "Kustom Tech",
  "West Coast Choppers", "Thundercycle Design", "Paul Yaffe Bagger Nation",
  "Red Neck Engineering",
];

const STATS = [
  { value: "30+", key: "stats_years" },
  { value: "340+", key: "stats_projects" },
  { value: "100%", key: "stats_certified" },
  { value: "∞", key: "stats_passion" },
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
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState(TRANSLATIONS[lang].cat_all);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

          <div className="hidden md:flex items-center gap-6">
            {[
              { id: "portfolio", key: "nav_bikes" }, { id: "garage", key: "nav_garage" },
              { id: "parts", key: "nav_parts" }, { id: "family", key: "nav_family" },
            ].map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-display text-sm tracking-widest uppercase transition-colors ${
                  activeSection === link.id ? "text-fire" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="font-display text-sm tracking-widest uppercase px-5 py-2 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm"
            >
              {t("nav_contact")}
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-sm text-muted-foreground hover:border-fire/50 hover:text-foreground transition-all font-body text-sm"
              >
                <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                <span className="font-display text-xs tracking-widest">{lang.toUpperCase()}</span>
                <Icon name="ChevronDown" size={12} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm overflow-hidden z-50 min-w-[100px]">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); setActiveCategory(TRANSLATIONS[l.code].cat_all); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 font-body text-sm transition-colors ${
                        lang === l.code ? "text-fire bg-fire/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span className="font-display text-xs tracking-widest">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Mobile lang */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 border border-border rounded-sm text-muted-foreground font-body text-xs"
              >
                <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                <span>{lang.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm overflow-hidden z-50">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); setActiveCategory(TRANSLATIONS[l.code].cat_all); }}
                      className="w-full flex items-center gap-2 px-3 py-2 font-body text-xs text-muted-foreground hover:text-fire"
                    >
                      <span>{l.flag}</span><span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
            {[
              { id: "portfolio", key: "nav_bikes" }, { id: "garage", key: "nav_garage" },
              { id: "parts", key: "nav_parts" }, { id: "family", key: "nav_family" },
              { id: "contact", key: "nav_contact" },
            ].map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-display text-sm tracking-widest uppercase text-left text-muted-foreground hover:text-fire transition-colors"
              >
                {t(link.key)}
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
              <span className="font-body text-xs text-fire tracking-widest uppercase">{t("hero_badge")}</span>
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
              {t("hero_slogan")}
            </p>

            <p
              className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              {t("hero_desc")}
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

      {/* PORTFOLIO — Кастомные мотоциклы */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
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
              <SectionLabel>{t("garage_label")}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">{t("garage_title")}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("garage_p1")}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t("garage_p2").replace("Harley-Davidson", "")}
                <span className="text-fire font-medium">Harley-Davidson</span>
                {t("garage_p2").includes("Harley-Davidson") ? "" : ""}
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
                  key={brand}
                  className="px-4 py-2 border border-border rounded-sm font-body text-sm text-muted-foreground hover:border-fire/50 hover:text-foreground transition-all cursor-default"
                >
                  {brand}
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
              <SectionLabel>{t("family_label")}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">{t("family_title")}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("family_p1")}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{t("family_p2")}</p>
              <p className="font-body text-fire italic text-lg leading-relaxed">{t("family_quote")}</p>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 font-display text-sm tracking-widest uppercase px-8 py-4 border border-border text-foreground hover:border-fire hover:text-fire transition-all rounded-sm"
              >
                {t("family_btn")}
              </button>
            </AnimatedSection>
          </div>
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
                {t("modal_order")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;