import { createContext, useReducer } from 'react'

const PRODUCT_CONTEXT = createContext()

const ProductsProvider = ({ childern }) => {
  const [state, dispatch] = useReducer()
}

export default ProductsProvider
