import React from 'react'
import { useSelector } from 'react-redux';

import CartItems from './cartItems';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length == 0 ? (<EmptyCart/>) : (
    <div className='p-0 md:p-4 md:w-6/12 md:m-auto'>

    <CartItems items={cartItems}/>
    </div>
  )
}

export default Cart
