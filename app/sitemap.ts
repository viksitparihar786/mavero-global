import { MetadataRoute } from "next";

const BASE_URL = "https://www.maveroglobal.com";

const insightsSlugs = [
  "how-global-buyers-source-products-from-india",
  "why-many-international-buyers-prefer-fob-terms-when-buying-from-india",
  "why-moradabad-is-indias-leading-export-hub-for-home-decor-garden-furnishings-lifestyle-and-fireside-products",
  "why-many-international-buyers-choose-sourcing-partners-in-india-instead-of-working-directly-with-factories",
  "how-mavero-global-helps-overseas-buyers-source-from-india",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const insightsRoutes: MetadataRoute.Sitemap = insightsSlugs.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightsRoutes];
}
