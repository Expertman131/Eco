// Статическая сборка для GitHub Pages.
//
// Next не умеет собирать output:"export", если в app/ есть серверные маршруты
// (POST /api/leads). На время сборки файлы маршрутов переименуются, после
// сборки возвращаются обратно — рабочая копия не меняется.

import { existsSync, readdirSync, renameSync, statSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const apiDir = join(process.cwd(), "src", "app", "api");
const ROUTE_FILES = new Set(["route.ts", "route.tsx", "route.js", "route.mjs"]);

function findRouteFiles(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      found.push(...findRouteFiles(path));
    } else if (ROUTE_FILES.has(entry)) {
      found.push(path);
    }
  }
  return found;
}

function parkApiRoutes() {
  if (!existsSync(apiDir)) return [];
  return findRouteFiles(apiDir).map((path) => {
    const parked = `${path}.disabled`;
    renameSync(path, parked);
    return [parked, path];
  });
}

function restoreApiRoutes(parked) {
  for (const [from, to] of parked) {
    if (existsSync(from)) renameSync(from, to);
  }
}

const parked = parkApiRoutes();

const basePath = process.env.BASE_PATH || "/Eco";

const result = spawnSync("bun", ["run", "next", "build"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    STATIC_EXPORT: "1",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
});

restoreApiRoutes(parked);

if (result.status !== 0) {
  console.error("Статическая сборка не удалась.");
  process.exit(result.status ?? 1);
}

console.log("Статическая сборка готова: каталог out/");
