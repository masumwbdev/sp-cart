import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Navbar from './Pages/Navbar/Navbar';
import Products from './Pages/Products/Products';
 
  // save localstorage 
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart" || "[]"));

function App() {
  const [show, setShow] = useState(true);

  // empty array [] to cartFromLocalStorage for save data
  const [cart, setCart] = useState(cartFromLocalStorage);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // save localStorage 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Products handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;