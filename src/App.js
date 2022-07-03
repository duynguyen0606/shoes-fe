import { router } from './routers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/Layout/DefaultLayout'
import { useEffect } from 'react'
import { apiLoadAllProduct } from './api/productAPI'
import { useDispatch } from 'react-redux'
import { setProducts } from './features/product/productSlice'
import { setCart } from './features/cart/cartSlice'
import { useState } from 'react'
import { Loading } from './components/loading'
function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const cart = localStorage.getItem('cart') || [];
        dispatch(setCart(cart));
    }, [])
    useEffect(() => {
        loadProducts();
    }, [])
    const loadProducts = async () => {
        setLoading(true);
        const res = await apiLoadAllProduct();
        dispatch(setProducts(res.data));
        setLoading(false);
    }
    return (
        <Router>
            <div className="App">
                {loading? <Loading />:
                <Routes>
                    {router.map((route, index) => {
                        const Page = route.component
                        let Layout = DefaultLayout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>}
            </div>
        </Router>
    )
}

export default App
