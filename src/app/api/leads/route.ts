import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите ваше имя")
    .max(100, "Слишком длинное имя"),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(10, "Укажите корректный телефон")
    .max(30, "Слишком длинный номер")
    .regex(
      /^[\d\s()+\-]+$/,
      "Телефон может содержать только цифры и символы + ( ) -"
    ),
  email: z
    .string()
    .trim()
    .email("Некорректный e-mail")
    .max(200)
    .optional()
    .or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  equipment: z.string().trim().max(300).optional().or(z.literal("")),
  quantity: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

// Статическая копия сайта на GitHub Pages шлёт заявки на этот сервер из
// другого домена — перечисленные в переменной Origins домены допускаются.
const ALLOWED_ORIGINS = (process.env.LEAD_ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

export async function POST(request: NextRequest) {
  const cors = corsHeaders(request.headers.get("origin"));

  try {
    const body = await request.json();

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: firstError?.message ?? "Проверьте правильность заполнения формы" },
        { status: 400, headers: cors }
      );
    }

    const data = parsed.data;

    const lead = await db.lead.create({
      data: {
        name: data.name,
        company: data.company || null,
        phone: data.phone,
        email: data.email || null,
        city: data.city || null,
        equipment: data.equipment || null,
        quantity: data.quantity || null,
        message: data.message || null,
        source: "website",
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: lead.id,
        message: "Заявка принята. Специалист свяжется с вами в рабочее время.",
      },
      { headers: cors }
    );
  } catch (error) {
    console.error("Lead creation failed:", error);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Попробуйте позже или позвоните нам." },
      { status: 500, headers: cors }
    );
  }
}
