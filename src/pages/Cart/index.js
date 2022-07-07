import classNames from 'classnames/bind'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('contentCart')}>
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
                            <tr>
                                <td className={cx('proImg')}>
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                                        alt="Nike"
                                    />
                                </td>
                                <td className={cx('proDetail')}>
                                    <div className={cx('proName')}>Nike</div>
                                    <div className={cx('proSize')}>Size: 42</div>
                                </td>
                                <td className={cx('proPrice')}>$70.00</td>
                                <td className={cx('proQnt')}>1</td>
                                <td className={cx('proTitle')}>$70.00</td>
                                <td className={cx('proRemove')}>
                                    <FontAwesomeIcon
                                        className={cx('proIcon')}
                                        icon={faTrashCan}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={cx('actionCart')}>
                    <Link
                        to="/checkout"
                        className={cx('contShop')}
                    >
                        Continue Shopping
                    </Link>
                    <div className={cx('clearCart')}>Clear Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Cart
