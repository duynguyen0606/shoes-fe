import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import About from '../pages/About'
import User from '../pages/User'
import LayoutSideBar from '../components/Layout/LayoutSideBar'
const router = [
    { path: '/', component: Home },
    { path: '/product', component: Product, layout: LayoutSideBar },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/user', component: User },
]

export { router }
