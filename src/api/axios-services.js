import { httpServicesHeroku } from "../api/axios-heroku.js";
import { httpServicesLocal } from "../api/axios-localhost.js";
//get services from database

class ServicesData {
  constructor() {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === ""
    ) {
      this.http = httpServicesLocal;
    } else {
      this.http = httpServicesHeroku;
    }
  }

  //Get
  getAll(page = 0) {
    return this.http.get();
  }
  //Get Single
  getByName(name) {
    return this.http.get(
      `?serviceName=${name.replaceAll(" ", "+").replaceAll("&", "%26")}`
    );
  }
  //Post
  createNewService(data) {
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

export default new ServicesData();
