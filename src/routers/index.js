import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import LayoutSideBar from '../components/Layout/LayoutSideBar'
const router = [
    { path: '/', component: Home },
    { path: '/product', component: Product, layout: LayoutSideBar },
    { path: '/login', component: Login },
]

export { router }
