import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users: userReducer,
  todos: todosReducer,
  todo: todoReducer,
  form: formReducer,
});
