import { postJob, type createJobInputData } from "../misc/fetchCalls";
import type { idProp } from "./jobbAdd";

export default function JobAddForm(prop: idProp) {
  async function post(formEvent: FormData) {
    const title = formEvent.get("title");
    const link = formEvent.get("link");
    if (link === null || title === null) {
      return;
    }
    const postData: createJobInputData = {
      title: title.toString(),
      status: "APPLIED",
      url: link.toString(),
      applicantId: prop.id,
    };
    postJob(postData);
  }

  return (
    <>
      <form className="flex-col flex" action={(e) => post(e)}>
        <span>Job Title</span>
        <input
          className="bg-slate-200 border-2 border-s border-slate-300"
          type="text"
          name="title"
        />
        <span>Link</span>
        <input
          className="bg-slate-200 border-2 border-s border-slate-300 rounded-sm"
          type="text"
          name="link"
        />
        <button
          type="submit"
          className="border-2 bg-emerald-500 mt-2 rounded-sm hover:bg-emerald-300"
        >
          Create
        </button>
      </form>
    </>
  );
}
