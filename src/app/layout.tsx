import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

const title = `${site.name} | Soluções digitais para empresas`;

export const metadata: Metadata = {
  ...(baseUrl ? { metadataBase: new URL(baseUrl) } : {}),
  title,
  description: site.description,
  applicationName: site.name,
  keywords: ["VIVUS BUSINESS", "criação de sites", "landing pages", "sistemas personalizados", "automação empresarial", "soluções digitais"],
  openGraph: { title, description: site.description, type: "website", locale: "pt_BR", siteName: site.name },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.rt .w>span{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
