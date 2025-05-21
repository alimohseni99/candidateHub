import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../misc/fetchCalls";
import type { jobInfo } from "./jobDisplay";
import JobDislplay from "./jobDisplay";

export default function JobContainer() {
  const { isPending, isError, data, error } = useQuery<jobInfo[]>({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    console.log("Error message:" + error);
    return (
      <span>We are sorry, an error has occured. Please try again later</span>
    );
  }

  console.log("Data: " + data);

  return (
    <>
      <div>Jobs:</div>
      <section className="flex ml-5 mr-5 gap-10 flex-wrap">
        {data.map((s, key) => {
          return <JobDislplay key={key} data={s} />;
        })}
      </section>
    </>
  );
}
