import CartProductCard from '../components/CartProductCard'
import { useProducts } from '../context/ProductsProvider'

const Cart = () => {
  const {
    state: { cart, loading, error }
  } = useProducts()

  let content

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>Something is wrong</p>
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>At first you need to add some product to the cart</p>
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product, i) => (
      <CartProductCard key={i} product={product} />
    ))
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  )
}

export default Cart
