//import { httpServices } from "../api/axios-heroku.js";
import { httpServices } from "../api/axios-localhost.js";
//get services from database

class ServicesData {
  //Get
  getAll(page = 0) {
    return httpServices.get();
  }
  //Get Single
  getByName(name) {
    return httpServices.get(
      `?serviceName=${name.replaceAll(" ", "+").replaceAll("&", "%26")}`
    );
  }
  //Post
  createNewService(data) {
    return httpServices.post(data);
  }
  //Update
  updateById(data) {
    return httpServices.put(data);
  }
  //Delete
  deleteById(data) {
    return httpServices.delete(data);
  }
}

export default new ServicesData();
