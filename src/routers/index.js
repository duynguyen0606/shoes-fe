import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import User from '../pages/User'

const router = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/login', component: Login },
    { path: '/user', component: User },
]

export { router }
