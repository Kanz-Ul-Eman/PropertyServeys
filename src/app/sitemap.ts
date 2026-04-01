import type { MetadataRoute } from "next";

const siteUrl = "https://www.coventrypropertysurveys.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/domestic-epc",
    "/copy-of-domestic-epc",
    "/general-6",
    "/floor-plans",
    "/asbestos-surveys",
    "/brukl-reports",
    "/legionnaires-risk-assessments",
    "/fire-risk-assessments",
    "/services-4",
    "/contact-us",
    "/privacy-policy",
    "/copy-of-privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
