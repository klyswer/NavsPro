import Axios from "axios";
import { GET_ALL_PRODUCTS } from "./actionTypes";

const API_URL_PRODUCTS = "https://mpryr-back-prod.herokuapp.com/api";

export const getAllProducts = () => (dispatch) => {
  Axios.get(`${API_URL_PRODUCTS}/products`).then(
    response=>{
      return dispatch({
        type: GET_ALL_PRODUCTS,
        listRoot: response.data
      })
    }
  );
};
