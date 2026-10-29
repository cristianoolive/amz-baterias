import type { Metadata } from "next";

import { Faq } from "@/components/hero/faq";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SegmentLinks } from "@/components/ui/segment-links";

import { BOAT_CITIES, FAQ, NEARBY_CITIES, SITE_URL } from "@/lib/content";

const title = "Entrega de Bateria no Interior do Amazonas por Barco";
const description =
  "Enviamos baterias de carro, moto, náutica e estacionária de Manaus para o interior do Amazonas pelo barco da sua preferência. Atendemos também Iranduba, Manacapuru e Rio Preto da Eva.";

export const metadata: Metadata = {
  title: `${title} | AMZ Peças & Baterias`,
  description,
  alternates: { canonical: "/entrega-interior-amazonas" },
  openGraph: { url: "/entrega-interior-amazonas", title, description },
};

const steps = [
  {
    title: "Peça pelo WhatsApp",
    text: "Informe o veículo ou equipamento, a cidade de destino e o barco de sua preferência.",
  },
  {
    title: "Pagamento",
    text: "Você paga a bateria e a logística de envio. Como não recebemos a bateria usada, o valor é sem o desconto da sucata.",
  },
  {
    title: "Embarque",
    text: "Levamos a bateria até o barco escolhido, em Manaus, e você recebe na sua cidade.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Entrega no interior do Amazonas",
      item: `${SITE_URL}/entrega-interior-amazonas`,
    },
  ],
};

export default function InteriorPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title={
          <>
            Entrega de <span className="text-green-primary">bateria</span> no
            interior do Amazonas
          </>
        }
        subtitle="Mandamos sua bateria de Manaus para o interior pelo barco da sua preferência."
        eventLabel="interior"
      />

      <section className="w-full bg-[linear-gradient(to_bottom_right,#234718_0%,#489433_29%,#326623_66%,#55AD3B_100%)] p-8">
        <Container>
          <h2 className="font-secondary flex flex-col items-center text-center text-2xl text-white">
            <span>Como funciona</span>
            <span className="font-semibold">o envio pelo barco</span>
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col items-center text-center font-secondary text-white"
              >
                <h3 className="mb-2 text-xl font-semibold">
                  0{i + 1} - {step.title}
                </h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="w-full py-12">
        <Container className="grid gap-8 font-secondary md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-2xl">
              Perto de{" "}
              <span className="font-semibold text-green-secondary">Manaus</span>
            </h2>
            <p className="mt-3 text-black/80">
              Também atendemos {NEARBY_CITIES.slice(0, -1).join(", ")} e{" "}
              {NEARBY_CITIES[NEARBY_CITIES.length - 1]}. Consulte o prazo pelo
              WhatsApp.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-2xl">
              Interior{" "}
              <span className="font-semibold text-green-secondary">
                por barco
              </span>
            </h2>
            <p className="mt-3 text-black/80">
              Enviamos para qualquer cidade atendida por barco a partir de
              Manaus, como {BOAT_CITIES.join(", ")}.
            </p>
          </div>
        </Container>
      </section>

      <SegmentLinks />
      <Faq items={FAQ.filter((f) => /fora de Manaus|garantia|marcas|pagamento/i.test(f.question))} />
    </main>
  );
}
