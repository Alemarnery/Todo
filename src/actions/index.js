import jsonPlaceholder from "../api/jsonPlaceHolder";
import history from "../history";
import _ from "lodash";

export const fetchTodos = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/todos");
  const values = _.chain(response.data).keyBy("id").value();

  dispatch({ type: "FETCH_TODOS", payload: values });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/users");
  dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const fetchTodo = (id) => async (dispatch, getState) => {
  const response = getState().todos[id];
  dispatch({ type: "FETCH_TODO", payload: response });
};

export const editTodo = (id, userId, formValues) => async (dispatch) => {
  const { title, completed } = formValues;
  //Artificio, porque el servidor no me permite editar!
  dispatch({ type: "ADD_TODO", payload: { id, userId, title, completed } });

  history.push("/");
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_TODO", payload: id });
  history.push("/");
};

export const cleanTodo = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODO", payload: {} }); //Para colocar el todo vacio
};
