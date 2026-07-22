"use client";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { BrandsMarquee } from "@/components/hero/brands-marquee";
import { MotoBrandsMarquee } from "@/components/hero/moto-brands-marquee";

import Store from "@/assets/hero/images/introduction/home.jpg";
import Batteries from "@/assets/hero/images/introduction/baterias_home.png";
import Batteries2 from "@/assets/hero/images/introduction/introduction-photo-2.png";

import Elo from "@/assets/hero/images/introduction/elo.png";
import Visa from "@/assets/hero/images/introduction/visa.png";
import Hipercard from "@/assets/hero/images/introduction/hipercard.png";
import Mastercard from "@/assets/hero/images/introduction/mastercard.png";
import CrediarioBemol from "@/assets/hero/images/introduction/crediario-bemol.png";
import AmericanExpress from "@/assets/hero/images/introduction/american-express.png";

import WppIcon from "@/assets/icons/whatsapp_icon.svg";
import { sendGTMEvent } from "@next/third-parties/google";

export function Introduction() {
  const paymentMethods = [
    { src: Visa, alt: "Visa" },
    { src: Mastercard, alt: "Mastercard" },
    { src: Elo, alt: "Elo" },
    { src: Hipercard, alt: "Hipercard" },
    { src: AmericanExpress, alt: "American Express" },
    { src: CrediarioBemol, alt: "Crediário Bemol" },
  ];

  return (
    <section className="relative w-full min-h-dvh overflow-hidden pt-52 pb-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${Store.src})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B0F09]/80" />

      <Container className="relative z-10 flex h-full w-full flex-col items-center">
        <div className="w-full md:hidden">
          <div className="w-full">
            <h1 className="font-secondary text-5xl font-bold text-white sm:text-5xl lg:text-6xl">
              Precisando de <span className="text-green-primary">Bateria</span>{" "}
              para seu veículo?
            </h1>
            <h2 className="mt-5 font-secondary text-2xl text-white/90 sm:text-2xl">
              Entrega e instalação{" "}
              <span className="bg-green-secondary px-1">Grátis</span> em toda{" "}
              <span className="font-semibold text-green-secondary">Manaus</span>{" "}
              em até 40 minutos
            </h2>
            <BrandsMarquee />
            <MotoBrandsMarquee />
            <Image src={Batteries} alt="Baterias" className="mx-auto mt-6" />
          </div>

          <div className=" flex w-full flex-col items-center">
            <div className="relative w-full h-full mt-8 flex justify-center items-center">
              <div className="absolute h-full w-1/2 top-0 animate-ping rounded-md bg-green-secondary opacity-75" />

              <Link
                href="https://wa.me/55092993780593"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex w-fit items-center justify-center rounded-md bg-green-secondary px-6 py-2 text-2xl text-white transition-colors hover:bg-green-tertiary"
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
                <span className="uppercase">Pedir agora!</span>
              </Link>
            </div>
            <p className="mt-3 font-secondary text-white">
              Parcele em até{" "}
              <span className="bg-green-secondary px-0.5 font-semibold">
                10x sem juros
              </span>
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {paymentMethods.map((method) => (
                <Image
                  className="h-6 w-fit object-contain"
                  key={method.alt}
                  src={method.src}
                  alt={method.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden w-full md:flex items-center justify-between">
          <div className="w-full min-w-0">
            <h1 className="font-secondary text-5xl font-bold text-white sm:text-5xl lg:text-6xl">
              Precisando de <span className="text-green-primary">Bateria</span>{" "}
              para seu veículo?
            </h1>
            <h2 className="mt-5 font-secondary text-2xl text-white/90 sm:text-2xl">
              Entrega e instalação{" "}
              <span className="bg-green-secondary px-1">Grátis</span> em toda{" "}
              <span className="font-semibold text-green-secondary">Manaus</span>{" "}
              em até 40 minutos
            </h2>
            <BrandsMarquee />
            <MotoBrandsMarquee />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Batteries2}
              alt="Baterias"
              className="ml-10 px-12 object-contain"
            />
            <div className="flex items-center space-x-1">
              {paymentMethods.map((method) => (
                <Image
                  className="h-5 w-fit object-contain"
                  key={method.alt}
                  src={method.src}
                  alt={method.alt}
                />
              ))}
            </div>
            <div className="relative mt-5 justify-center items-center flex">
              <div className="absolute h-full w-3/4 top-0 animate-ping rounded-md bg-green-secondary opacity-75" />
              <Link
                href="https://wa.me/55092993780593"
                target="_blank"
                rel="noopener noreferrer"
                className=" relative z-10 flex w-fit items-center justify-center rounded-md bg-green-secondary px-6 py-2 text-2xl text-white transition-colors hover:bg-green-tertiary"
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
                <span className="uppercase">Pedir agora!</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
