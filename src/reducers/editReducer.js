export default (state = {}, action) => {
  switch (action.type) {
    case "EDIT_TODO":
      return action.payload;
    default:
      return state;
  }
};
