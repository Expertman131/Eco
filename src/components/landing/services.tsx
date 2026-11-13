import {
  Cpu,
  Server,
  Monitor,
  Printer,
  Network,
  PhoneCall,
  BatteryCharging,
  HardDrive,
  Cable,
  ScanLine,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const services = [
  {
    icon: Cpu,
    title: "Компьютеры и ноутбуки",
    text: "Системные блоки, моноблоки, ноутбуки, тонкие клиенты и рабочие станции — списание по акту технической экспертизы.",
  },
  {
    icon: Server,
    title: "Серверы и оборудование ЦОД",
    text: "Серверные платформы, стойки, СХД, блейд-системы. Демонтаж, деинсталляция и безопасное извлечение носителей.",
  },
  {
    icon: Monitor,
    title: "Мониторы и дисплеи",
    text: "LCD, TFT, электронно-лучевые мониторы и интерактивные панели. ЭЛТ передаются на специальную переработку.",
  },
  {
    icon: Printer,
    title: "Принтеры, МФУ, сканеры",
    text: "Лазерные и струйные устройства, картриджи и тонеры. Отработанная техника любого производителя.",
  },
  {
    icon: Network,
    title: "Сетевое оборудование",
    text: "Коммутаторы, маршрутизаторы, точки доступа, шлюзы и телекоммуникационные шкафы.",
  },
  {
    icon: PhoneCall,
    title: "Телефония и АТС",
    text: "IP-телефоны, аналоговые станции, видеоконференцсвязь, радиостанции и офисные мини-АТС.",
  },
  {
    icon: BatteryCharging,
    title: "ИБП и аккумуляторы",
    text: "Источники бесперебойного питания, батарейные модули и элементы питания с нейтрализацией электролитов.",
  },
  {
    icon: HardDrive,
    title: "Носители информации",
    text: "HDD, SSD, ленточные библиотеки. Гарантированное уничтожение данных с актом по вашему регламенту.",
  },
  {
    icon: Cable,
    title: "Кабели и комплектующие",
    text: "Кабельная продукция, платы, модули памяти, блоки питания и любая электронная начинка офисов.",
  },
  {
    icon: ScanLine,
    title: "Прочая офисная электроника",
    text: "Проекторы, камеры, банковские терминалы, кассовое и банковское оборудование — примем всё по описи.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-16 lg:py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Что мы утилизируем</p>
              <h2
                id="services-title"
                className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                Любая офисная электроника — по одной заявке
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Работаем с партиями любого объёма: от нескольких ноутбуков при
                переезде офиса до комплексного освобождения серверных залов и
                рабочих мест по всему офисному зданию.
              </p>
            </div>
            <a href="#request" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">
              Отправить список техники
              <ArrowRight className="h-4.5 w-4.5" aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mt-14">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 5) * 0.06}>
              <article className="group h-full rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 rounded-xl border border-dashed border-primary/40 bg-white px-5 py-4 text-center text-sm text-muted-foreground">
            Не нашли свою категорию? Мы принимаем <span className="font-semibold text-foreground">любое</span> электронное
            и электротехническое оборудование организаций — пришлите список, и инженер оценит его в течение рабочего дня.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
