import Link from "next/link";
import { Recycle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[oklch(0.21_0.03_160)] text-emerald-50/85">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={SITE.brand}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Recycle className="h-5 w-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-extrabold tracking-tight text-emerald-50">
                  ЭкоТех<span className="text-emerald-400">Про</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-emerald-50/50">
                  утилизация оргтехники
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-50/65">
              Лицензированная утилизация IT-оборудования для юридических лиц.
              Работаем по всей России с {SITE.since} года.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-300">
              Разделы
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-emerald-50/70 transition-colors hover:text-emerald-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-300">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                <span>
                  <a href={SITE.phoneMainHref} className="font-semibold text-emerald-50 hover:text-emerald-300">
                    {SITE.phoneMain}
                  </a>
                  <span className="block text-xs text-emerald-50/60">{SITE.phoneFree} — по РФ бесплатно</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                <a href={SITE.emailHref} className="text-emerald-50/70 hover:text-emerald-300">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                <span className="text-emerald-50/70">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                <span className="text-emerald-50/70">{SITE.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-300">
              Юридическая информация
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-emerald-50/65">
              <li>ИНН {SITE.inn}</li>
              <li>ОГРН {SITE.ogrn}</li>
              <li>Лицензия на обращение с отходами I–IV классов опасности</li>
              <li>Спецучёт в Пробирной палате (ГИИС ДМДК)</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-emerald-400/15" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-emerald-50/55 sm:flex-row">
          <p>© {new Date().getFullYear()} ООО «ЭкоТехПро». Все права защищены.</p>
          <p>
            Сайт носит информационный характер и не является публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
