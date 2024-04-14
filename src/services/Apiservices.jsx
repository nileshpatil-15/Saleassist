import { GET_BAGS, GET_PRODUCTS } from "../Constants/ApiEndpoints";
import axios from "axios";

export default class ApiService {
  static getBags = async (next) => {
    try {
      const response = await axios.get(GET_BAGS);
      next(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  static getProducts = async (next) => {
    try {
      const response = await axios.get(GET_PRODUCTS);
      next(response.data);
    } catch (err) {
      console.log(err);
    }
  };
}
