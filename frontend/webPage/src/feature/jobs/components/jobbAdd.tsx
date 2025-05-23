import { useState } from "react";
import JobAddForm from "./jobbAddForm";

export default function JobAdd(prop: idProp) {
  const [active, setActive] = useState(false);

  if (!active)
    return (
      <>
        <section
          className="bg-slate-100 shadow-md rounded-sm flex-col justify-center text-center p-2 hover:bg-slate-50"
          onClick={() => setActive(true)}
        >
          <div className="font-extrabold text-6xl">+</div>
          <div>Add New</div>
        </section>
      </>
    );

  return (
    <>
      <section className="bg-slate-100 flex flex-col justify-center p-2 rounded-sm">
        <JobAddForm id={prop.id} />
        <button
          onClick={() => setActive(false)}
          className="border-2 bg-slate-300 mt-2 rounded-sm hover:bg-slate-100"
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
