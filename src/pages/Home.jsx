import { useProducts } from '../context/ProductsProvider'

const Home = () => {
  const { data } = useProducts()
  console.log('🚀 ~ file: Home.jsx:7 ~ Home ~ data:', data)

  console.log(data)
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  )
}

export default Home
