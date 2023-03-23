import Link from "next/link";
import React from "react";

type HeaderProps = { home?: boolean };
export const PageHeader = ({ home = false }: HeaderProps) => (
  <header>
    {!home && (
      <div>
        <Link href={"/"}>Back</Link>
      </div>
    )}
    <div>TracTrucs&nbsp;!</div>
  </header>
);
