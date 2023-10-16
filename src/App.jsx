import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import ProductsProvider from './context/ProductsProvider'

function App() {
  return (
    <>
      <ProductsProvider>
        <RouterProvider router={routes} />
      </ProductsProvider>
    </>
  )
}

export default App
