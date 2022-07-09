import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import User from '../pages/User'


import Register from '../pages/Register'
import DetailProduct from '../pages/DetailProduct'
import Cart from '../pages/Cart'
import ManageProduct from '../pages/ManageProduct'
import ManageOrder from '../pages/ManageOrder'
import ManageUser from '../pages/ManageUser'
import ManageVoucher from '../pages/ManageVoucher'
const router = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/login', component: Login },
    { path: '/user', component: User },
    { path: '/register', component: Register },
    { path: '/detail/:id', component: DetailProduct },
    { path: '/cart', component: Cart },
]
const routerAdmin = [
    { path: '/', component: ManageProduct},
    { path: '/manage-order', component: ManageOrder},
    { path: '/manage-account', component: ManageUser},
    { path: '/manage-voucher', component: ManageVoucher},
]
export { router, routerAdmin }
