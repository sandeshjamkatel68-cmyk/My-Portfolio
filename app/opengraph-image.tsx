import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sandesh Jamkatel — Developer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#f4f1eb",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(14,14,14,0.08) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 1 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#0e0e0e" }}>
            SJ<span style={{ color: "#5c7a5f" }}>.</span>
          </div>
          <div style={{ fontSize: 12, color: "#918b7c", border: "1px solid rgba(14,14,14,0.12)", borderRadius: 999, padding: "4px 12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            sandeshjamkatel.me
          </div>
        </div>
        <div style={{ zIndex: 1 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#0e0e0e", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Sandesh<br />
            <span style={{ color: "#5c7a5f" }}>Jamkatel</span>
            <span style={{ color: "#c9b99a" }}>.</span>
          </div>
          <div style={{ fontSize: 22, color: "rgba(14,14,14,0.55)", maxWidth: 560, lineHeight: 1.5 }}>
            BCA student and developer from Nepal building practical web products with care and purpose.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px", zIndex: 1 }}>
          {[
            { label: "Projects", value: "4+" },
            { label: "Stack", value: "Next.js · TypeScript · Three.js" },
            { label: "Status", value: "Open to work" },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ fontSize: 11, color: "#918b7c", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              <div style={{ fontSize: 15, color: "#0e0e0e", fontWeight: 600 }}>{value}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 6, backgroundColor: "#5c7a5f" }} />
      </div>
    ),
    { ...size }
  );
}
