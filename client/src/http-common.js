import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4007/api",
  headers: {
    "Content-type": "application/json",
  },
});
