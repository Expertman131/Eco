import { Scale, Gavel, AlertTriangle, Warehouse, Coins, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const risks = [
  {
    icon: Gavel,
    title: "Штраф до 250 000 ₽",
    text: "Выброс или передача оргтехники обычному перевозчику — нарушение ст. 8.2 КоАП РФ: штраф 100 000–250 000 ₽ для юридического лица и приостановка деятельности до 90 суток при повторе.",
    tag: "ст. 8.2 КоАП РФ",
  },
  {
    icon: Coins,
    title: "Драгметаллы на учёте",
    text: "Золото, серебро и палладий в платах числятся за организацией отдельно от техники. Нарушение правил учёта — до 120 000 ₽ по ст. 15.47 КоАП РФ, для бюджетных учреждений — проверки ГИИС ДМДК.",
    tag: "ст. 15.47 КоАП РФ",
  },
  {
    icon: Scale,
    title: "Налоговые претензии",
    text: "Списание без акта утилизации от лицензированной организации ФНС рассматривает как фиктивное. Риск — снятие расходов с баланса, доначисления и до выездной проверки включительно.",
    tag: "риск при проверке",
  },
  {
    icon: Warehouse,
    title: "Склад забит техникой",
    text: "30–40 компьютеров занимают около 10 м². Пока техника не утилизирована, она числится на балансе: аренда, инвентаризация, амортизация и ответственность продолжают накапливаться.",
    tag: "непрямые потери",
  },
];

const normItems = [
  {
    title: "89-ФЗ «Об отходах производства и потребления»",
    text: "Отходы электроники — собственность организации до момента передачи лицензированному оператору. Правило распространяется и на частные компании, и на госучреждения.",
  },
  {
    title: "Приказ Минприроды № 399",
    text: "Отходы I–IV классов опасности, включая электронный лом, должны быть переданы лицензированной организации в течение 11 месяцев со дня образования отхода.",
  },
  {
    title: "Учёт драгметаллов (ГИИС ДМДК)",
    text: "Организации обязаны вести учёт драгоценных металлов и сдавать отчётность. Закрыть учёт можно только паспортом-расчётом от переработчика со спецучётом в Пробирной палате.",
  },
];

export function Risks() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="risks-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive">
              <ShieldAlert className="h-4 w-4" aria-hidden />
              Юридическая ответственность
            </p>
            <h2
              id="risks-title"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Почему «просто вынести на мусорку» — самый дорогой вариант
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Оргтехника относится к отходам I–IV классов опасности и содержит
              драгоценные металлы, стоящие на особом учёте. Мы привели бизнес к
              закону 15 лет назад — теперь приводим и вашу отчётность в порядок.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:mt-14">
          {risks.map((risk, i) => (
            <Reveal key={risk.title} delay={i * 0.08}>
              <article className="group relative h-full rounded-2xl border bg-card p-6 transition-all hover:border-destructive/40 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive group-hover:text-white">
                  <risk.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{risk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{risk.text}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  <AlertTriangle className="h-3 w-3" aria-hidden />
                  {risk.tag}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-primary/25 bg-secondary/60 p-6 sm:p-8 lg:mt-12">
            <h3 className="font-display text-xl font-bold">
              Что говорит закон: три нормы, которые важно знать
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {normItems.map((item) => (
                <div key={item.title} className="rounded-xl border bg-card p-5">
                  <h4 className="font-display text-base font-bold text-primary">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
