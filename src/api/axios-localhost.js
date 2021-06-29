import axios from "axios";

export const httpServicesLocal = axios.create({
  baseURL: "http://localhost:5000/api/v1/services",
  headers: {
    "Content-type": "application/json",
  },
});
export const httpProjectsLocal = axios.create({
  baseURL: "http://localhost:5000/api/v1/projects",
  headers: {
    "Content-type": "application/json",
  },
});
