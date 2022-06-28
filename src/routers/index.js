import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import User from '../pages/User'
import Register from '../pages/Register'
import Admin from '../pages/Admin'


const router = [
    { path: '/', component: Admin },
    { path: '/product', component: Product },
    { path: '/login', component: Login },
    { path: '/user', component: User },
    { path: '/register', component: Register },
    { path: '/register', component: Admin },
]

export { router }
