import React, { useState } from "react";

function itemCount() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const remove = () => {
    if (count > 0) setCount(count - 1);
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
    </div>
  );
}

export default itemCount;
