import { combineReducers } from "redux";
import { userReducer } from "./user";
import { sidebarReducer } from "./sidebar";
export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
});
