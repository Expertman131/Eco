import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ЭкоТехПро — утилизация оргтехники для юридических лиц по всей России",
  description:
    "Лицензированная утилизация компьютеров, серверов, принтеров и офисной техники для организаций. Полный пакет закрывающих документов, учёт драгметаллов, вывоз по всей России. Работаем по договору с постоплатой.",
  keywords: [
    "утилизация оргтехники",
    "утилизация компьютеров",
    "списание техники юридические лица",
    "утилизация серверов",
    "вывоз оргтехники",
    "ликвидация IT оборудования",
    "паспорт-расчёт драгметаллов",
  ],
  openGraph: {
    title: "ЭкоТехПро — утилизация оргтехники для организаций",
    description:
      "Легальная утилизация IT-оборудования с полным пакетом документов. Лицензия, собственная площадка, вывоз по всей России.",
    siteName: "ЭкоТехПро",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
