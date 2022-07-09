import { router, routerAdmin } from './routers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/Layout/DefaultLayout'
import { useEffect } from 'react'
import { apiLoadAllProduct } from './api/productAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './features/product/productSlice'
import { setCart } from './features/cart/cartSlice'
import { useState } from 'react'
import { Loading } from './components/loading'
import { apiCheckLogin } from './api/userAPI'
import { loginSuccess } from './features/user/userSlice'
function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const userInfor = useSelector((state) => state.user.inforUser);


    useEffect(() => {
        const cart = localStorage.getItem('cart') || '[]'
        dispatch(setCart(JSON.parse(cart)))
    }, [])
    useEffect(() => {
        loadProducts();
        checkLogin();
    }, [])

    const checkLogin = async () => {
        const res = await apiCheckLogin();
        if(res.status === 200) {
            dispatch(loginSuccess(res.data.currentUser))
        }
    }

    const loadProducts = async () => {
        setLoading(true)
        const res = await apiLoadAllProduct()
        dispatch(setProducts(res.data))
        setLoading(false)
    }
    return (
        <Router>
            <div className="App">
                {loading ? (
                    <Loading />
                ) : (
                    <Routes>
                        {(userInfor.role === 1?routerAdmin:router).map((route, index) => {
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
                    </Routes>
                )}
            </div>
        </Router>
    )
}

export default App
