import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  const hasProductionUrl = Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim());

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: hasProductionUrl ? `${siteConfig.siteUrl}/sitemap.xml` : undefined,
  };
}
