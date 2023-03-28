import React from "react";
import { PageHeader } from "@/components/PageHeader";
import "@/styles/globals.css";

type PageMainLayout = { children: React.ReactNode };

export const metadata = {
  title: "TracTruc",
  description: "Une application pour tracker des trucs",
  viewport: "width=device-width, initial-scale=1",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: PageMainLayout) {
  return (
    <html lang="fr">
      <body>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
