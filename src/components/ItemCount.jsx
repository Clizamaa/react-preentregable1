import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function itemCount({product}) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const add = () => {
    setCount(count + 1);
  };

  const remove = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart( product, count);
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4 "
        onClick={remove}
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4"
        onClick={add}
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 "
      >
        Add to Cart
      </button>
    </div>
  );
}

export default itemCount;
