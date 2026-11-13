import Image from "next/image";
import { MessageSquareText, FileSignature, ClipboardCheck, Truck, Factory, FolderCheck } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { assetPath } from "@/lib/paths";

const steps = [
  {
    icon: MessageSquareText,
    title: "Заявка и расчёт",
    text: "Оставьте список техники — инженер подготовит смету в течение рабочего дня. Расчёт бесплатный и ни к чему вас не обязывает.",
  },
  {
    icon: FileSignature,
    title: "Договор",
    text: "Подписываем за один день: курьер или ЭДО. Работаем по вашему шаблону и согласуем протокол с ИТ- и службой безопасности.",
  },
  {
    icon: ClipboardCheck,
    title: "Экспертиза и списание",
    text: "Оформляем акт технической экспертизы по инвентарной описи — на вашей площадке или дистанционно по вашей ведомости.",
  },
  {
    icon: Truck,
    title: "Вывоз и погрузка",
    text: "Наш автопарк и бригада приезжают в согласованную дату. Погрузка, упаковка носителей и вывоз входят в стоимость.",
  },
  {
    icon: Factory,
    title: "Утилизация на площадке",
    text: "Разбираем технику на фракции, отправляем драгметаллы на аффинаж, полимеры и металлы — на вторичную переработку.",
  },
  {
    icon: FolderCheck,
    title: "Документы и выплата",
    text: "Передаём полный закрывающий пакет с фото- и видеоотчётом. Стоимость драгметаллов возвращаем на ваш счёт после аффинажа.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Как мы работаем</p>
              <h2
                id="process-title"
                className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                От заявки до закрытого списания — за 5 рабочих дней
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Персональный менеджер ведёт проект от первого звонка до передачи
                документов. Ваши сотрудники не тратят время ни на погрузку, ни
                на бюрократию.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border shadow-lg">
                <Image
                  src={assetPath("/images/process-loading.jpg")}
                  alt="Специалист ЭкоТехПро готовит списанную компьютерную технику к вывозу со склада клиента"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 p-4 shadow-md backdrop-blur">
                  <p className="text-sm font-semibold">Выезд по всей России</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    От Калининграда до Владивостока: собственный автопарк и сеть
                    партнёрских площадок с единой отчётностью.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <ol className="relative space-y-4 border-l-2 border-dashed border-primary/30 pl-6 lg:pl-8">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <li className="relative">
                    <span
                      className="absolute -left-[41px] top-5 hidden h-11 w-11 items-center justify-center rounded-xl border-2 border-primary/30 bg-white text-primary lg:flex"
                      aria-hidden
                    >
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div className="rounded-2xl border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-extrabold text-primary lg:hidden">
                          {i + 1}
                        </span>
                        <h3 className="font-display text-lg font-bold">
                          <span className="mr-2 text-primary">Шаг {i + 1}.</span>
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:pl-0">
                        {step.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
