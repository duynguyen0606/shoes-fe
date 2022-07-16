import styles from './Checkout.module.css'
import classnames from 'classnames/bind'
import { useSelector, useDispatch } from 'react-redux'
import { formatter } from '../../utils/tool'
import { apiCreateOrder } from '../../api/orderAPI'
import { useEffect, useState } from 'react'
import { getListVoucherApi } from '../../api/voucherAPI'
import { setVoucher } from '../../features/voucher/voucherSlice'
import { showSuccessToast } from '../../utils/toastMessage'
import { apiUpdateProfile } from '../../api/userAPI'
import { updateProfile } from '../../features/user/userSlice'
import { useNavigate } from 'react-router'

const cx = classnames.bind(styles)

function Checkout() {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const voucher = useSelector((state) => state.vouchers.vouchers)
    const [vouc, setVouc] = useState(voucher[0].discount)
    const cart = useSelector((state) => state.cart.products)
    const totalCart = cart.reduce((pre, cur) => {
        return pre + cur.amount * cur.price
    }, 0)
    const [totalBill, setTotalBill] = useState(totalCart - totalCart * Number(vouc) * 0.01)
    const [infoUser, setInfoUser] = useState({
        products: cart,
        totalPrice: totalBill,
        status: 0,
        address: '',
        phoneNumber: '',
    })
    const [infoUserUpdate, setInfoUserUpdate] = useState({
        address: '',
        phoneNumber: '',
    })
    useEffect(() => {
        loadVoucher()
    }, [])

    const loadVoucher = async () => {
        const res = await getListVoucherApi()
        dispatch(setVoucher(res.data))
    }

    const handleOrder = async (e) => {
        e.preventDefault()
        const res = await apiCreateOrder(infoUser)
        if (res.data) {
            showSuccessToast('Order Success', 'Success', 'success')
            navigation('/')
            window.location.reload()
        }
    }
    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        const res = await apiUpdateProfile(infoUserUpdate)
        dispatch(updateProfile(res.data))
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className="grid wide">
                    <div className="row">
                        <div className={cx('form', 'c-8')}>
                            <div className={cx('formTitle')}>Checkout</div>
                            <form
                                className={cx('formContent')}
                                onSubmit={(e) => {
                                    handleOrder(e)
                                    handleUpdateProfile(e)
                                }}
                            >
                                <div className={cx('inputUserType')}>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        onChange={(e) => {
                                            setInfoUser({ ...infoUser, address: e.target.value })
                                            setInfoUserUpdate({ ...infoUserUpdate, address: e.target.value })
                                        }}
                                        required={true}
                                        type="text"
                                        id={cx('address')}
                                    />
                                </div>
                                <div className={cx('inputUserType')}>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        onChange={(e) => {
                                            setInfoUser({ ...infoUser, phoneNumber: e.target.value })
                                            setInfoUserUpdate({ ...infoUserUpdate, phoneNumber: e.target.value })
                                        }}
                                        required={true}
                                        type="text"
                                        id={cx('phone')}
                                    />
                                </div>
                                <div className={cx('inputUserType')}>
                                    <div className={cx('voucherTitle')}>Voucher</div>
                                    <select
                                        onChange={(e) => {
                                            setVouc(e.target.value)
                                            setTotalBill(totalCart - totalCart * Number(e.target.value) * 0.01)
                                            setInfoUser({
                                                ...infoUser,
                                                totalPrice: totalCart - totalCart * Number(e.target.value) * 0.01,
                                            })
                                        }}
                                    >
                                        <option value={0}>Choose voucher</option>
                                        {voucher.map((item) => (
                                            <option
                                                value={item.discount}
                                                key={item._id}
                                                disabled={totalCart < item.condition}
                                            >
                                                {item.discount}%
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <input
                                    type="submit"
                                    className={cx('finish')}
                                    value="Order"
                                />
                            </form>
                        </div>
                        <div className={cx('cart', 'c-4')}>
                            <div className={cx('cartTitle')}>Your Cart</div>
                            <div className={cx('cartList')}>
                                {cart.map((item) => (
                                    <div
                                        className={cx('cartItem')}
                                        key={item._id}
                                    >
                                        <div className={cx('itemContent')}>
                                            <div className={cx('itemName')}>{item.name}</div>
                                            <div className={cx('itemQnt')}>
                                                <div className={cx('qnt')}>{item.amount}</div>
                                                <div>x</div>
                                                <div className={cx('price')}>{formatter.format(item.price)}</div>
                                            </div>
                                        </div>
                                        <div className={cx('totalItem')}>
                                            {formatter.format(item.price * item.amount)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('vouc')}>
                                <div className={cx('voucTitle')}>Voucher {vouc}%</div>
                                <div className={cx('vouncValue')}>{formatter.format(totalCart * vouc * 0.01)}</div>
                            </div>
                            <div className={cx('totalCart')}>
                                <div className={cx('totalTitle')}>Total</div>
                                <div className={cx('totalPrice')}>{formatter.format(totalBill)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
