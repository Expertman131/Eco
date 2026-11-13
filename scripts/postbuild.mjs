import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const standalone = join(process.cwd(), ".next", "standalone");

if (!existsSync(standalone)) {
  console.error("Нет каталога .next/standalone — сборка не удалась.");
  process.exit(1);
}

const jobs = [
  { from: join(process.cwd(), ".next", "static"), to: join(standalone, ".next", "static") },
  { from: join(process.cwd(), "public"), to: join(standalone, "public") },
];

for (const { from, to } of jobs) {
  if (!existsSync(from)) continue;
  mkdirSync(join(to, ".."), { recursive: true });
  cpSync(from, to, { recursive: true });
  console.log(`Скопировано: ${from} → ${to}`);
}
