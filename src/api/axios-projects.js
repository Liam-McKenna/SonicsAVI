// import http from "../api/axios-heroku.js";
import { httpProjects } from "../api/axios-localhost.js";
//get services from database

class ProjectsData {
  //Get
  getAll(page = 0) {
    return httpProjects.get();
  }
  //Get Single
  getByName(name) {
    return httpProjects.get(
      `?projectName=${name.replaceAll(" ", "+").replaceAll("&", "%26")}`
    );
  }
  //Post
  createNewProject(data) {
    return httpProjects.post(data);
  }
  //Update
  updateById(data) {
    return httpProjects.put(data);
  }
  //Delete
  deleteById(data) {
    return httpProjects.delete(data);
  }
}

export default new ProjectsData();
