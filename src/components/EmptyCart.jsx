import React from 'react'

const EmptyCart = () => {
  return (
 <div className='flex flex-col justify-center items-center py-10 px-3'>

    <img src="https://shidory.com/assets/images/empty_cart.webp" className='w-[380px]' />
    <h1 className='text-lg font-bold mt-4 text-center'>Your Cart is Empty</h1>
    <h2 className='mt-2 text-gray-400'>Good food is always cooking! Go ahead, order some yummy items from the menu.</h2>
 
 </div>
  )
}

export default EmptyCart
