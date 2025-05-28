import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../misc/fetchCalls";
import type { jobInfo } from "../type";
import JobAdd from "./jobbAdd";
import JobDisplay from "./jobDisplay";

type prop = {
  id: string;
};

export default function JobContainer({ id }: prop) {
  const { isPending, isError, data } = useQuery<jobInfo[]>({
    queryKey: ["jobs"],
    queryFn: () => fetchJobs(id),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <span>We are sorry, an error has occurred. Please try again later</span>
    );
  }
  return (
    <>
      <section className="flex flex-col gap-2 p-12">
        <div className="flex flex-col gap-2">
          {data.map((s, key) => {
            return <JobDisplay key={key} {...s} />;
          })}
        </div>
        <div>{/* <JobAdd id={id} /> */}</div>
      </section>
    </>
  );
}
