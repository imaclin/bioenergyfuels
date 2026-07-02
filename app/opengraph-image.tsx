import { ImageResponse } from "next/og";
import { FLAME_PATH, FLAME_VIEWBOX } from "@/components/logo";

export const alt = "BioEnergy Fuels — Turning waste into wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0B0C",
          backgroundImage:
            "radial-gradient(900px 600px at 80% 0%, rgba(163,230,53,0.22), transparent 60%)",
          color: "#F2F4EF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
          <svg viewBox={FLAME_VIEWBOX} width="58" height="80" fill="#A3E635">
            <path d={FLAME_PATH} />
          </svg>
          <div style={{ marginLeft: 22, fontSize: 26, letterSpacing: 6, color: "#979c92" }}>
            BIOENERGY FUELS
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, fontSize: 88, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
          <span>We turn</span>
          <span style={{ color: "#A3E635" }}>waste</span>
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>into fuel.</div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#979c92", maxWidth: 760 }}>
          Patented catalytic pyrolysis. Turning waste into wealth.
        </div>
      </div>
    ),
    { ...size }
  );
}
