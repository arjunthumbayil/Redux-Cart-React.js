import { INCREASE, DECREASE, CLEAR_CART } from "./action";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] };
  // }
  // return state;
}

export default reducer;
