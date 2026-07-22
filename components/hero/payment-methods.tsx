"use client";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";

import PaymentCards from "@/assets/hero/images/payment-methods/payment-cards.png";
import PaymentBemol from "@/assets/hero/images/payment-methods/bemol.png";

import WppIcon from "@/assets/icons/whatsapp_icon.svg";
import { trackGoogleAdsConversion } from "@/lib/gtag/google-ads-tag";
import { sendGTMEvent } from "@next/third-parties/google";

export function PaymentMethods() {
  return (
    <section className="py-12 bg-white w-full h-full">
      <Container className="h-full w-full flex flex-col items-center">
        <h2 className="text-3xl text-gray-900 font-secondary text-center">
          <div>Pague sua bateria em até</div>
          <div className="font-semibold">10x sem juros</div>
        </h2>
        <div className="mt-10 flex flex-col items-center gap-12 max-w-lg">
          <Image
            src={PaymentCards}
            alt="Payment Cards"
            className="rounded-xl"
          />
          <Image
            src={PaymentBemol}
            alt="Payment Bemol"
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col items-center font-secondary mt-8 text-xl">
          <p>
            Aproveite a entrega e instalação{" "}
            <span className="bg-green-primary px-1 font-semibold">Grátis</span>
          </p>
          <div className="mt-4 relative w-full h-full flex justify-center items-center">
            <div className="absolute h-full w-1/2 md:w-1/4 top-0 animate-ping rounded-md bg-green-secondary opacity-75" />

            <Link
              href="https://wa.me/55092993780593"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex w-fit items-center justify-center rounded-xl bg-green-secondary px-6 py-2 text-2xl text-white transition-colors hover:bg-green-tertiary"
              onClick={() =>
                sendGTMEvent({
                  event: "whatsapp_click",
                  event_category: "engagement",
                  event_label: "hero_cta",
                  value: 1,
                  currency: "BRL",
                })
              }
            >
              <span>
                <Image
                  src={WppIcon}
                  alt="Ícone Whatsapp"
                  className="mr-2 h-6 w-6"
                />
              </span>
              <span className="uppercase">Pedir bateria</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
