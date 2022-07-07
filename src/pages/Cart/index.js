import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { formatter } from '../../utils/tool'
import { deleteProductInCart, updateCart } from '../../features/cart/cartSlice'
import Navbar from '../../components/Navbar'
const cx = classNames.bind(styles)
function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.products)
    const [selectCartItem, setSelectCartItem] = useState({})
    const handleRemoveCart = (product) => {
        setSelectCartItem(product)
        dispatch(deleteProductInCart(product))
    }
    const handleAddOrDecreaseQntItem = (product, isAdd) => {
        const productNew = { ...product, amount: isAdd ? 1 : -1 }
        setSelectCartItem(productNew)
        dispatch(updateCart(productNew))
    }
    return (
        <div className={cx('wrapper')}>
            <Navbar name={'Cart'} />
            <div className="grid wide">
                <div className={cx('contentCart')}>
                    {cart.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr>
                                        <td
                                            className={cx('proImg')}
                                            key={item._id}
                                        >
                                            <img
                                                src={item.linkImg[0]}
                                                alt="Nike"
                                            />
                                        </td>
                                        <td className={cx('proDetail')}>
                                            <div className={cx('proName')}>{item.name}</div>
                                            <div className={cx('proSize')}>Size: {item.size[0].size}</div>
                                        </td>
                                        <td className={cx('proPrice')}>{formatter.format(item.price)}</td>
                                        <td className={cx('proQnt')}>
                                            <div className={cx('qntAction')}>
                                                <div
                                                    className={cx('qntDecre')}
                                                    onClick={() => {
                                                        handleAddOrDecreaseQntItem(item, false)
                                                    }}
                                                >
                                                    -
                                                </div>
                                                <div className={cx('qnt')}>{item.amount}</div>
                                                <div
                                                    className={cx('qntIncre')}
                                                    onClick={() => {
                                                        handleAddOrDecreaseQntItem(item, true)
                                                    }}
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </td>
                                        <td className={cx('proTitle')}>{formatter.format(item.amount * item.price)}</td>
                                        <td
                                            className={cx('proRemove')}
                                            onClick={() => {
                                                handleRemoveCart(item)
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className={cx('proIcon')}
                                                icon={faTrashCan}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>Chưa có sản phẩm nào được thêm vào giỏ hàng</div>
                    )}
                </div>
                <div className={cx('actionCart')}>
                    {cart.length > 0 ? (
                        <>
                            {' '}
                            <Link
                                to="/checkout"
                                className={cx('contShop')}
                            >
                                Continue Shopping
                            </Link>
                            <div className={cx('clearCart')}>Clear Cart</div>
                        </>
                    ) : (
                        <Link
                            to="/product"
                            className={cx('contShop')}
                        >
                            Back To Product
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
