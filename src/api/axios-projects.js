import { httpProjectsHeroku } from "../api/axios-heroku.js";
import { httpProjectsLocal } from "../api/axios-localhost.js";
//get services from database

class ProjectsData {
  constructor() {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === ""
    ) {
      this.http = httpProjectsLocal;
    } else {
      this.http = httpProjectsHeroku;
    }
  }
  //Get
  getAll(page = 0) {
    return this.http.get();
  }
  //Get Single
  getByName(name) {
    return this.http.get(
      `?projectName=${name.replaceAll(" ", "+").replaceAll("&", "%26")}`
    );
  }
  //Post
  createNewProject(data) {
    return this.http.post(data);
  }
  //Update
  updateById(data) {
    return this.http.put(data);
  }
  //Delete
  deleteById(data) {
    return this.http.delete(data);
  }
}

export default new ProjectsData();
