import Image from "next/image";
import { Building2, Landmark, Banknote as BankIcon, Server, Signal, Tractor } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { assetPath } from "@/lib/paths";

const segments = [
  {
    icon: Building2,
    title: "Коммерческие организации",
    text: "Обновление парка техники, переезды офисов, ликвидация филиалов и закрытие компаний.",
  },
  {
    icon: Landmark,
    title: "Бюджетные учреждения",
    text: "Работа по 44-ФЗ и 223-ФЗ: договоры, УФК, отчётность в ГИИС ДМДК — понимаем специфику госзаказа.",
  },
  {
    icon: BankIcon,
    title: "Банки и финансовый сектор",
    text: "Уничтожение носителей с конфиденциальными данными по внутреннему регламенту, под контролем вашей службы безопасности.",
  },
  {
    icon: Server,
    title: "IT-компании и ЦОД",
    text: "Регулярный вывод серверного оборудования: графики, журналы движения ТМЦ, серийный учёт каждой единицы.",
  },
  {
    icon: Signal,
    title: "Телеком и операторы связи",
    text: "Массовая утилизация абонентского и сетевого оборудования из регионов — проектная работа с графиком вывозов.",
  },
  {
    icon: Tractor,
    title: "Производственные предприятия",
    text: "Списание станочной электроники, КИПиА и офисной техники заводских администраций с оформлением по всем правилам.",
  },
];

export function Clients() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24" aria-labelledby="clients-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border shadow-lg order-2 lg:order-1">
              <Image
                src={assetPath("/images/components.png")}
                alt="Изъятые электронные платы и компоненты отсортированы по контейнерам для извлечения драгоценных металлов"
                width={1152}
                height={864}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.23_0.03_160)]/85 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg font-bold text-emerald-50">
                  Драгметаллы возвращаются в ваш бюджет
                </p>
                <p className="mt-1 text-sm text-emerald-50/80">
                  Каждая партия проходит входной контроль и взвешивание — вы
                  получаете паспорт-расчёт с реальными граммами, а не оценку «на глаз».
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Кому мы полезны</p>
              <h2
                id="clients-title"
                className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                Работаем с теми, кому важны документы и репутация
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                2 400+ организаций уже доверили нам вывод техники. Среди них —
                производственные холдинги, банки, телеком-операторы и сотни
                бюджетных учреждений по всей стране.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {segments.map((seg, i) => (
                <Reveal key={seg.title} delay={(i % 2) * 0.08 + 0.05}>
                  <article className="h-full rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                        <seg.icon className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <h3 className="font-display text-sm font-bold leading-snug">{seg.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seg.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
