import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(false)

  function Toggle() {
    setMode((mode) => !mode)
  }

  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={ appClass } >
      <header>
        <h2>Shopster</h2>
        <button onClick={Toggle}>
          {mode ? "App dark" : "App light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
