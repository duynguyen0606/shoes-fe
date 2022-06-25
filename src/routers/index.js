import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import User from '../pages/User'
import Register from '../pages/Register'


const router = [
    { path: '/', component: Login },
    { path: '/product', component: Product },
    { path: '/login', component: Login },
    { path: '/user', component: User },
    { path: '/register', component: Register },
]

export { router }
