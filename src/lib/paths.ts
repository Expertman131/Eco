// Публичные файлы (public/) на серверной сборке отдаются с корня домена,
// а на проектном сайте GitHub Pages — из подкаталога /<имя-репозитория>/.
// next/image не добавляет basePath к таким путям, поэтому префикс задаём явно.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!BASE_PATH || !path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
