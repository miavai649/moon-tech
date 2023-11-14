import WishListProductCard from '../components/WishListProductCard'
import { useProducts } from '../context/ProductsProvider'

const WishList = () => {
  const {
    state: { wishList, loading, error }
  } = useProducts()

  let content

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>Something went wrong</p>
  }

  if (!loading && !error && wishList.length === 0) {
    content = <p>At first you need to add some product to the wish list</p>
  }

  if (!loading && !error && wishList.length) {
    content = wishList.map((product, i) => (
      <WishListProductCard key={i} product={product} />
    ))
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  )
}

export default WishList
