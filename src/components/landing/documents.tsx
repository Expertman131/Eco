import {
  FileSignature,
  ClipboardCheck,
  FileStack,
  FileCheck2,
  Coins,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const documents = [
  {
    icon: FileSignature,
    step: "01",
    title: "Договор",
    text: "Типовой или ваш шаблон: работаем по ЭДО, принимаем согласования по регламенту вашей безопасности и юротдела.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Акт технической экспертизы",
    text: "Основание для списания техники с баланса. Формируем по описи — на вашей территории или удалённо по фото и инвентарной ведомости.",
  },
  {
    icon: FileStack,
    step: "03",
    title: "Акт приёма-передачи ТМЦ",
    text: "Фиксирует факт, состав и количество переданной на утилизацию техники. Юридически снимает с вас ответственность за имущество.",
  },
  {
    icon: FileCheck2,
    step: "04",
    title: "Акт об утилизации",
    text: "Подтверждает фактическое уничтожение техники на лицензированной площадке. Именно его проверяют контролирующие органы.",
  },
  {
    icon: Coins,
    step: "05",
    title: "Паспорт-расчёт по драгметаллам",
    text: "Закрывает учёт золота, серебра и палладия в ГИИС ДМДК. Выдаётся только переработчиком со спецучётом в Пробирной палате — у нас он есть.",
  },
  {
    icon: ReceiptText,
    step: "06",
    title: "УПД и договорные документы",
    text: "Полный бухгалтерский пакет: УПД, счёт-фактура, отчёт о переработке. Всё для налоговой и вашей отчётности — без доработок.",
  },
];

export function Documents() {
  return (
    <section
      id="documents"
      className="relative overflow-hidden bg-[oklch(0.23_0.03_160)] py-16 text-emerald-50 lg:py-24"
      aria-labelledby="documents-title"
    >
      <div className="absolute inset-0 bg-grid-dark" aria-hidden />
      <div
        className="absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Закрывающие документы
            </p>
            <h2
              id="documents-title"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Полный пакет документов — списание закрыто навсегда
            </h2>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/80 sm:text-lg">
              Отдать технику «куда-то» без документов — оставить организацию
              один на один с проверкой. Мы выдаём шесть документов, каждый из
              которых закрывает свой участок учёта: от бухгалтерии до ГИИС ДМДК.
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:mt-14">
          {documents.map((doc, i) => (
            <Reveal key={doc.step} delay={(i % 3) * 0.08}>
              <li className="relative h-full rounded-2xl border border-emerald-400/20 bg-[oklch(0.27_0.03_160)]/80 p-6 backdrop-blur transition-colors hover:border-emerald-400/50">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <doc.icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-emerald-400/25">
                    {doc.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{doc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/70">{doc.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-6 py-5 sm:flex-row lg:mt-12">
            <p className="text-sm leading-relaxed text-emerald-50/85 sm:max-w-xl sm:text-base">
              <span className="font-semibold text-emerald-300">Важно:</span> документы выдаём в оригиналах с
              печатями и подписями, дублируем в ЭДО. Ваш представитель может лично присутствовать при утилизации.
            </p>
            <a
              href="#request"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-display text-sm font-bold text-[oklch(0.23_0.03_160)] transition-opacity hover:opacity-90"
            >
              Запросить образцы документов
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
