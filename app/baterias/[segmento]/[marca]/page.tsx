import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Faq } from "@/components/hero/faq";
import { CarBrandLinks } from "@/components/ui/car-brand-links";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

import { CAR_BRANDS, carBrandPath, carModelPath, readableDetail } from "@/lib/car-copy";
import { FAQ, SITE_URL } from "@/lib/content";

type Params = Promise<{ segmento: string; marca: string }>;

export function generateStaticParams() {
  return CAR_BRANDS.map((b) => ({ segmento: "carro", marca: b.slug }));
}

export const dynamicParams = false;

function findBrand(segmento: string, marca: string) {
  if (segmento !== "carro") return undefined;
  return CAR_BRANDS.find((b) => b.slug === marca);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { segmento, marca } = await params;
  const brand = findBrand(segmento, marca);
  if (!brand) return {};

  const title = `Bateria ${brand.name} em Manaus com Entrega e Instalação Grátis`;
  const description = `Bateria certa para ${brand.models
    .map((m) => m.model)
    .join(", ")}. Moura, Heliar e Pioneiro com entrega e instalação grátis em até 40 minutos em Manaus.`;
  return {
    title: `${title} | AMZ Peças & Baterias`,
    description,
    alternates: { canonical: carBrandPath(brand) },
    openGraph: { url: carBrandPath(brand), title, description },
  };
}

export default async function CarBrandPage({ params }: { params: Params }) {
  const { segmento, marca } = await params;
  const brand = findBrand(segmento, marca);
  if (!brand) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Bateria de carro", item: `${SITE_URL}/baterias/carro` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_URL}${carBrandPath(brand)}` },
    ],
  };

  return (
    <main className="flex w-full flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title={
          <>
            Bateria <span className="text-green-primary">{brand.name}</span> em Manaus
          </>
        }
        subtitle={`Bateria certa para o seu ${brand.name}, com entrega e instalação grátis em até 40 minutos.`}
        eventLabel={`marca_${brand.slug}`}
      />

      <section className="w-full bg-[#EDEFEB] py-12">
        <Container>
          <h2 className="text-center text-2xl font-secondary sm:text-3xl">
            Escolha o{" "}
            <span className="font-semibold text-green-secondary opacity-75">modelo</span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brand.models.map((m) => (
              <li key={m.slug}>
                <Link
                  href={carModelPath(m)}
                  className="flex h-full flex-col rounded-3xl bg-white p-5 font-secondary shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:ring-green-secondary"
                >
                  <h3 className="text-xl font-semibold">
                    {brand.name} {m.model}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-green-secondary">{m.specs}</p>
                  <p className="mt-2 text-sm text-black/70">{readableDetail(m.detail)}</p>
                  <span className="mt-4 text-sm text-green-tertiary underline underline-offset-4">
                    Ver bateria do {m.model}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CarBrandLinks current={brand.slug} />
      <Faq items={FAQ.slice(0, 6)} />
    </main>
  );
}
