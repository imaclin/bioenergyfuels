import type { Metadata } from "next";
import { SITE } from "./site";

// Build consistent per-page metadata: canonical URL + Open Graph + Twitter,
// on top of the site-wide defaults set in app/layout.tsx.
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const ogTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

// --- JSON-LD builders ---

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: "BioEnergy Fuels LLC",
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}/opengraph-image`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneHref,
    slogan: SITE.tagline,
    knowsAbout: [
      "Catalytic pyrolysis",
      "Waste valorization",
      "Biofuels",
      "Bio-oil upgrading",
      "Red mud (bauxite residue) catalyst",
      "Sustainable aviation fuel",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      telephone: SITE.phoneHref,
      contactType: "sales",
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

export function itemListSchema(name: string, items: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it,
    })),
  };
}
