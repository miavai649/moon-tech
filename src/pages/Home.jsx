import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    fetch('product.json')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <h1>this is home page</h1>
    </div>
  )
}

export default Home
