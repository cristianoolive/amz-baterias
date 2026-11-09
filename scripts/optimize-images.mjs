// Converte as imagens de assets/ para WebP no tamanho em que aparecem no site
// (com folga para telas retina). A hospedagem não aguenta a otimização sob
// demanda do Next.js (images.unoptimized), então a otimização é feita aqui.
//
// Uso: node scripts/optimize-images.mjs
// Gera o .webp ao lado do original e apaga o original. Depois, troque os
// imports de .png/.jpg para .webp nos componentes.
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Sem cache: no Windows/OneDrive o cache segura o arquivo e impede apagar.
sharp.cache(false);

// Limite por pasta: largura máxima (w) ou altura máxima (h), em pixels.
const RULES = [
  // keep: o original continua sendo lido pelo app/opengraph-image.tsx (não é servido).
  { dir: "assets/hero/images/introduction/home.jpg", w: 1920, q: 70, keep: true },
  { dir: "assets/hero/images/introduction/introduction-photo-2", w: 1000 },
  { dir: "assets/hero/images/introduction/baterias_home", w: 1000 },
  { dir: "assets/hero/images/introduction/crediario-bemol", w: 1024 },
  { dir: "assets/hero/images/introduction", h: 72 }, // ícones de cartão (h-6)
  { dir: "assets/hero/images/payment-methods", w: 1024 },
  { dir: "assets/hero/images/delivery-steps", w: 800 },
  { dir: "assets/hero/images/battery-start-stop", w: 800 },
  { dir: "assets/hero/images/battery-types", w: 700 },
  { dir: "assets/hero/images/battery-carrousel", w: 600 },
  { dir: "assets/hero/images/parts-carrousel", w: 600 },
  { dir: "assets/hero/images/car-brands", h: 132 }, // logos h-11
  { dir: "assets/hero/images/moto-brands", h: 132 },
  { dir: "assets/icons/amz-logo-novo", w: 400 },
];

const EXT = /\.(png|jpe?g)$/i;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

const files = await walk("assets");
let before = 0;
let after = 0;
for (const file of files) {
  const rel = file.split(path.sep).join("/");
  const rule = RULES.find((r) => rel.startsWith(r.dir));
  if (!rule) continue; // imagens sem regra (não usadas) ficam como estão
  const target = rel.replace(EXT, ".webp");
  const resize = rule.w
    ? { width: rule.w, withoutEnlargement: true }
    : { height: rule.h, withoutEnlargement: true };
  await sharp(rel).rotate().resize(resize).webp({ quality: rule.q ?? 80 }).toFile(target);
  const a = (await stat(rel)).size;
  const b = (await stat(target)).size;
  before += a;
  after += b;
  console.log(`${(a / 1024).toFixed(0).padStart(5)}KB -> ${(b / 1024).toFixed(0).padStart(4)}KB  ${target}`);
  if (!rule.keep) await unlink(rel);
}
console.log(`Total: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(2)}MB`);
