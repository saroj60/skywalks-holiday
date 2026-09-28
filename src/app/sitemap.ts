import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skywalkholidays.com";

  const routes = [
    "",
    "/flights",
    "/hotels",
    "/holiday-packages",
    "/visa-services",
    "/bus-tickets",
    "/about",
    "/contact",
    "/gallery",
    "/vlogs",
    "/services/insurance",
    "/services/custom",
    "/packages/dubai-6d",
    "/packages/thailand-5d",
    "/packages/bali-7d",
    "/packages/europe-11d",
    "/packages/singapore-6d",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/packages") ? 0.8 : 0.9,
  }));
}
