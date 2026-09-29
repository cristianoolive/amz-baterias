"use client";

import Link from "next/link";

import { sendGTMEvent } from "@next/third-parties/google";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export function CallFloatButton() {
  const visible = true;

  return (
    <Link
      href="tel:+5592993780593"
      aria-label="Ligar para a AMZ Autopeças"
      onClick={() =>
        sendGTMEvent({
          event: "phone_click",
          event_category: "engagement",
          event_label: "floating_button",
          value: 1,
          currency: "BRL",
        })
      }
      className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        {visible && (
          <>
            <span className="absolute inset-0 rounded-full bg-blue-500/70 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-blue-500/50 animate-ping [animation-delay:0.6s]" />
          </>
        )}
        <span
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-colors hover:bg-blue-700 ${
            visible ? "animate-wpp-pulse" : ""
          }`}
        >
          <PhoneIcon />
        </span>
      </span>
    </Link>
  );
}
