import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://centralbalkan.com";

  // Define your static routes here
  const routes = ["", "/about", "/contact", "/items"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [
    ...routes,
    // Example of adding dynamic routes:
    // {
    //   url: `${baseUrl}/dynamic-page`,
    //   lastModified: new Date(),
    // },
  ];
}
