import Image from "next/image";

import Audi from "@/assets/hero/images/car-brands/audi.webp";
import Bmw from "@/assets/hero/images/car-brands/bmw.webp";
import Byd from "@/assets/hero/images/car-brands/byd.webp";
import Chevrolet from "@/assets/hero/images/car-brands/chevrolet.webp";
import Fiat from "@/assets/hero/images/car-brands/fiat.webp";
import Ford from "@/assets/hero/images/car-brands/ford.webp";
import Honda from "@/assets/hero/images/car-brands/honda.webp";
import Hyundai from "@/assets/hero/images/car-brands/hyundai.webp";
import Jaguar from "@/assets/hero/images/car-brands/jaguar.webp";
import Jeep from "@/assets/hero/images/car-brands/jeep.webp";
import Kia from "@/assets/hero/images/car-brands/kia.webp";
import LandRover from "@/assets/hero/images/car-brands/landrover.webp";
import Mercedes from "@/assets/hero/images/car-brands/mercedes.webp";
import Nissan from "@/assets/hero/images/car-brands/nissan.webp";
import Peugeot from "@/assets/hero/images/car-brands/peugeot.webp";
import Renault from "@/assets/hero/images/car-brands/renault.webp";
import Toyota from "@/assets/hero/images/car-brands/toyota.webp";
import Volkswagen from "@/assets/hero/images/car-brands/volkswagen.webp";

const CAR_BRANDS = [
  { src: Chevrolet, alt: "Chevrolet" },
  { src: Fiat, alt: "Fiat" },
  { src: Volkswagen, alt: "Volkswagen" },
  { src: Ford, alt: "Ford" },
  { src: Toyota, alt: "Toyota" },
  { src: Honda, alt: "Honda" },
  { src: Hyundai, alt: "Hyundai" },
  { src: Renault, alt: "Renault" },
  { src: Nissan, alt: "Nissan" },
  { src: Jeep, alt: "Jeep" },
  { src: Peugeot, alt: "Peugeot" },
  { src: Kia, alt: "Kia" },
  { src: Audi, alt: "Audi" },
  { src: Mercedes, alt: "Mercedes-Benz" },
  { src: Bmw, alt: "BMW" },
  { src: Byd, alt: "BYD" },
  { src: Jaguar, alt: "Jaguar" },
  { src: LandRover, alt: "Land Rover" },
];

export function BrandsMarquee() {
  const items = [...CAR_BRANDS, ...CAR_BRANDS];

  return (
    <div className="z-20 mt-6 w-full overflow-hidden rounded-2xl border border-green-primary/30 py-3">
      <p className="mb-2 text-center font-secondary text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
        Atendemos <span className="text-green-primary">todas as marcas</span>{" "}
        de carro
      </p>
      <div className="flex w-max animate-marquee items-center gap-10 pl-10">
        {items.map((brand, index) => (
          <div key={`${brand.alt}-${index}`} className="shrink-0">
            <Image
              src={brand.src}
              alt={`Logo ${brand.alt}`}
              className="h-9 w-auto object-contain sm:h-11"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
