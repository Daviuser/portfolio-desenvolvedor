import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | Soluções digitais para empresas`;
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
          justifyContent: "space-between",
          background: "#021731",
          color: "#f5f2eb",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#daa735", letterSpacing: 3 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.04, maxWidth: 980, fontFamily: "serif" }}>
          {site.headline}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>Sites, sistemas e automação para empresas</div>
      </div>
    ),
    size,
  );
}
