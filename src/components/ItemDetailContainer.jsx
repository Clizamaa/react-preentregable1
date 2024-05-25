import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../firebase/db";
import Itemcount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { addToCart } = useCart();
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getAndSetItem = async () => {
      const item = await getItem(id);
      setDetail(item);
    };
    getAndSetItem();
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
        <Itemcount product={detail}/>
       
      </div>
    </div>
  );
};

export default ItemDetailContainer;
