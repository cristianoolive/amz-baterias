import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Faq } from "@/components/hero/faq";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SegmentLinks } from "@/components/ui/segment-links";

import { BRANDS, FAQ, SEGMENTS, SITE_URL } from "@/lib/content";

type Params = Promise<{ segmento: string }>;

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ segmento: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { segmento } = await params;
  const segment = SEGMENTS.find((s) => s.slug === segmento);
  if (!segment) return {};

  const path = `/baterias/${segment.slug}`;
  return {
    title: `${segment.title} | AMZ Peças & Baterias`,
    description: segment.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: segment.title,
      description: segment.description,
    },
  };
}

export default async function SegmentPage({ params }: { params: Params }) {
  const { segmento } = await params;
  const segment = SEGMENTS.find((s) => s.slug === segmento);
  if (!segment) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Bateria ${segment.name}`,
        item: `${SITE_URL}/baterias/${segment.slug}`,
      },
    ],
  };

  return (
    <main className="flex w-full flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title={segment.heading}
        subtitle={segment.intro}
        eventLabel={`segmento_${segment.slug}`}
      />

      <section className="w-full py-12">
        <Container className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <Image
              src={segment.img}
              alt={segment.imgAlt}
              className="h-auto w-full object-cover"
              sizes="(min-width: 768px) 384px, 100vw"
            />
          </div>

          <div className="flex-1 font-secondary text-lg text-black/80">
            {segment.paragraphs.map((p) => (
              <p key={p} className="mb-5">
                {p}
              </p>
            ))}
            <p className="mb-5">
              Marcas disponíveis: {BRANDS.join(", ")}.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Entrega e instalação grátis em Manaus",
                "Atendimento à noite, sábado e domingo",
                "Teste grátis de bateria e alternador",
                "Até 10x sem juros ou Crediário Bemol",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-[#EDEFEB] px-4 py-3 font-semibold text-black"
                >
                  <span className="text-green-secondary">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <SegmentLinks current={segment.slug} />
      <Faq items={FAQ.slice(0, 6)} />
    </main>
  );
}
