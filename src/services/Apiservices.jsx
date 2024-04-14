import { GET_BAGS, GET_PRODUCTS } from "../Constants/ApiEndpoints"; // Importing API endpoints
import axios from "axios";
export default class ApiService {
  static getBags = async (next) => {
    try {
      const response = await axios.get(GET_BAGS);
      // Calling the callback function with the response data
      next(response.data);
    } catch (err) {
      // Handling errors
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
