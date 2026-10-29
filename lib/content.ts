import type { StaticImageData } from "next/image";

import AgmEEfb from "@/assets/hero/images/battery-types/agm_e_efb.png";
import Automotiva from "@/assets/hero/images/battery-types/automotiva.png";
import Estacionaria from "@/assets/hero/images/battery-types/estacionaria.png";
import Nautica from "@/assets/hero/images/battery-types/nautica.png";
import Pesada from "@/assets/hero/images/battery-types/pesada.png";

export const SITE_URL = "https://bateriasamz.com.br";
export const WHATSAPP_URL = "https://wa.me/5592993780593";

export const BRANDS = [
  "Moura",
  "Heliar",
  "Pioneiro",
  "Zetta",
  "Bosch",
  "OnBat",
  "América",
];

export const NEARBY_CITIES = ["Iranduba", "Manacapuru", "Rio Preto da Eva"];

// Destinos comuns de barco saindo de Manaus. O cliente escolhe o barco.
export const BOAT_CITIES = [
  "Parintins",
  "Itacoatiara",
  "Manicoré",
  "Tefé",
  "Coari",
  "Maués",
  "Borba",
  "Humaitá",
  "Autazes",
  "Novo Airão",
  "Barcelos",
  "São Gabriel da Cachoeira",
];

export type FaqItem = { question: string; answer: string };

export const FAQ: FaqItem[] = [
  {
    question: "Vocês entregam e instalam a bateria no local?",
    answer:
      "Sim. A entrega e a instalação são grátis em toda Manaus, em até 40 minutos. Nossa equipe vai até você em casa, no trabalho ou onde o carro estiver parado.",
  },
  {
    question: "A entrega funciona à noite, aos sábados e domingos?",
    answer:
      "Sim. Atendemos também à noite, aos sábados e aos domingos. É só chamar no WhatsApp (92) 99378-0593.",
  },
  {
    question: "Vocês atendem fora de Manaus?",
    answer:
      "Sim. Atendemos Iranduba, Manacapuru e Rio Preto da Eva. Para as demais cidades do interior do Amazonas, enviamos a bateria pelo barco da sua preferência.",
  },
  {
    question: "Qual é a garantia das baterias?",
    answer:
      "Todas as baterias têm garantia de fábrica, que varia conforme a marca e o modelo. Nas baterias automotivas Moura e Heliar, o prazo costuma ser de 18 a 24 meses. O prazo exato vem no certificado de garantia entregue com a bateria.",
  },
  {
    question: "Preciso entregar a bateria usada?",
    answer:
      "Nossos preços já têm desconto pela devolução da bateria usada (sucata), que recolhemos na hora da troca e encaminhamos para reciclagem, conforme a Política Nacional de Resíduos Sólidos (Lei Federal nº 12.305/2010).",
  },
  {
    question: "Vocês testam a bateria e o alternador?",
    answer:
      "Sim. Fazemos teste de bateria e de alternador grátis, para confirmar se o problema é mesmo a bateria antes da troca.",
  },
  {
    question: "Qual bateria serve no Onix, no HB20 e na Strada?",
    answer:
      "Temos bateria para Onix, HB20, Strada e para todas as marcas de carro. A amperagem certa muda conforme o ano e o motor, então mande o modelo e o ano do veículo no WhatsApp que indicamos a bateria ideal e o preço.",
  },
  {
    question: "Quais marcas de bateria vocês vendem?",
    answer:
      "Trabalhamos com Moura, Heliar, Pioneiro, Zetta, Bosch, OnBat e América, incluindo as linhas EFB e AGM para carros com sistema start-stop.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Cartão de crédito em até 10x sem juros (Visa, Mastercard, Elo, Hipercard e American Express) e Crediário Bemol.",
  },
  {
    question: "Vocês têm bateria para carro com start-stop?",
    answer:
      "Sim. Temos baterias EFB e AGM, próprias para veículos com sistema start-stop, que exigem uma bateria mais resistente a ciclos intensos de carga.",
  },
];

export type Segment = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  paragraphs: string[];
  img: StaticImageData;
  imgAlt: string;
};

