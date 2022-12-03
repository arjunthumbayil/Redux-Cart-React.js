import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./action";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    console.log("Increase");
  }
  if (action.type === DECREASE) {
    console.log("Decrease");
  }
  if (action.type === REMOVE) {
    console.log("Remove");
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
