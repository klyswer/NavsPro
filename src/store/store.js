import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  reducerProduct,
  // listProductReducer
} from "./rootReduce";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  combineReducers({
    reducerProduct,
    // listProductReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
