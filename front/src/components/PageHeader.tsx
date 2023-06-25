"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const PageHeader = () => {
  const pathname = usePathname();

  return (
    <header>
      {"/" !== pathname && (
        <div>
          <Link href={"/"}>Back</Link>
        </div>
      )}
      <div  className="has-text-centered">
        TracTrucs&nbsp;!
      </div>
    </header>
  );
};
