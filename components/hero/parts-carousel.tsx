import { Carousel } from "../ui/carousel";

import { Container } from "@/components/ui/container";

import AlternadorGol from "@/assets/hero/images/parts-carrousel/alternador-gol.jpg";
import AlternadorUno from "@/assets/hero/images/parts-carrousel/alternador-uno-palio.jpg";
import MotorArranque from "@/assets/hero/images/parts-carrousel/motor-de-arranque.jpg";
import ReguladorVoltagem from "@/assets/hero/images/parts-carrousel/regulador-de-voltagem.jpg";
import BobinaIgnicaoDelphi from "@/assets/hero/images/parts-carrousel/bobina-de-ignicao-delphi.jpg";
import TensorDoAlternador from "@/assets/hero/images/parts-carrousel/tensor-do-alternador.jpeg";

export function PartsCarousel() {
  return (
    <section className="w-full py-16">
      <Container className="relative z-10  h-full w-full flex-col">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-secondary">
          Peças para{" "}
          <span className="text-green-secondary font-semibold">venda</span>
        </h2>
        <div className="mt-10">
          <Carousel
            images={[
              {
                src: AlternadorGol,
                alt: "Alternador Gol",
                description: "Alternador para Gol",
              },
              {
                src: AlternadorUno,
                alt: "Alternador Uno/Palio",
                description: "Alternador para Uno e Palio",
              },
              {
                src: BobinaIgnicaoDelphi,
                alt: "Bobina de Ignição Delphi",
                description: "Bobina de Ignição Delphi",
              },
              {
                src: MotorArranque,
                alt: "Motor de Arranque",
                description: "Motor de Arranque",
              },
              {
                src: ReguladorVoltagem,
                alt: "Regulador de Voltagem",
                description: "Regulador de Voltagem",
              },
              {
                src: TensorDoAlternador,
                alt: "Tensor do Alternador",
                description: "Tensor do Alternador Corolla Etios",
              },
            ]}
            interval={2000}
            itemSpacingClassName="px-4 md:px-8 "
            imageAreaClassName="h-full"
          />
        </div>
      </Container>
    </section>
  );
}


