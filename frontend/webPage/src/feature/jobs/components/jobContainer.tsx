import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../misc/fetchCalls";
import type { jobInfo } from "./jobDisplay";
import JobAdd from "./jobbAdd";
import JobDisplay from "./jobDisplay";

type prop = {
  id: string;
  name: string;
};

export default function JobContainer({ id, name }: prop) {
  const { isPending, isError, data, error } = useQuery<jobInfo[]>({
    queryKey: ["jobs"],
    queryFn: () => fetchJobs(id),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log("Error message:" + error);
    return (
      <span>We are sorry, an error has occurred. Please try again later</span>
    );
  }
  return (
    <>
      <div className="ml-5 text-lg font-bold">Showing jobs for: {name}</div>
      <section className="flex ml-5 mr-5 gap-10 flex-wrap bg-emerald-500 p-4 rounded-md">
        {data.map((s, key) => {
          return <JobDisplay key={key} data={s} />;
        })}
        <JobAdd id={id} />
      </section>
    </>
  );
}
