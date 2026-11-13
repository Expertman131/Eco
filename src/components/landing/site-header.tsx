"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Recycle, Phone, Menu, X, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top info bar */}
      <div className="hidden md:block bg-[oklch(0.24_0.03_160)] text-emerald-50/90">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
                {SITE.hours}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
                <a href={SITE.emailHref} className="hover:text-emerald-300 transition-colors">
                  {SITE.email}
                </a>
              </span>
            </div>
            <span className="font-medium tracking-wide">{SITE.regions}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={cn(
          "border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow",
          scrolled ? "shadow-md border-border" : "shadow-none border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={SITE.brand}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Recycle className="h-5.5 w-5.5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-extrabold tracking-tight">
                  ЭкоТех<span className="text-primary">Про</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  утилизация оргтехники
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href={SITE.phoneMainHref}
                className="hidden xl:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
              >
                <span className="font-display text-base font-bold">{SITE.phoneMain}</span>
                <span className="text-[11px] text-muted-foreground">{SITE.phoneFree} — бесплатно по РФ</span>
              </a>
              <a href={SITE.phoneMainHref} className="flex xl:hidden items-center xl:hidden sm:items-center">
                <Button size="icon" variant="outline" className="sm:hidden" aria-label="Позвонить">
                  <Phone className="h-4 w-4" />
                </Button>
              </a>
              <a href="#request" className="hidden sm:inline-flex">
                <Button>Получить расчёт</Button>
              </a>
              <Button
                size="icon"
                variant="ghost"
                className="lg:hidden"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col" aria-label="Мобильная навигация">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#request" onClick={() => setMenuOpen(false)} className="mt-2">
                <Button className="w-full">Получить расчёт</Button>
              </a>
              <a
                href={SITE.phoneMainHref}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-base font-semibold"
              >
                <Phone className="h-4 w-4 text-primary" /> {SITE.phoneMain}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
