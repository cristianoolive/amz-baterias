import Image from "next/image";

import Ducati from "@/assets/hero/images/moto-brands/Ducati_red_logo.webp";
import Harley from "@/assets/hero/images/moto-brands/harley.webp";
import Honda from "@/assets/hero/images/moto-brands/honda.webp";
import Kawasaki from "@/assets/hero/images/moto-brands/kawasaki.webp";
import RoyalEnfield from "@/assets/hero/images/moto-brands/royal-enfield.webp";
import Shineray from "@/assets/hero/images/moto-brands/shineray.webp";
import Suzuki from "@/assets/hero/images/moto-brands/suzuki.webp";
import Triumph from "@/assets/hero/images/moto-brands/trumph.webp";
import Yamaha from "@/assets/hero/images/moto-brands/yamaha.webp";

const MOTO_BRANDS = [
  { src: Honda, alt: "Honda" },
  { src: Yamaha, alt: "Yamaha" },
  { src: Suzuki, alt: "Suzuki" },
  { src: Kawasaki, alt: "Kawasaki" },
  { src: Harley, alt: "Harley-Davidson" },
  { src: Triumph, alt: "Triumph" },
  { src: Ducati, alt: "Ducati" },
  { src: RoyalEnfield, alt: "Royal Enfield" },
  { src: Shineray, alt: "Shineray" },
];

export function MotoBrandsMarquee() {
  const items = [...MOTO_BRANDS, ...MOTO_BRANDS];

  return (
    <div className="z-20 mt-3 w-full overflow-hidden rounded-2xl border border-green-primary/30 py-3">
      <p className="mb-2 text-center font-secondary text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
        Atendemos <span className="text-green-primary">todas as marcas</span>{" "}
        de moto
      </p>
      <div className="flex w-max animate-marquee-reverse items-center gap-10 pl-10">
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
