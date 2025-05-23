import { useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../misc/fetchCalls";

export default function JobDislplay(prop: props) {
  const queryClient = useQueryClient();

  async function deleteJobClick(jobId: string) {
    const status = await deleteJob(jobId);
    if (status == 200) {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    }
  }

  const { title, status, url, id } = prop.data;
  return (
    <>
      <section className="bg-slate-100 shadow-md rounded-sm hover:bg-slate-50 transition-colors duration-75">
        <div className="font-bold text-xl pr-2 pl-2">{title}</div>
        <div className="flex gap-2 pr-2 pl-2">
          <div>Status: </div>
          <div className="text-shadow-amber-300">{status}</div>
        </div>
        <a
          href={"https://" + url}
          target="_blank"
          className="pr-2 pl-2 font-bold text-blue-600"
        >
          Link
        </a>
        <div
          className="bg-red-400 border-2 ml-2 mr-2 mb-2 text-center rounded-sm hover:bg-red-200"
          onClick={() => deleteJobClick(id)}
        >
          Delete
        </div>
      </section>
    </>
  );
}

export type jobInfo = {
  id: string;
  title: string;
  status: string;
  url: string;
  applicantId: string;
};

type props = {
  data: jobInfo;
};
