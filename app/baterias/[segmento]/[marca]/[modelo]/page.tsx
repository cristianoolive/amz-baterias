import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Faq } from "@/components/hero/faq";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

import {
  CAR_BRANDS,
  carBrandPath,
  carModelParagraphs,
  carModelPath,
  readableDetail,
} from "@/lib/car-copy";
import { CAR_MODELS } from "@/lib/car-models";
import { FAQ, SITE_URL } from "@/lib/content";

type Params = Promise<{ segmento: string; marca: string; modelo: string }>;

export function generateStaticParams() {
  return CAR_MODELS.map((m) => ({ segmento: "carro", marca: m.brandSlug, modelo: m.slug }));
}

export const dynamicParams = false;

function findModel(segmento: string, marca: string, modelo: string) {
  if (segmento !== "carro") return undefined;
  return CAR_MODELS.find((m) => m.brandSlug === marca && m.slug === modelo);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { segmento, marca, modelo } = await params;
  const m = findModel(segmento, marca, modelo);
  if (!m) return {};

  const name = `${m.brand} ${m.model}`;
  const title = `Bateria ${name} em Manaus com Entrega Grátis`;
  const description = `Bateria do ${name}: ${m.specs}. Moura ${m.moura.join(
    " ou "
  )}, Heliar ${m.heliar.join(" ou ")} e Pioneiro ${m.pioneiro.join(
    " ou "
  )}. Entrega e instalação grátis em até 40 minutos em Manaus.`;
  return {
    title: `${title} | AMZ Peças & Baterias`,
    description,
    alternates: { canonical: carModelPath(m) },
    openGraph: { url: carModelPath(m), title, description },
  };
}

export default async function CarModelPage({ params }: { params: Params }) {
  const { segmento, marca, modelo } = await params;
  const m = findModel(segmento, marca, modelo);
  if (!m) notFound();

  const name = `${m.brand} ${m.model}`;
  const brand = CAR_BRANDS.find((b) => b.slug === m.brandSlug)!;
  const siblings = brand.models.filter((s) => s.slug !== m.slug);

  const rows: [string, string][] = [
    ["Bateria indicada", m.specs],
    ["Observação", readableDetail(m.detail)],
    ["Moura", m.moura.join(" ou ")],
    ["Heliar", m.heliar.join(" ou ")],
    ["Pioneiro", m.pioneiro.join(" ou ")],
  ];

  const modelFaq = {
    question: `Qual a bateria do ${name}?`,
    answer: `O ${name} usa bateria ${m.specs}. Opções: Moura ${m.moura.join(
      " ou "
    )}, Heliar ${m.heliar.join(" ou ")} ou Pioneiro ${m.pioneiro.join(
      " ou "
    )}. A amperagem exata depende do ano e da versão; confirme pelo WhatsApp (92) 99378-0593.`,
  };
  const faqItems = [modelFaq, ...FAQ.slice(0, 5)];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Bateria de carro", item: `${SITE_URL}/baterias/carro` },
        { "@type": "ListItem", position: 3, name: m.brand, item: `${SITE_URL}${carBrandPath(brand)}` },
        { "@type": "ListItem", position: 4, name: m.model, item: `${SITE_URL}${carModelPath(m)}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <main className="flex w-full flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={
          <>
            Bateria do <span className="text-green-primary">{name}</span> em Manaus
          </>
        }
        subtitle={`Entrega e instalação grátis da bateria do ${m.model} em até 40 minutos, inclusive à noite e no fim de semana.`}
        eventLabel={`modelo_${m.brandSlug}_${m.slug}`}
      />

      <section className="w-full py-12">
        <Container className="grid items-start gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white font-secondary shadow-sm ring-1 ring-black/5">
            <h2 className="bg-green-secondary px-5 py-4 text-xl font-semibold text-white">
              Bateria do {name}
            </h2>
            <table className="w-full text-left">
              <tbody>
                {rows.map(([label, value]) => (
                  <tr key={label} className="border-t border-black/5">
                    <th scope="row" className="w-36 px-5 py-3 align-top text-sm font-semibold text-black/60">
                      {label}
                    </th>
                    <td className="px-5 py-3 font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-black/5 px-5 py-3 text-sm text-black/60">
              SLI é a bateria convencional. EFB e AGM são baterias reforçadas, para
              start-stop e alta demanda elétrica.
            </p>
          </div>

          <div className="font-secondary text-lg text-black/80">
            {carModelParagraphs(m).map((p) => (
              <p key={p} className="mb-5">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {siblings.length > 0 && (
        <section className="w-full bg-[#EDEFEB] py-10">
          <Container className="flex flex-col items-center">
            <h2 className="text-center text-2xl font-secondary">
              Outros modelos{" "}
              <span className="font-semibold text-green-secondary opacity-75">{m.brand}</span>
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={carModelPath(s)}
                    className="block rounded-lg bg-white px-4 py-2 font-secondary font-semibold shadow-sm ring-1 ring-black/5 transition-colors hover:bg-green-secondary hover:text-white"
                  >
                    {m.brand} {s.model}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={carBrandPath(brand)}
              className="mt-6 font-secondary text-green-tertiary underline underline-offset-4"
            >
              Ver todas as baterias {m.brand}
            </Link>
          </Container>
        </section>
      )}

      <Faq items={faqItems} />
    </main>
  );
}
