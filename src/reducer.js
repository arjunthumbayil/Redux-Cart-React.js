import { INCREASE, DECREASE } from "./action";

function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "CHANGE_NAME") {
    return { ...state, name: "Kumar" };
  }
  return state;
}

export default reducer;
