import { CAR_MODELS, type CarModel } from "@/lib/car-models";

export type CarBrand = { name: string; slug: string; models: CarModel[] };

export const CAR_BRANDS: CarBrand[] = Array.from(
  CAR_MODELS.reduce((map, m) => {
    const brand = map.get(m.brandSlug) ?? { name: m.brand, slug: m.brandSlug, models: [] };
    brand.models.push(m);
    return map.set(m.brandSlug, brand);
  }, new Map<string, CarBrand>()).values()
);

export const carModelPath = (m: CarModel) => `/baterias/carro/${m.brandSlug}/${m.slug}`;
export const carBrandPath = (b: { slug: string }) => `/baterias/carro/${b.slug}`;

// A planilha usa abreviações ("s/", "c/"); no site o texto sai por extenso.
export function readableDetail(detail: string) {
  const text = detail
    .replace(/\bs\/\s*/g, "sem ")
    .replace(/\bc\/\s*/g, "com ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function carModelParagraphs(m: CarModel): string[] {
  const name = `${m.brand} ${m.model}`;
  const isElectric = /el[eé]trico/i.test(m.detail);
  const isHybrid = /\b(P?HEV)\b/.test(m.detail) || /\bHEV\b/.test(m.specs);
  const needsEfbAgm = /EFB|AGM/.test(m.specs);

  const paragraphs = [`O ${name} usa bateria ${m.specs}.`];

  if (isElectric) {
    paragraphs.push(
      `Mesmo sendo elétrico, o ${m.model} tem uma bateria auxiliar de 12V, que liga os sistemas eletrônicos do carro. Quando ela enfraquece, o carro pode não ligar, e a troca é feita como num carro a combustão.`
    );
  } else if (isHybrid) {
    paragraphs.push(
      `Nas versões híbridas, além da bateria de tração, o ${m.model} tem uma bateria auxiliar de 12V, que liga os sistemas eletrônicos. É ela que trocamos.`
    );
  }

  if (needsEfbAgm) {
    paragraphs.push(
      `Quando a indicação é EFB ou AGM, não troque por bateria comum: essas baterias aguentam muito mais ciclos de carga, exigidos pelo start-stop e pelos carros com alta demanda eletrônica. Uma bateria comum dura menos e pode desativar o start-stop.`
    );
  }

  paragraphs.push(
    `A amperagem certa muda conforme o ano e a versão. Mande o ano e a versão do seu ${m.model} no WhatsApp que confirmamos a bateria antes de sair para a entrega, grátis e em até 40 minutos em Manaus.`
  );

  return paragraphs;
}
