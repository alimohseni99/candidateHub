import { useState } from "react";
import JobAddForm from "./jobbAddForm";

export default function JobAdd(prop: idProp) {
  const [active, setActive] = useState(false);

  if (!active)
    return (
      <>
        <section
          className="bg-card shadow-md rounded-sm flex-col justify-center text-center p-2 hover:bg-secondary"
          onClick={() => setActive(true)}
        >
          <div className="font-extrabold text-6xl">+</div>
          <div>Add New</div>
        </section>
      </>
    );

  return (
    <>
      <section className="bg-card flex flex-col justify-center p-2 rounded-sm">
        <JobAddForm id={prop.id} />
        <button
          onClick={() => setActive(false)}
          className="border-2 bg-slate-300 mt-2 rounded-sm "
        >
          Back
        </button>
      </section>
    </>
  );
}

export type idProp = {
  id: string;
};
