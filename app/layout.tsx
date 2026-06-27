import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { RevealInit } from "@/components/reveal-init";

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "BioEnergy Fuels | Turning Waste Into Wealth",
    template: "%s | BioEnergy Fuels",
  },
  description:
    "BioEnergy Fuels converts waste — used oil, crude, tires, and biomass — into clean, high-value liquid fuels with a patented catalytic pyrolysis platform.",
  openGraph: {
    title: "BioEnergy Fuels | Turning Waste Into Wealth",
    description:
      "Patented catalytic pyrolysis that turns waste into clean, high-value liquid fuels.",
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <RevealInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
