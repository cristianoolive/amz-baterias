import Image from "next/image";
import { Container } from "@/components/ui/container";
import Batteries from "@/assets/hero/images/battery-start-stop/start-stop.png";

export function StartStopBatteries() {
  return (
    <section className="w-full h-full bg-[linear-gradient(to_bottom_right,#234718_0%,#489433_29%,#326623_66%,#55AD3B_100%)]">
      <Container className="py-12 text-center text-white flex flex-col items-center">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <Image
            src={Batteries}
            alt="Baterias Start-Stop"
            className="object-contain max-w-sm"
          />
          <div className="max-w-lg">
            <h2 className="text-4xl font-secondary font-semibold">
              Baterias Start-Stop
            </h2>
            <article className="font-secondary mt-16 text-xl w-full">
              As Baterias <span className="font-semibold">EFB</span> São a
              solução ideal para veículos com{" "}
              <span className="font-semibold">Tecnologia start-stop</span>. Elas
              oferecem durabilidade superior, maior capacidade de carga e
              resistência a ciclos intensos de uso, garantindo que seu carro
              tenha energia confiável a cada partida. Não fique na mão, opte
              pela eficiência e qualidade das baterias EFB e sinta a diferença
              no desempenho do seu veículo!
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
