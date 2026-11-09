import { Carousel } from "../ui/carousel";

import { Container } from "@/components/ui/container";
import { BRANDS } from "@/lib/content";

import Heliar from "@/assets/hero/images/battery-carrousel/Heliar.webp";
import Pioneiro from "@/assets/hero/images/battery-carrousel/Pioneiro.webp";
import OnBat from "@/assets/hero/images/battery-carrousel/OnBat.webp";
import America from "@/assets/hero/images/battery-carrousel/America.webp";
import Efb from "@/assets/hero/images/battery-carrousel/EFB.webp";
import Agm from "@/assets/hero/images/battery-carrousel/AGM.webp";
import Zetta from "@/assets/hero/images/battery-carrousel/Zetta.webp";
import Bosch from "@/assets/hero/images/battery-carrousel/Bosch.webp";

export function BatteryCarousel() {
  return (
    <section className="w-full py-16">
      <Container className="relative z-10  h-full w-full flex-col">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-secondary">
          As{" "}
          <span className="text-green-secondary font-semibold">melhores</span>{" "}
          marcas de{" "}
          <span className="text-green-secondary font-semibold">baterias</span>
        </h2>
        <div>
          <Carousel
            images={[
              { src: Heliar, alt: "Bateria Heliar" },
              { src: Pioneiro, alt: "Bateria Pioneiro" },
              { src: OnBat, alt: "Bateria OnBat" },
              { src: America, alt: "Bateria América" },
              { src: Efb, alt: "Bateria EFB" },
              { src: Agm, alt: "Bateria AGM" },
              { src: Zetta, alt: "Bateria Zetta" },
              { src: Bosch, alt: "Bateria Bosch" },
            ]}
            interval={2000}
            itemSpacingClassName="px-4 md:px-8 "
            imageAreaClassName="h-20 sm:h-28 md:h-36"
          />
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center font-secondary text-black/70">
          Trabalhamos com baterias {BRANDS.slice(0, -1).join(", ")} e{" "}
          {BRANDS[BRANDS.length - 1]}, incluindo as linhas EFB e AGM para
          carros com sistema start-stop.
        </p>
      </Container>
    </section>
  );
}

