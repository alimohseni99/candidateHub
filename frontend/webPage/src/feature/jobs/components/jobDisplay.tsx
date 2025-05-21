export default function JobDislplay(prop: props) {
  const { title, status, url } = prop.data;
  return (
    <>
      <section className="bg-slate-100 shadow-md rounded-sm">
        <div className="font-bold text-xl pr-2 pl-2">{title}</div>
        <div className="flex gap-2 pr-2 pl-2">
          <div>Status: </div>
          <div className="text-shadow-amber-300">{status}</div>
        </div>
        <a
          href={"https://" + url}
          className="pr-2 pl-2 font-bold text-blue-600"
        >
          Link
        </a>
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
