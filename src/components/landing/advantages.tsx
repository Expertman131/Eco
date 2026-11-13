import {
  BadgeCheck,
  Factory,
  Banknote,
  Camera,
  UserCheck,
  Truck,
  Lock,
  Leaf,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const advantages = [
  {
    icon: BadgeCheck,
    title: "Лицензия и спецучёт",
    text: "Лицензия на обращение с отходами I–IV классов и специальный учёт в Пробирной палате. Все документы — оригинальные и проходят любую проверку.",
  },
  {
    icon: Factory,
    title: "Собственная площадка",
    text: "Разборка техники происходит на нашем производстве — под камерами и под контролем. Мы отвечаем за каждый узел, а не перекидываем «куда-то».",
  },
  {
    icon: Banknote,
    title: "Постоплата",
    text: "Платите после выполнения работ и получения документов. Стоимость извлечённых драгметаллов возвращаем на расчётный счёт заказчика.",
  },
  {
    icon: Camera,
    title: "Фото- и видеоотчёт",
    text: "По запросу снимаем процесс погрузки и разборки вашей техники. Для организаций с повышенными требованиями — присутствие вашего представителя.",
  },
  {
    icon: UserCheck,
    title: "Персональный менеджер",
    text: "Один специалист ведёт весь проект: смета, договор, вывоз, документы. Без «перекидывания» между отделами и повторных объяснений.",
  },
  {
    icon: Truck,
    title: "Вывоз по всей России",
    text: "83 региона: собственный автопарк в Москве и области, проверенные партнёры по стране — с единой отчётностью и стандартом качества.",
  },
  {
    icon: Lock,
    title: "Конфиденциальность данных",
    text: "Уничтожение носителей по вашему регламенту: физическое разрушение или программная очистка с актом. Для банков и госучреждений — по 152-ФЗ.",
  },
  {
    icon: Leaf,
    title: "Экологичный след",
    text: "До 92% массы техники уходит во вторичную переработку. Отчёт о переработке пригодится для ESG-отчётности и корпоративных стандартов.",
  },
];

export function Advantages() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24" aria-labelledby="advantages-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Почему выбирают нас</p>
            <h2
              id="advantages-title"
              className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Подрядчик, а не перекупщик
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Мы зарабатываем на переработке, а не на перепродаже ваших проблем.
              Поэтому отвечаем за результат документально — и берём оплату только
              после того, как всё сделано.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 4) * 0.06}>
              <article className="h-full rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <adv.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug">{adv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{adv.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
