import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { INCREASE, DECREASE } from "./action";

import reducer from "./reducer";
//initial store
const initialStore = { count: 78, name: "Ravi" };

const store = createStore(reducer, initialStore);
console.log(store.getState());
store.dispatch({ type: DECREASE });
store.dispatch({ type: "RESET" });
store.dispatch({ type: INCREASE });
store.dispatch({ type: "CHANGE_NAME" });
console.log(store.getState());

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
