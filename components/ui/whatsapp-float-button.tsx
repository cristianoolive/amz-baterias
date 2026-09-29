"use client";

import Link from "next/link";
import Image from "next/image";

import WppIcon from "@/assets/icons/whatsapp_icon.svg";
import { sendGTMEvent } from "@next/third-parties/google";

export function WhatsappFloatButton() {
  const visible = true;

  return (
    <Link
      href="https://wa.me/55092993780593"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no Whatsapp"
      onClick={() =>
        sendGTMEvent({
          event: "whatsapp_click",
          event_category: "engagement",
          event_label: "floating_button",
          value: 1,
          currency: "BRL",
        })
      }
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        {visible && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-secondary/70 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-green-secondary/50 animate-ping [animation-delay:0.6s]" />
          </>
        )}
        <span
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-green-secondary shadow-lg transition-colors hover:bg-green-tertiary ${
            visible ? "animate-wpp-pulse" : ""
          }`}
        >
          <Image
            src={WppIcon}
            alt="Ícone Whatsapp"
            className="h-8 w-8 animate-wpp-shake"
          />
        </span>
      </span>
    </Link>
  );
}
