import { ImageResponse } from "next/og";

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
          <svg viewBox="0 0 70 84" width="64" height="77" fill="#A3E635">
            <path d="M31 3 C 19 25, 9 39, 22 63 C 27 72, 33 78, 33 78 C 25 60, 29 45, 38 35 C 34 23, 33 12, 31 3 Z" />
            <path d="M43 17 C 41 33, 51 39, 49 55 C 47 69, 37 79, 37 79 C 53 75, 65 59, 59 39 C 55 27, 47 21, 43 17 Z" />
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
