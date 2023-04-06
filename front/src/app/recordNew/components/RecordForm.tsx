"use client";

import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum RecordRecurring {
  daily = " daily",
  weekly = "weekly",
  monthly = "monthly",
  yearly = "yearly",
}

interface RecordFormInput {
  recordName: string;
  recordMin: bigint;
  recordMax: bigint;
  recordFrequency: RecordRecurring;
}

type Inputs = {
  recordName: string;
  recordMin: bigint;
  recordMax: bigint;
  recordFrequency: RecordRecurring;
};

export const RecordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="recordName">{"Nom de l'action"}</label>
      <input
        id="recordName"
        type="text"
        required
        {...register("recordName", { required: false })}
      />

      <label htmlFor={"record-objective"}>
        {"Type d'objectif"}
        <input
          id={"record-objective-daily"}
          type="radio"
          {...register("recordFrequency")}
          value={RecordRecurring.daily}
        />
        <label htmlFor={"record-objective-daily"}>Objectif quotidien</label>
        <input
          id={"record-objective-weekly"}
          type="radio"
          {...register("recordFrequency")}
          value={RecordRecurring.weekly}
        />
        <label htmlFor={"record-objective-weekly"}>Objectif hebdomadaire</label>
        <input
          id={"record-objective-monthly"}
          type="radio"
          {...register("recordFrequency")}
          value={RecordRecurring.monthly}
        />
        <label htmlFor={"record-objective-monthly"}>Objectif mensuel</label>
        <input
          id={"record-objective-yearly"}
          type="radio"
          {...register("recordFrequency")}
          value={RecordRecurring.yearly}
        />
        <label htmlFor={"record-objective-yearly"}>Objectif annuel</label>
      </label>

      <label htmlFor={"recordMin"}>Object mini</label>
      <input id={"recordMin"} type="number" {...register("recordMin")} />
      <label htmlFor={"record-max"}>Object max</label>
      <input id={"record-max"} type="number" {...register("recordMax")} />

      <button type={"submit"}>Enregistrer</button>
    </form>
  );
};
