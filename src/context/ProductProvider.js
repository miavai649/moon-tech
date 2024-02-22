import { createContext, useContext, useReducer } from 'react'
import {
  initialState,
  productReducer
} from '../state/ProductState/productReducer'

const PRODUCT_CONTEXT = createContext()

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  console.log('🚀 ~ ProductsProvider ~ state:', state)

  const value = {
    state,
    dispatch
  }

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT)
  return context
}

export default ProductsProvider
