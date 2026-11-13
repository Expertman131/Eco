import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Info, Banknote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

const priceRows = [
  { item: "Системный блок, ноутбук", from: "50 ₽", to: "150 ₽", note: "за единицу" },
  { item: "Монитор (LCD / TFT)", from: "100 ₽", to: "250 ₽", note: "за единицу" },
  { item: "Принтер, МФУ, сканер", from: "150 ₽", to: "500 ₽", note: "за единицу" },
  { item: "Сервер, СХД", from: "500 ₽", to: "1 500 ₽", note: "за единицу" },
  { item: "ИБП, батарейные модули", from: "200 ₽", to: "600 ₽", note: "за единицу" },
  { item: "IP-телефон, мини-АТС", from: "30 ₽", to: "120 ₽", note: "за единицу" },
  { item: "Кабельная продукция", from: "15 ₽", to: "35 ₽", note: "за кг" },
  { item: "Уничтожение носителей (HDD/SSD)", from: "100 ₽", to: "300 ₽", note: "за единицу" },
];

const conditions = [
  {
    title: "Крупная партия — выгоднее",
    text: "При объёме от 200 единиц или 1 тонны базовая стоимость снижается, а вывоз по Москве и области становится бесплатным.",
  },
  {
    title: "Драгметаллы — в ваш бюджет",
    text: "После аффинажа стоимость извлечённого золота, серебра и палладия возвращается на расчётный счёт заказчика по паспорту-расчёту.",
  },
  {
    title: "Постоплата по факту",
    text: "Оплата — после вывоза техники и передачи полного пакета документов. Работаем по безналичному расчёту, в т.ч. с бюджетными учреждениями.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Стоимость</p>
            <h2
              id="pricing-title"
              className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Прозрачные цены без «сюрпризов» на выезде
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Итоговая смета зависит от состава партии, условий на объекте и
              региона вывоза. Точную стоимость инженер рассчитает по вашему
              списку — бесплатно и в течение рабочего дня.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8 lg:mt-14">
          <Reveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/70 hover:bg-secondary/70">
                    <TableHead className="h-12 font-display text-sm font-bold">Тип техники</TableHead>
                    <TableHead className="h-12 text-right font-display text-sm font-bold">Цена от</TableHead>
                    <TableHead className="h-12 text-right font-display text-sm font-bold">До</TableHead>
                    <TableHead className="h-12 hidden sm:table-cell font-display text-sm font-bold">Ед. измерения</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {priceRows.map((row) => (
                    <TableRow key={row.item} className="transition-colors hover:bg-accent/50">
                      <TableCell className="py-3.5 font-medium">{row.item}</TableCell>
                      <TableCell className="py-3.5 text-right font-display font-bold text-primary">{row.from}</TableCell>
                      <TableCell className="py-3.5 text-right text-muted-foreground">{row.to}</TableCell>
                      <TableCell className="py-3.5 hidden sm:table-cell text-muted-foreground">{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-start gap-2.5 border-t bg-secondary/40 px-5 py-3.5 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                Указаны ориентировочные цены для юрлиц без НДС при стандартных
                условиях вывоза в Москве и МО. Не являются публичной офертой.
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {conditions.map((cond, i) => (
              <Reveal key={cond.title} delay={i * 0.08}>
                <article className="rounded-2xl border bg-card p-6">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Banknote className="mr-1 h-3.5 w-3.5" aria-hidden />
                    Условие {i + 1}
                  </Badge>
                  <h3 className="mt-3 font-display text-base font-bold">{cond.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cond.text}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <a href="#request" className="block">
                <Button size="lg" className="w-full text-base">
                  Рассчитать мою партию
                  <ArrowRight className="ml-1 h-4.5 w-4.5" aria-hidden />
                </Button>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
