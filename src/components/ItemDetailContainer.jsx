import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={detail.image} className=" w-80 h-80 m-20" />
      </div>
      <div className="m-24">
        <h1 className="text-3xl font-bold">{detail.title}</h1>
        <p className="text-lg">{detail.description}</p>
        <p className="text-2xl font-bold">${detail.price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
