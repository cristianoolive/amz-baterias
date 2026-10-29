import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";

import Store from "@/assets/hero/images/introduction/home.jpg";

type PageHeroProps = {
  title: ReactNode;
  subtitle: string;
  eventLabel: string;
};

// Mesmo topo da home: foto da loja escurecida com título em destaque.
export function PageHero({ title, subtitle, eventLabel }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-52 pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${Store.src})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B0F09]/80" />

      <Container className="relative z-10 flex flex-col items-start">
        <h1 className="max-w-3xl font-secondary text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-secondary text-xl text-white/90 sm:text-2xl">
          {subtitle}
        </p>
        <WhatsappCta eventLabel={eventLabel} className="mt-8" />
      </Container>
    </section>
  );
}
