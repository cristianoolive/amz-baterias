import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Prévia do link no WhatsApp/redes: a mesma foto da loja usada no site, sem texto.
export const alt = "Fachada da AMZ Peças & Baterias na Av. Dublin, Planalto, Manaus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "assets/hero/images/introduction/home.jpg")
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size
  );
}
