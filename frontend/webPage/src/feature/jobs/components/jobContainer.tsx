import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../misc/fetchCalls";
import type { jobInfo } from "./jobDisplay";
import JobDislplay from "./jobDisplay";
import LoaderAnimation from "@/components/loader";

export default function JobContainer(props: prop) {
  const { isPending, isError, data, error } = useQuery<jobInfo[]>({
    queryKey: ["jobs"],
    queryFn: () => fetchJobs(props.id),
  });

  if (isPending) {
    return <LoaderAnimation text="Loading Jobs" />;
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
      <div>Jobs for: {props.id}</div>
      <section className="flex ml-5 mr-5 gap-10 flex-wrap bg-emerald-500 p-4 rounded-md">
        {data.map((s, key) => {
          return <JobDislplay key={key} data={s} />;
        })}
      </section>
    </>
  );
}

type prop = {
  id: string;
};
