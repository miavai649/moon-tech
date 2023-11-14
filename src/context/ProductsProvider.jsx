import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import {
  initialState,
  productReducer
} from '../states/productsState/productReducer'
import { productActionType } from '../states/productsState/productActionTypes'

const PRODUCT_CONTEXT = createContext()
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)
  console.log(
    '🚀 ~ file: ProductsProvider.jsx:17 ~ ProductsProvider ~ state:',
    state
  )

  useEffect(() => {
    dispatch({
      type: productActionType.FETCHING_START
    })
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: productActionType.FETCHING_SUCCESS,
          payload: {
            data: data
          }
        })
      )
      .catch((err) =>
        dispatch({
          type: productActionType.FETCHING_ERROR
        })
      )
  }, [])

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
