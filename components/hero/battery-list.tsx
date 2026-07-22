"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

import AgmEEfb from "@/assets/hero/images/battery-types/agm_e_efb.png";
import Automotiva from "@/assets/hero/images/battery-types/automotiva.png";
import Estacionaria from "@/assets/hero/images/battery-types/estacionaria.png";
import Nautica from "@/assets/hero/images/battery-types/nautica.png";
import Nobreak from "@/assets/hero/images/battery-types/nobreak.png";
import Pesada from "@/assets/hero/images/battery-types/pesada.png";
import { sendGTMEvent } from "@next/third-parties/google";

export interface BatteryBanner {
  alt: string;
  desc: string;
  title: string;
  img: StaticImageData;
}

const BATTERIES: BatteryBanner[] = [
  {
    desc: "Baterias de Carro e Moto",
    title: "Baterias Automotivas",
    alt: "Bateria Automotiva",
    img: Automotiva,
  },
  {
    desc: "Baterias para Caminhões",
    title: "Baterias para Caminhões",
    alt: "Bateria para Caminhão",
    img: Pesada,
  },
  {
    desc: "Baterias para Lanchas e Jet Skis",
    title: "Baterias Náuticas",
    alt: "Bateria Náutica",
    img: Nautica,
  },
  {
    desc: "Baterias Start Stop AGM e EFB",
    title: "Baterias AGM e EFB",
    alt: "Bateria AGM e EFB",
    img: AgmEEfb,
  },
  {
    desc: "Baterias para Nobreaks",
    title: "Baterias para Nobreaks",
    alt: "Bateria para Nobreak",
    img: Nobreak,
  },
  {
    desc: "Baterias Solar e Estacionárias",
    title: "Baterias Estacionárias",
    alt: "Bateria Estacionária",
    img: Estacionaria,
  },
];

export function BatteryList() {
  return (
    <section id="baterias" className="w-full bg-[#EDEFEB] py-6 sm:py-8">
      <Container>
        <div className="rounded-b-2xl p-5 sm:p-8">
          <h2 className="text-center text-2xl font-secondary sm:text-3xl">
            A{" "}
            <span className="font-semibold text-green-secondary opacity-75">
              Bateria ideal
            </span>{" "}
            para cada{" "}
            <span className="font-semibold text-green-secondary opacity-75">
              necessidade
            </span>
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BATTERIES.map((battery) => (
              <li key={battery.title} className="w-full">
                <BatteryCard battery={battery} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function BatteryCard({ battery }: { battery: BatteryBanner }) {
  return (
    <div className="w-full h-full rounded-3xl bg-green-secondary group">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 group-hover:-translate-y-4 transition-transform group">
        <div className="relative w-full">
          <Image
            src={battery.img}
            alt={battery.alt}
            className="h-auto w-full object-cover group-hover:scale-110 z-0 transition-transform duration-300"
            sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col items-center px-4 pb-6">
          <p className="text-center text-xl font-secondary font-semibold sm:text-2xl z-10">
            {battery.desc}
          </p>

          <Link
            target="_blank"
            href="https://wa.me/55092993780593"
            className="mt-5 w-fit rounded-lg bg-green-secondary px-4 py-2 z-10 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-tertiary"
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
            Pedir agora
          </Link>
        </div>
      </article>
    </div>
  );
}
