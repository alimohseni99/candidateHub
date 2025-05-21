const url = import.meta.env.VITE_BACKEND_URL;

export function fetchJobs() {
  console.log("fetching with " + url + "/api/jobs");
  return fetch(url + "/api/jobs").then((data) => data.json());
}
