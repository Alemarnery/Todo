import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return action.payload;
    default:
      return state;
  }
};
