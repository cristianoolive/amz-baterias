import Link from "next/link";

import { Container } from "@/components/ui/container";

import { SEGMENTS } from "@/lib/content";

export function SegmentLinks({ current }: { current?: string }) {
  return (
    <section className="w-full bg-[#EDEFEB] py-10">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-secondary">
          Outros{" "}
          <span className="font-semibold text-green-secondary opacity-75">
            tipos de bateria
          </span>
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {SEGMENTS.filter((s) => s.slug !== current).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/baterias/${s.slug}`}
                className="block rounded-lg bg-white px-4 py-2 font-secondary font-semibold shadow-sm ring-1 ring-black/5 transition-colors hover:bg-green-secondary hover:text-white"
              >
                Bateria {s.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/entrega-interior-amazonas"
              className="block rounded-lg bg-white px-4 py-2 font-secondary font-semibold shadow-sm ring-1 ring-black/5 transition-colors hover:bg-green-secondary hover:text-white"
            >
              Entrega no interior do Amazonas
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
