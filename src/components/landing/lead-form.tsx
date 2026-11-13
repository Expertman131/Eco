"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  Loader2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "@/lib/site";

const formSchema = z.object({
  name: z.string().trim().min(2, "Укажите ваше имя"),
  company: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+\-]{10,30}$/, "Укажите телефон в формате +7 (___) ___-__-__"),
  email: z
    .string()
    .trim()
    .email("Проверьте адрес e-mail")
    .optional()
    .or(z.literal("")),
  city: z.string().trim().optional(),
  equipment: z.string().trim().optional(),
  quantity: z.string().trim().optional(),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    error: "Необходимо согласие на обработку данных",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      city: "",
      equipment: "",
      quantity: "",
      message: "",
    },
  });

  const consent = watch("consent");

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Ошибка отправки");
      }

      setSubmitted(true);
      reset();
      toast({
        title: "Заявка отправлена",
        description: data.message || "Специалист свяжется с вами в рабочее время.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Не удалось отправить заявку",
        description:
          error instanceof Error
            ? error.message
            : "Попробуйте позже или позвоните нам напрямую.",
      });
    }
  };

  return (
    <section id="request" className="py-16 lg:py-24" aria-labelledby="request-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl border shadow-xl">
          <div className="grid lg:grid-cols-5">
            {/* Contact info panel */}
            <div className="relative bg-[oklch(0.23_0.03_160)] p-8 text-emerald-50 lg:col-span-2 lg:p-10">
              <div className="absolute inset-0 bg-grid-dark" aria-hidden />
              <div className="relative">
                <h2 id="request-title" className="font-display text-2xl font-extrabold sm:text-3xl">
                  Заявка на расчёт утилизации
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-emerald-50/80">
                  Заполните форму — инженер подготовит смету и ответит на вопросы
                  о документах. Это бесплатно и ни к чему не обязывает.
                </p>

                <Separator className="my-7 bg-emerald-400/20" />

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                      <Phone className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-emerald-50/60">
                        Телефоны
                      </span>
                      <a href={SITE.phoneMainHref} className="mt-0.5 block font-display font-bold hover:text-emerald-300">
                        {SITE.phoneMain}
                      </a>
                      <a href={SITE.phoneFreeHref} className="block font-display font-bold hover:text-emerald-300">
                        {SITE.phoneFree} — по РФ бесплатно
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                      <Mail className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-emerald-50/60">
                        E-mail для заявок
                      </span>
                      <a href={SITE.emailHref} className="mt-0.5 block font-display font-bold hover:text-emerald-300">
                        {SITE.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                      <Clock className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-emerald-50/60">
                        Режим работы
                      </span>
                      <span className="mt-0.5 block font-medium">{SITE.hours}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                      <MapPin className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-emerald-50/60">
                        Офис
                      </span>
                      <span className="mt-0.5 block font-medium leading-snug">{SITE.address}</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-xs leading-relaxed text-emerald-50/80">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300">
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                    Ваши данные защищены
                  </span>
                  <p className="mt-1.5">
                    Передаём информацию только инженеру, который готовит вашу
                    смету. Не используем её для спам-рассылок.
                  </p>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="bg-white p-8 lg:col-span-3 lg:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
                    <CheckCircle2 className="h-8 w-8" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold">
                    Заявка принята
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Спасибо! Инженер свяжется с вами в рабочее время в течение
                    часа и подготовит расчёт стоимости утилизации.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Отправить ещё одну заявку
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">
                        Ваше имя <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Как к вам обращаться"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Организация</Label>
                      <Input
                        id="company"
                        placeholder="ООО «Компания»"
                        aria-invalid={!!errors.company}
                        {...register("company")}
                      />
                      {errors.company && (
                        <p className="text-xs text-destructive">{errors.company.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">
                        Телефон <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        placeholder="+7 (___) ___-__-__"
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@company.ru"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="city">Город вывоза</Label>
                      <Input id="city" placeholder="Москва" {...register("city")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="quantity">Примерный объём</Label>
                      <Input id="quantity" placeholder="например, 40 единиц" {...register("quantity")} />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="equipment">Что нужно утилизировать</Label>
                      <Input
                        id="equipment"
                        placeholder="Компьютеры, мониторы, принтеры, серверы…"
                        {...register("equipment")}
                      />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Сроки, требования к документам, условия на объекте — всё, что важно учесть"
                        className="resize-none"
                        {...register("message")}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2.5">
                    <Checkbox
                      id="consent"
                      checked={consent === true}
                      onCheckedChange={(checked) =>
                        setValue("consent", checked === true, { shouldValidate: true })
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor="consent"
                      className="text-xs font-normal leading-relaxed text-muted-foreground cursor-pointer"
                    >
                      Я согласен на обработку персональных данных в соответствии
                      с 152-ФЗ и политикой конфиденциальности. Отправка заявки не
                      создаёт финансовых обязательств.
                    </Label>
                  </div>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-destructive">{errors.consent.message}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4.5 w-4.5 animate-spin" aria-hidden />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        <Send className="mr-1.5 h-4.5 w-4.5" aria-hidden />
                        Получить расчёт стоимости
                      </>
                    )}
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Ответим в течение рабочего часа. Расчёт бесплатный.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
