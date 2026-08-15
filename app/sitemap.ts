import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sigey-portfolio.vercel.app",
      lastModified: new Date(),
    },
  ];
}