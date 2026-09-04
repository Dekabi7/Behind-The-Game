import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/content";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#100D0C",
          padding: "60px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={228} alt="" />
        <div
          style={{
            marginTop: 36,
            fontSize: 34,
            color: "#F5F0E8",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 4,
            backgroundColor: "#D9A94F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
