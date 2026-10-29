import type { MetadataRoute } from "next";

import { CAR_BRANDS, carBrandPath, carModelPath } from "@/lib/car-copy";
import { CAR_MODELS } from "@/lib/car-models";
import { SEGMENTS, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...SEGMENTS.map((s) => ({
      url: `${SITE_URL}/baterias/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CAR_BRANDS.map((b) => ({
      url: `${SITE_URL}${carBrandPath(b)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CAR_MODELS.map((m) => ({
      url: `${SITE_URL}${carModelPath(m)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/entrega-interior-amazonas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
