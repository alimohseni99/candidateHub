import type { jobUser } from "../components/userContainer";

const url = import.meta.env.VITE_BACKEND_URL;

export function fetchJobs(id: string) {
  const path = url + "/api/jobs/" + id;
  console.log("Fetch path: " + path);
  return fetch(path).then((data) => data.json());
}

export function fetchUser(user: jobUser) {
  console.log(JSON.stringify(user));
  return fetch(url + "/api/applicant/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  }).then((data) => data.json());
}

export function postJob(input: createJobInputData) {
  return fetch(url + "/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(input),
  }).then((data) => data.status);
}

export type createJobInputData = {
  title: string;
  status: string;
  url: string;
  applicantId: string;
};
