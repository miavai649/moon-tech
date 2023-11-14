import { productActionType } from './productActionTypes'

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishList: []
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case productActionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false
      }
    case productActionType.FETCHING_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        loading: false
      }
    case productActionType.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case productActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case productActionType.WISH_LIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload]
      }
    default:
      return state
  }
}
