import axios from "axios";

export const httpServicesHeroku = axios.create({
  baseURL: "https://sonicsavi-server.herokuapp.com/api/v1/services",
  headers: {
    "Content-type": "application/json",
  },
});
export const httpProjectsHeroku = axios.create({
  baseURL: "https://sonicsavi-server.herokuapp.com/api/v1/projects",
  headers: {
    "Content-type": "application/json",
  },
});
