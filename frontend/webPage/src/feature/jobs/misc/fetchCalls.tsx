import type { jobUser } from "../components/userContainer";

const url = import.meta.env.VITE_BACKEND_URL;

export type createJobInputData = {
  title: string;
  status: string;
  url: string;
  applicantId: string;
};

export async function fetchJobs(id: string) {
  const path = url + "/api/jobs/" + id;
  console.log("Fetch path: " + path);
  const data_1 = await fetch(path);
  return await data_1.json();
}

export async function fetchUser(user: jobUser) {
  console.log(JSON.stringify(user));
  const data_1 = await fetch(url + "/api/applicant/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  return await data_1.json();
}

export async function postJob(input: createJobInputData) {
  const data = await fetch(url + "/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(input),
  });
  return data.status;
}

export async function deleteJob(id: string) {
  const data = await fetch(url + "/api/jobs/" + id, { method: "DELETE" });
  return data.status;
}
