import { applyMiddleware, createStore } from "redux";
import fitnessReducer from "../reducer/fitnessReducer";
import thunk from "redux-thunk";

// creating store and adding thunk middleware for asyncronous operation
const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
