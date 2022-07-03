import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import User from '../pages/User'
import DetailProduct from '../pages/DetailProduct'
import Cart from '../pages/Cart'
const router = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/login', component: Login },
    { path: '/user', component: User },
    { path: '/detail/:id', component: DetailProduct },
    { path: '/cart', component: Cart },
]

export { router }
