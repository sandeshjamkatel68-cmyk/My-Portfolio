import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sandeshjamkatel.me";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/uses`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/now`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/building-shrinkbox`, lastModified: new Date("2024-07-12"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/why-personal-branding-matters-as-a-student`, lastModified: new Date("2024-08-03"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/nextjs-things-i-learned`, lastModified: new Date("2024-08-18"), changeFrequency: "yearly", priority: 0.6 },
  ];
}
