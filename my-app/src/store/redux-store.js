import { createStore, combineReducers } from "redux";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    newsPage: newsReducer
});

let store = createStore(reducers);
export default store;


