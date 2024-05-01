import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }
  }, [id]);

  return (
    <div className="grid grid-cols-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-15 flex flex-wrap items-center justify-center"
        >
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-700 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-16"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="#C0C2C9"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="#C0C2C9"
              />
            </svg>
            <div className="relative h-40 pt-10 px-10 flex items-center justify-center">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
              <img className="relative w-20" src={item.image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <div className="flex flex-col items-center">
                <span className="block font-semibold text-l">{item.title}</span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold my-2 px-2 py-2 leading-none">
                  ${item.price}
                </span>
                <Link to={`/item/${item.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
