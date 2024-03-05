import React from 'react'
import { BiListPlus, BiSolidTrash } from 'react-icons/bi'
import { useProducts } from '../context/ProductProvider'
import { actionTypes } from '../state/ProductState/actionType'

const ProductCard = ({ product, typeOfCard }) => {
  const { dispatch } = useProducts()

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}>
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className='text-sm '>
                {feature}
              </li>
            )
          })}
        </ul>
      </div>

      {typeOfCard === 'homeCard' ? (
        <div className='flex gap-2 '>
          <button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
            }>
            Add to cart
          </button>
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_WISHLIST, payload: product })
            }>
            <BiListPlus className='text-white' />
          </button>{' '}
        </div>
      ) : (
        <button
          className='bg-indigo-500 flex justify-center py-2 mt-2 rounded-full'
          onClick={() => {
            typeOfCard === 'cartCard'
              ? dispatch({
                  type: actionTypes.REMOVE_FROM_CART,
                  payload: product._id
                })
              : dispatch({
                  type: actionTypes.REMOVE_FROM_WISHLIST,
                  payload: product._id
                })
          }}>
          <BiSolidTrash className='text-white text-lg' />
        </button>
      )}
    </div>
  )
}

export default ProductCard
