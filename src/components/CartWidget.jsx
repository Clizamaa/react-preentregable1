import React from 'react'
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const {cart} = useCart();
  return (
    <>
        <div className='flex flex-row items-center text-white'>
          <Link to='/cart'>  <BsBag /> </Link>
           
            <p className='pl-3'> {cart.length}</p>
        </div>
    </>
  )
}

export default CartWidget