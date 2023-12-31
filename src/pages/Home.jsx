import ProductCard from '../components/ProductCard'
import { useProducts } from '../context/ProductsProvider'

const Home = () => {
  const {
    state: { products, loading, error }
  } = useProducts()

  let content

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>Something is wrong</p>
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Product is not available now</p>
  }

  if (!loading && !error && products.length) {
    content = products.map((product, i) => (
      <ProductCard key={i} product={product} />
    ))
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  )
}

export default Home
