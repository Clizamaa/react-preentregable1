import React from 'react'
import { BsBag } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
        <div className='flex flex-row items-center text-white'>
            <BsBag />
            <p className='pl-3'>2</p>
        </div>
    </>
  )
}

export default CartWidget