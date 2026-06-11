import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const SOURCE = "C:/Claude/barber-experience/fotos";
const OUT = join(process.cwd(), "public", "assets");
mkdirSync(OUT, { recursive: true });

// Mapeamento curado: foto de origem -> nome semantico + larguras de saida
const photos = [
  // Retrato dramatico frontal em fundo preto - imagem principal do hero
  { src: "WhatsApp Image 2026-06-10 at 17.48.16 (3).jpeg", name: "fidelis-hero", widths: [520, 900] },
  // Retrato dramatico 3/4 em fundo preto - secao de autoridade
  { src: "WhatsApp Image 2026-06-10 at 17.48.17.jpeg", name: "fidelis-retrato", widths: [520, 900] },
  // Falando para a turma com microfone - educador em acao
  { src: "WhatsApp Image 2026-06-10 at 17.48.16.jpeg", name: "fidelis-aula", widths: [640, 1200] },
  // Demonstracao de corte com alunos observando
  { src: "WhatsApp Image 2026-06-10 at 17.48.18 (1).jpeg", name: "fidelis-demonstracao", widths: [520, 900] },
  // Demonstracao tecnica com secador
  { src: "WhatsApp Image 2026-06-10 at 17.48.16 (2).jpeg", name: "fidelis-tecnica", widths: [520, 900] },
  // Detalhe das maos seccionando o cabelo
  { src: "WhatsApp Image 2026-06-10 at 17.48.18 (2).jpeg", name: "fidelis-maos", widths: [520, 900] },
  // Sorrindo em pe, parede texturizada - lado humano
  { src: "WhatsApp Image 2026-06-10 at 17.48.17 (2).jpeg", name: "fidelis-sorriso", widths: [520, 900] },
  // Gesticulando em aula no salao xadrez
  { src: "WhatsApp Image 2026-06-10 at 17.48.15 (1).jpeg", name: "fidelis-gesto", widths: [520, 900] },
];

for (const photo of photos) {
  for (const width of photo.widths) {
    const out = join(OUT, `${photo.name}-${width}.webp`);
    const info = await sharp(join(SOURCE, photo.src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    console.log(`${photo.name}-${width}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
  }
}
