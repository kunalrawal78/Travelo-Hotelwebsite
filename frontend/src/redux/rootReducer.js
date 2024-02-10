import { combineReducers } from "redux";
import SearchReducer from "./Search/SearchReducer";
import bookReducer from "./Bookings/bookReducer";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
    searchy:SearchReducer,
    book:bookReducer,
    pages:pageReducer,
  });

export default rootReducer;