import type { MetadataRoute } from "next";

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
    {
      url: `${SITE_URL}/entrega-interior-amazonas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
