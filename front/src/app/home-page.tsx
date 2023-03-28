"use client";

import Link from "next/link";

export const metadata = {
  title: "TracTruc - L'application pour tracker de trucs",
};

export default function Home() {
  return (
    <div>
      <div className={"tabs"}>
        <div>
          <Link href={"/dashboard"}>Suivi</Link>
        </div>
        <div>
          <Link href={"/calendar"}>Calendrier</Link>
        </div>
        <div>
          <Link href={"/recordList"}>Liste des suivis</Link>
        </div>
      </div>
      <main>
        <div>
          <p>Ici des objectifs avec des barres de progression</p>
        </div>
        <div>
          <Link href={"/recordNew"}>Ajouter un truc</Link>
        </div>
      </main>
    </div>
  );
}
