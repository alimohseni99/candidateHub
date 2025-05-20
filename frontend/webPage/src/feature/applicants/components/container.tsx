import { useQuery } from "@tanstack/react-query";
import { fetchApplicants, type applicant } from "../misc/fetchCalls";

export default function Container() {
  const { isPending, isError, data, error } = useQuery<applicant[]>({
    queryKey: ["todos"],
    queryFn: fetchApplicants,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div>People found: {data.length}</div>
      {data.map((s, key) => {
        return <div key={key}>{s.name}</div>;
      })}
    </>
  );
}
