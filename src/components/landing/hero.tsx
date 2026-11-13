import Image from "next/image";
import { ShieldCheck, FileCheck2, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { SITE } from "@/lib/site";

const heroStats = [
  { value: SITE.stats.years, label: "лет на рынке" },
  { value: SITE.stats.clients, label: "организаций-клиентов" },
  { value: SITE.stats.units, label: "единиц техники утилизировано" },
  { value: SITE.stats.regions, label: "региона присутствия" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.23_0.03_160)] text-emerald-50">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden />
      <div
        className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 py-14 lg:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                <ShieldCheck className="h-4 w-4" aria-hidden />
                Лицензия на обращение с отходами I–IV классов
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl xl:text-[3.4rem]">
                Утилизация оргтехники для юридических лиц{" "}
                <span className="text-emerald-400">по всей России</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-50/80 sm:text-lg">
                Списываем и утилизируем компьютеры, серверы, принтеры и офисную
                электронику с полным пакетом закрывающих документов и официальным
                учётом драгметаллов. Снимаем технику с баланса — снимаем с вас
                ответственность.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#request">
                  <Button size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-primary/30">
                    Получить расчёт стоимости
                    <ArrowRight className="ml-1 h-4.5 w-4.5" aria-hidden />
                  </Button>
                </a>
                <a href={SITE.phoneMainHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-base border-emerald-400/40 bg-transparent text-emerald-50 hover:bg-emerald-400/10 hover:text-emerald-50"
                  >
                    {SITE.phoneMain}
                  </Button>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-emerald-50/75">
                {[
                  "Работаем по договору с постоплатой",
                  "Вывоз и погрузка включены в стоимость",
                  "Фото- и видеоотчёт по запросу",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 shadow-2xl shadow-black/40">
              <Image
                src="/images/hero-facility.png"
                alt="Специалисты ЭкоТехПро сортируют списанную компьютерную технику на производственной площадке"
                width={1440}
                height={736}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.03_160)]/80 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-emerald-400/25 bg-[oklch(0.24_0.03_160)]/85 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                    <FileCheck2 className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm leading-snug text-emerald-50/90">
                    Собственная производственная площадка: разборка, сортировка и
                    аффинаж драгметаллов — под нашим контролем
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 mb-0 lg:mb-4 text-center sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-[oklch(0.26_0.03_160)]/80 px-4 py-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-emerald-300">{stat.value}</dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-50/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
