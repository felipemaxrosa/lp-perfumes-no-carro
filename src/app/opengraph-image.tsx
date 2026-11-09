import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Perfumes no Carro — Perfumes importados 15ml · Litoral Norte de SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Asset não depende da request — lido uma vez no escopo do módulo (valores previsíveis).
const logoData = await readFile(join(process.cwd(), "public/assets/logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function OpenGraphImage() {
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
          background: "#0D0D11",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(60% 55% at 50% 36%, rgba(229,184,105,0.22), rgba(13,13,17,0) 70%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={520} height={336} style={{ objectFit: "contain" }} alt="" />
        <div
          style={{
            marginTop: 20,
            fontSize: 42,
            fontWeight: 700,
            color: "#E5B869",
            letterSpacing: 1,
          }}
        >
          Perfumes Importados 15ml
        </div>
        <div style={{ marginTop: 12, fontSize: 27, color: "#D6D6DB" }}>
          Caraguatatuba · São Sebastião · Ubatuba · Ilhabela
        </div>
        <div style={{ marginTop: 6, fontSize: 22, color: "#A1A1AA" }}>
          Litoral Norte de São Paulo
        </div>
      </div>
    ),
    { ...size },
  );
}
