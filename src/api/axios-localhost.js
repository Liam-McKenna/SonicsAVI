import axios from "axios";

export const httpServices = axios.create({
  baseURL: "http://localhost:5000/api/v1/services",
  headers: {
    "Content-type": "application/json",
  },
});
export const httpProjects = axios.create({
  baseURL: "http://localhost:5000/api/v1/projects",
  headers: {
    "Content-type": "application/json",
  },
});
