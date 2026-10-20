import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url);

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description: site.description,
  openGraph: { title, description: site.description, type: "website", locale: "pt_BR", siteName: site.name },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.word>span,.fade-in{animation:none!important}.rt .w>span{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
