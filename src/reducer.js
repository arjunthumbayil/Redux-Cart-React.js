import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./action";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    return {
      ...state,
      cart: state.cart.amount + 1,
    };
  }
  if (action.type === DECREASE) {
    return {
      ...state,
      cart: state.cart.amount - 1,
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
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
