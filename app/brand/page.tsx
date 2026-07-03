import type { Metadata } from "next";
import { BrandContent } from "@/components/brand-content";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "The BioEnergy Fuels brand system: logo, color, typography, imagery, and voice.",
  robots: { index: false, follow: false },
};

export default function BrandPage() {
  return <BrandContent />;
}
