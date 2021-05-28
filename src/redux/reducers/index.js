import { combineReducers } from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
  allItems: reducer,
});

export default reducers;
