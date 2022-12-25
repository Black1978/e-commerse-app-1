import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Products from '../src/pages/Products/Products'
import Product from '../src/pages/Product/Product'
import Footer from '../src/components/footer/Footer'
import './app.scss'
import Header from './components/header/Header'

const Layout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products/:id',
                element: <Products />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
        ],
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
