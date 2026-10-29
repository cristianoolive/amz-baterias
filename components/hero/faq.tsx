import { Container } from "@/components/ui/container";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";

import { FAQ, type FaqItem } from "@/lib/content";

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function Faq({ items = FAQ }: { items?: FaqItem[] }) {
  return (
    <section id="duvidas" className="w-full bg-[#EDEFEB] py-12">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-secondary sm:text-3xl">
          Perguntas{" "}
          <span className="font-semibold text-green-secondary opacity-75">
            frequentes
          </span>
        </h2>

        <div className="mt-8 flex w-full max-w-3xl flex-col gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 open:ring-green-secondary"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-secondary text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <h3>{item.question}</h3>
                <span
                  aria-hidden
                  className="text-2xl leading-none text-green-secondary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 font-secondary text-black/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center font-secondary text-lg">
          Ficou com alguma dúvida? Fale com a gente.
        </p>
        <WhatsappCta eventLabel="faq" className="mt-4" />
      </Container>
    </section>
  );
}
