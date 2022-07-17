import { useState, useEffect } from 'react'
import styles from './UserAction.module.css'
import classnames from 'classnames/bind'
import { memo } from 'react'
import { apiCancelOrder, getListOrderByUserId } from '../../../api/orderAPI'
import { formatter } from '../../../utils/tool'
import { showSuccessToast } from '../../../utils/toastMessage'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { apiChangePassword } from '../../../api/userAPI'

const cx = classnames.bind(styles)

const stateOrder = [
    {
        id: 0,
        value: 'Pending',
    },
    {
        id: 3,
        value: 'Delivering',
    },
    {
        id: 2,
        value: 'Success',
    },
    {
        id: 1,
        value: 'Cancel',
    },
]
function UserAction({ user, changePass, orders, title }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [active, setActive] = useState({ id: 0, value: 'Pending' })
    const [order, setOrder] = useState([]);
    const currentUser = useSelector((state) => state.user.inforUser)
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const orderOProStatus = order.filter((item) => item.status === active.id)
    useEffect(() => {
        loadOrders()
    }, [])
    const loadOrders = async () => {
        const res = await getListOrderByUserId({ id: currentUser.id })
        setOrder([...res.data])
    }
    const handleCancelOrder = async (reqBody) => {
        const res = await apiCancelOrder(reqBody)
        if (res.data) {
            showSuccessToast('Delete Success', 'Success', 'success')
        }
        await loadOrders();
    }
    const handleDeCrePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleInCrePage = () => {
        if (currentPage * 2 <= orderOProStatus.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleChangePassword = async () => {
        if(confirmPassword !== newPassword) {
            showSuccessToast("Mật khẩu xác nhận không chính xác!", "Cảnh báo", "error");
        }else{
            const res = await apiChangePassword({passwordOld: password, passwordNew: newPassword});
            if(res.status === 201 ){
                showSuccessToast("Thay đổi mật khẩu thành công", "Thành công", "success");
            }else{
                showSuccessToast("Có lỗi xảy ra, vui lòng thử lại!", "Cảnh báo", "error");
            }
        }
        setTimeout(() => {
            window.location.replace('/');
        }, 1000)
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contentTitle')}>{title}</div>
            {!!user && (
                <div>
                    <div className={cx('userTitle')}>
                        <div className={cx('subUserTitle')}>Name:</div>
                        <div>{user.name}</div>
                    </div>
                    <div className={cx('userTitle')}>
                        <div className={cx('subUserTitle')}>Email:</div>
                        <div>{user.email}</div>
                    </div>
                    <div className={cx('userTitle')}>
                        <div className={cx('subUserTitle')}>Address:</div>
                        <div>{user.address}</div>
                    </div>
                    <div className={cx('userTitle')}>
                        <div className={cx('subUserTitle')}>Phone:</div>
                        <div>{user.phoneNumber}</div>
                    </div>
                </div>
            )}
            {!!changePass && (
                <div>
                    <div className={cx('passTitle')}>
                        <div className={cx('subPassTitle')}>Current Password </div>
                        <input type="password" className={cx('currentPass')} 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value.trim())}
                        />
                    </div>
                    <div className={cx('passTitle')}>
                        <div className={cx('subPassTitle')}>New Password </div>
                        <input type="password" className={cx('newPass')} 
                        value={newPassword}
                        onChange={(e)=> setNewPassword(e.target.value.trim())}
                        />
                    </div>
                    <div className={cx('passTitle')}>
                        <div className={cx('subPassTitle')}>Confirm Password </div>
                        <input type="password" className={cx('confirmPass')}
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value.trim())}
                        />
                    </div>
                    <div style={{marginLeft: '70%'}}
                        className={cx('cancelPro')}
                        onClick={handleChangePassword}
                    >
                        Change
                    </div>
                </div>
            )}
            {!!orders && (
                <div>
                    <div className={cx('orderType', 'row', 'no-gutters')}>
                        {stateOrder.map((item) => (
                            <div
                                className={cx('orderItem', 'col', active.value === item.value && 'active')}
                                key={item.id}
                                onClick={() => {
                                    setActive({ ...item, value: item.value })
                                }}
                            >
                                {item.value}
                            </div>
                        ))}
                    </div>
                    <div className={cx('orderContent')}>
                        {orderOProStatus.slice(2 * (currentPage - 1), 2 * currentPage).map((item) => (
                            <div
                                className={cx('orderPro')}
                                key={item._id}
                            >
                                <div className={cx('proOrders')}>
                                    {item.products.map((pro, index) => (
                                        <div
                                            className={cx('proCnt')}
                                            key={pro._id}
                                        >
                                            <div className={cx('imgPro')}>
                                                <img
                                                    src={pro.linkImg[0]}
                                                    alt="Anh"
                                                />
                                            </div>
                                            <div className={cx('infoPro')}>{pro.name}</div>
                                            <div className={cx('infoPro')}>Size: {item.size[index]}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('totalAndCancel')}>
                                    <div className={cx('totalOrder')}>
                                        <div className={cx('totalTitle')}>Total:</div>
                                        <span className={cx('orderPrice')}>{formatter.format(item.totalPrice)}</span>
                                    </div>
                                    <div className={cx('actionPro')}>
                                        {active.id === 0 && (
                                            <div
                                                className={cx('cancelPro')}
                                                onClick={() => {
                                                    handleCancelOrder({ _id: item._id, data:{status: 1} })
                                                }}
                                            >
                                                Cancel
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('changePage')}>
                        <div
                            className={cx('preBtn')}
                            onClick={handleDeCrePage}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('pagePro')}>{currentPage}</div>
                        <div
                            className={cx('nextBtn')}
                            onClick={handleInCrePage}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default memo(UserAction)
