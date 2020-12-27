import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_TODO":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
