import Link from "next/link";

import { Container } from "@/components/ui/container";

import { CAR_BRANDS, carBrandPath } from "@/lib/car-copy";

export function CarBrandLinks({ current }: { current?: string }) {
  return (
    <section className="w-full py-10">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-secondary">
          Bateria por{" "}
          <span className="font-semibold text-green-secondary opacity-75">
            marca de carro
          </span>
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {CAR_BRANDS.filter((b) => b.slug !== current).map((b) => (
            <li key={b.slug}>
              <Link
                href={carBrandPath(b)}
                className="block rounded-lg bg-white px-4 py-2 font-secondary font-semibold shadow-sm ring-1 ring-black/10 transition-colors hover:bg-green-secondary hover:text-white"
              >
                {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
