import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f0f2c91b1bc490090c3009dab121432",
  },
});
