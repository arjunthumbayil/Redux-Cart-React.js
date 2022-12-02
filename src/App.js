import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
//initial store
const initialStore = { cart: cartItems, total: 0, amount: 0 };
//Next line is similar to useReducer hook
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
