import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

//initial store
const initialStore = { count: 78 };

function reducer(state, action) {
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

const store = createStore(reducer, initialStore);
console.log(store.getState());
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
