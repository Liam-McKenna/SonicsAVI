import http from "../api/axios-common.js";
//get services from database

class ServicesData {
  getAll(page = 0) {
    return http.get();
  }

  getByName(name) {
    // name.replaceAll(" ", "+").replaceAll("&", "%26");

    return http.get(
      `?serviceName=${name.replaceAll(" ", "+").replaceAll("&", "%26")}`
    );
  }

  createNewService(data) {
    return http.post(data);
  }

  updateById(data) {
    return http.put(data);
  }

  deleteById(data) {
    return http.delete(data);
  }
}

export default new ServicesData();
