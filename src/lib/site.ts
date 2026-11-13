export const SITE = {
  brand: "ЭкоТехПро",
  brandFull: "ЭкоТехПро — утилизация оргтехники",
  tagline: "Лицензированная утилизация IT-оборудования для организаций",
  phoneMain: "+7 (495) 120-33-44",
  phoneMainHref: "tel:+74951203344",
  phoneFree: "8 (800) 505-77-22",
  phoneFreeHref: "tel:88005057722",
  email: "zakaz@ecotechpro.ru",
  emailHref: "mailto:zakaz@ecotechpro.ru",
  address: "Москва, Дербеневская наб., д. 7, БЦ «Риверсайд Тауэр», офис 412",
  hours: "Пн–Пт 9:00–19:00, Сб 10:00–16:00",
  regions: "Работаем по всей России",
  inn: "7712345678",
  ogrn: "1107746001234",
  since: 2010,
  stats: {
    clients: "2 400+",
    units: "180 000+",
    years: "15",
    regions: "83",
  },
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#documents", label: "Документы" },
  { href: "#process", label: "Как мы работаем" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
] as const;
