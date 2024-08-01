import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";

// Correctly import and call the getData function
// eslint-disable-next-line no-undef
const getData = require("./db/db").getData; // Assuming getData is exported from db/db.js
let foods = []; // Initialize an empty array to hold fetched food items

const tele = window.Telegram.webapp
function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Call getData and update the foods state
    tele.ready();
    getData().then(fetchedFoods => {
      foods = fetchedFoods;
    });
    // eslint-disable-next-line no-undef
    tele.ready();
  }, []);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(cartItems.map(x => (x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(x => x.id !== food.id));
    } else {
      setCartItems(cartItems.map(x => (x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x)));
    }

  };
   const onCheckOut = () =>{
    tele.MainButton.text = "Pay"
    tele.MainButton.show()
};

  return (
    <>
      <h1 className="heading">Order food</h1>
      <Cart cartItems={cartItems} onCheckOut={onCheckOut} />
      <div className="cards_container">
        {foods.map(food => (
          <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default App;
