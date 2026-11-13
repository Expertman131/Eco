import type { NextConfig } from "next";

// STATIC_EXPORT=1 — сборка для GitHub Pages: только статика, без серверных
// маршрутов. Обычный `bun run build` продолжает собирать standalone-сервер.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  ...(isStaticExport
    ? {
        // проектный репозиторий GitHub Pages живёт по адресу /<имя-репозитория>/
        basePath: process.env.BASE_PATH || "/Eco",
        trailingSlash: true,
        // оптимизатор next/image на Pages не работает — отдаём исходники
        images: { unoptimized: true },
      }
    : {}),
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["**"],
};

export default nextConfig;
