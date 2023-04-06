import React from "react";
import { RecordForm } from "@/app/recordNew/components/RecordForm";

export const metadata = {
  title: "TracTruc - Ajouter une action",
};

export default function recordNew() {
  return (
    <div>
      <div>
        <h2>Ajouter une action à tracer</h2>
      </div>
      <div>
        <RecordForm />
      </div>
    </div>
  );
}
