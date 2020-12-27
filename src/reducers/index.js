import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";
import editReducer from "./editReducer";

export default combineReducers({
  users: userReducer,
  edit: editReducer,
  todos: todosReducer,
  todo: todoReducer,
});
