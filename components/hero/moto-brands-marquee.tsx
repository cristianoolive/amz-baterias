import Image from "next/image";

import Ducati from "@/assets/hero/images/moto-brands/Ducati_red_logo.png";
import Harley from "@/assets/hero/images/moto-brands/harley.png";
import Honda from "@/assets/hero/images/moto-brands/honda.png";
import Kawasaki from "@/assets/hero/images/moto-brands/kawasaki.png";
import RoyalEnfield from "@/assets/hero/images/moto-brands/royal-enfield.png";
import Shineray from "@/assets/hero/images/moto-brands/shineray.png";
import Suzuki from "@/assets/hero/images/moto-brands/suzuki.png";
import Triumph from "@/assets/hero/images/moto-brands/trumph.png";
import Yamaha from "@/assets/hero/images/moto-brands/yamaha.png";

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
              loading="eager"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
