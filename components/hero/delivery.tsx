import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/ui/container";

import Delivery1 from "@/assets/hero/images/delivery-steps/delivery1.jpg";
import Delivery2 from "@/assets/hero/images/delivery-steps/delivery2.png";
import Delivery3 from "@/assets/hero/images/delivery-steps/delivery3.png";

interface DeliverySteps {
  step: number;
  title: string;
  description: string;
  img: StaticImageData;
}

export function Delivery() {
  const steps: DeliverySteps[] = [
    {
      step: 1,
      title: 'Peça sua bateria',
      description: 'Faça seu pedido pelo Telefone ou WhatsApp e escolha a Bateria certa para seu carro',
      img: Delivery1
    },
    {
      step: 2,
      title: 'Receba em até 40 minutos',
      description: 'Nossa Equipe irá até você em qualquer lugar de Manaus e realizará a instalação da sua bateria em até 40 minutos.',
      img: Delivery2
    },
    {
      step: 3,
      title: 'Entrega e instalação Grátis',
      description: 'Além disso, realizamos testes para garantir que tudo esteja funcionando perfeitamente, sem custo adicional!',
      img: Delivery3
    }
  ];

  return (
    <section id="entrega" className="w-full p-8 bg-[linear-gradient(to_bottom_right,#234718_0%,#489433_29%,#326623_66%,#55AD3B_100%)]">
      <Container>

        <h2 className="font-secondary flex flex-col items-center text-center text-2xl text-white">
          <p>Como funciona</p>
          <p className="font-semibold">nossa Entrega</p>
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.step}>
              <DeliveryStepCard deliveryStep={step}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export function DeliveryStepCard({ deliveryStep }: { deliveryStep: DeliverySteps }) {
  return (
    <article className="flex h-full flex-col items-center text-white font-secondary">
      <h3 className="text-xl font-semibold mb-2">0{deliveryStep.step} - {deliveryStep.title}</h3>
      <Image src={deliveryStep.img} alt={deliveryStep.title} className="aspect-square rounded-2xl object-cover border-2 border-green-primary" />

      <p className="text-center mt-4">{deliveryStep.description}</p>
    </article>
  );
}