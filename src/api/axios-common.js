import axios from "axios";

export default axios.create({
  baseURL: "https://sonicsavi-server.herokuapp.com/api/v1/services",
  headers: {
    "Content-type": "application/json",
  },
});
