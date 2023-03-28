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
        <form>
          <label htmlFor="record-name">{"Nom de l'action"}</label>
          <input id={"record-name"} type="text" />
          <label htmlFor={"record-objective"}>
            {"Type d'objectif"}
            <input
              id={"record-objective-daily"}
              type="radio"
              name={"record-objective"}
              value={"daily"}
            />
            <label htmlFor={"record-objective"}>Objectif quotidien</label>
            <input
              id={"record-objective-weekly"}
              type="radio"
              name={"record-objective"}
              value={"weekly"}
            />
            <label htmlFor={"record-objective"}>Objectif hebdomadaire</label>
            <input
              id={"record-objective-monthly"}
              type="radio"
              name={"record-objective"}
              value={"monthly"}
            />
            <label htmlFor={"record-objective"}>Objectif mensuel</label>
            <input
              id={"record-objective-yearly"}
              type="radio"
              name={"record-objective"}
              value={"yearly"}
            />
            <label htmlFor={"record-objective"}>Objectif annuel</label>
          </label>
          <label htmlFor={"record-min"}>Object mini</label>
          <input id={"record-min"} type="number" />
          <label htmlFor={"record-max"}>Object max</label>
          <input id={"record-max"} type="number" />
        </form>
      </div>
    </div>
  );
}
