"use client";

import Script from "next/script";

import { Container } from "../ui/container";

export function GoogleReviews() {
  return (
    <section className="w-full h-full bg-gray-100 py-12 flex justify-center">
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js" />
        <iframe
          onLoad={() => "iFrameResize(this)"}
          src="https://b190ba2cb2404ee5a665c186c36bc2e1.elf.site"
          className="border-none w-full h-200 md:h-180 "
        ></iframe>
      </Container>
    </section>
  );
}
