import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | ${site.role}`;
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
          background: "#0e0f10",
          color: "#f1f2f3",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#c6f432" }}>{site.role}</div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
          {site.headline}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#a3a8af" }}>{site.name}</div>
      </div>
    ),
    size,
  );
}
