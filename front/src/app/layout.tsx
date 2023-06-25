import React from "react";
import { PageHeader } from "@/components/PageHeader";
import "bulma/css/bulma.min.css";
import "@/styles/globals.css";

type PageMainLayout = { children: React.ReactNode };

export const metadata = {
  title: "TracTruc",
  description: "Une application pour tracker des trucs",
  viewport: "width=device-width, initial-scale=1",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: PageMainLayout) {
  return (
    <html lang="fr">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>TracTruc</title>
    </head>
    <body>
    <div className="container">
      <PageHeader />
      {children}
    </div>
    </body>
    </html>
  );
}
