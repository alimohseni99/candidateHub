import { useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../misc/fetchCalls";
import type { jobInfo } from "../type";
import { FloatingLabelInput } from "@/components/floating-input";

export default function JobDisplay({ id, title, status, url }: jobInfo) {
  const queryClient = useQueryClient();

  async function deleteJobClick(jobId: string) {
    const status = await deleteJob(jobId);
    if (status == 200) {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    }
  }

  return (
    <>
      <section className="bg-card shadow-md rounded-sm  transition-colors duration-75">
        <FloatingLabelInput id="floating-customize" label={title} />
      </section>
    </>
  );
}
