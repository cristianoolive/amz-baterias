"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

import { WHATSAPP_URL } from "@/lib/content";

type WhatsappCtaProps = {
  label?: string;
  eventLabel: string;
  className?: string;
};

export function WhatsappCta({
  label = "Pedir agora",
  eventLabel,
  className = "",
}: WhatsappCtaProps) {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit rounded-lg bg-green-secondary px-6 py-3 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-tertiary ${className}`}
      onClick={() =>
        sendGTMEvent({
          event: "whatsapp_click",
          event_category: "engagement",
          event_label: eventLabel,
          value: 1,
          currency: "BRL",
        })
      }
    >
      {label}
    </Link>
  );
}
