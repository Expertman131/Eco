import { ArrowRight, PhoneCall, FileClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.23_0.03_160)] py-14 text-emerald-50 lg:py-16" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2
                id="cta-title"
                className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl"
              >
                Освободите склад от старой техники — за один вывоз и с документами
              </h2>
              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-emerald-50/75 lg:justify-start">
                <FileClock className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                Смета готовится в течение рабочего дня. Расчёт бесплатный.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a href="#request">
                <Button size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-primary/30">
                  Оставить заявку
                  <ArrowRight className="ml-1 h-4.5 w-4.5" aria-hidden />
                </Button>
              </a>
              <a href={SITE.phoneFreeHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base border-emerald-400/40 bg-transparent text-emerald-50 hover:bg-emerald-400/10 hover:text-emerald-50"
                >
                  <PhoneCall className="mr-1.5 h-4.5 w-4.5" aria-hidden />
                  {SITE.phoneFree}
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