export const SEGMENTS: Segment[] = [
  {
    slug: "carro",
    name: "Carro",
    title: "Bateria de Carro em Manaus com Entrega e Instalação Grátis",
    description:
      "Bateria de carro Moura, Heliar, Pioneiro e mais em Manaus. Entrega e instalação grátis em até 40 minutos, inclusive à noite e no fim de semana. Até 10x sem juros.",
    heading: "Bateria de carro em Manaus",
    intro:
      "Carro sem partida? Levamos a bateria até você e instalamos na hora, de graça, em até 40 minutos em qualquer lugar de Manaus.",
    paragraphs: [
      "Atendemos todas as marcas de carro: Chevrolet, Fiat, Volkswagen, Ford, Toyota, Honda, Hyundai, Renault, Nissan, Jeep, Peugeot, Kia, BYD e outras. Para saber a bateria certa, basta mandar o modelo e o ano do veículo no WhatsApp.",
      "Antes da troca, fazemos o teste grátis da bateria e do alternador, para confirmar a causa do problema. O preço já considera a devolução da bateria usada, que encaminhamos para reciclagem.",
    ],
    img: Automotiva,
    imgAlt: "Bateria automotiva para carro",
  },
  {
    slug: "moto",
    name: "Moto",
    title: "Bateria de Moto em Manaus com Entrega e Instalação Grátis",
    description:
      "Bateria de moto em Manaus para Honda, Yamaha, Suzuki, Kawasaki, Harley-Davidson, Shineray e mais. Entrega e instalação grátis, inclusive à noite e no fim de semana.",
    heading: "Bateria de moto em Manaus",
    intro:
      "Moto sem partida? Entregamos e instalamos a bateria nova sem custo de entrega, em qualquer lugar de Manaus.",
    paragraphs: [
      "Temos bateria para motos Honda, Yamaha, Suzuki, Kawasaki, Harley-Davidson, Ducati, Triumph, Royal Enfield e Shineray, das motos de entrega às de alta cilindrada.",
      "Mande o modelo e o ano da moto no WhatsApp que indicamos a bateria certa. Também testamos a bateria e o sistema de carga antes da troca, sem custo.",
    ],
    img: Automotiva,
    imgAlt: "Bateria para moto",
  },
  {
    slug: "caminhao",
    name: "Caminhão",
    title: "Bateria para Caminhão em Manaus | Entrega e Instalação",
    description:
      "Baterias pesadas para caminhões, ônibus e máquinas em Manaus. Moura, Heliar e mais, com entrega e instalação. Até 10x sem juros ou Crediário Bemol.",
    heading: "Bateria para caminhão em Manaus",
    intro:
      "Baterias de alta capacidade para caminhões, ônibus, vans e máquinas, com entrega e instalação onde o veículo estiver.",
    paragraphs: [
      "Frota parada é prejuízo. Atendemos caminhões leves e pesados, incluindo também à noite e no fim de semana, para colocar o veículo de volta na estrada o quanto antes.",
      "Informe o modelo do veículo ou a bateria atual no WhatsApp que conferimos a amperagem e a disponibilidade.",
    ],
    img: Pesada,
    imgAlt: "Bateria para caminhão",
  },
  {
    slug: "nautica",
    name: "Náutica",
    title: "Bateria Náutica em Manaus para Lancha, Barco e Jet Ski",
    description:
      "Bateria náutica em Manaus para lanchas, barcos, voadeiras e jet skis. Entrega em Manaus e envio pelo barco para o interior do Amazonas.",
    heading: "Bateria náutica em Manaus",
    intro:
      "Baterias para lanchas, barcos, voadeiras e jet skis, feitas para aguentar a umidade e as descargas profundas da navegação.",
    paragraphs: [
      "Entregamos em Manaus, inclusive em marinas e portos, e enviamos para o interior do Amazonas pelo barco da sua preferência.",
      "Diga o tipo de embarcação e o uso (partida do motor ou equipamentos a bordo) no WhatsApp que indicamos a bateria certa.",
    ],
    img: Nautica,
    imgAlt: "Bateria náutica para lancha e jet ski",
  },
  {
    slug: "start-stop",
    name: "Start-Stop (EFB e AGM)",
    title: "Bateria Start-Stop EFB e AGM em Manaus",
    description:
      "Baterias EFB e AGM para carros com sistema start-stop em Manaus. Moura, Heliar e mais, com entrega e instalação grátis em até 40 minutos.",
    heading: "Bateria start-stop EFB e AGM em Manaus",
    intro:
      "Carros com sistema start-stop desligam e religam o motor várias vezes no trânsito e precisam de bateria EFB ou AGM.",
    paragraphs: [
      "As baterias EFB e AGM aguentam muito mais ciclos de carga e descarga do que uma bateria comum. Colocar uma bateria convencional num carro start-stop faz ela durar bem menos e pode desativar o sistema.",
      "Levamos a bateria certa para o seu modelo e instalamos de graça em até 40 minutos em Manaus.",
    ],
    img: AgmEEfb,
    imgAlt: "Baterias EFB e AGM para carros start-stop",
  },
  {
    slug: "nobreak-e-solar",
    name: "Nobreak, Solar e Estacionária",
    title: "Bateria Estacionária, Solar e para Nobreak em Manaus",
    description:
      "Baterias estacionárias para nobreak, energia solar, alarmes e telecom em Manaus. Entrega em Manaus e envio para o interior do Amazonas.",
    heading: "Bateria estacionária, solar e para nobreak em Manaus",
    intro:
      "Baterias estacionárias para nobreaks, sistemas de energia solar, alarmes, portões e equipamentos de telecom.",
    paragraphs: [
      "As baterias estacionárias são feitas para descarregar e recarregar todos os dias, por isso duram mais nesse tipo de uso do que uma bateria automotiva.",
      "Mande a potência do nobreak ou do sistema solar e a quantidade de baterias no WhatsApp que indicamos o modelo certo. Também enviamos para o interior do Amazonas pelo barco da sua preferência.",
    ],
    img: Estacionaria,
    imgAlt: "Bateria estacionária para nobreak e energia solar",
  },
];
