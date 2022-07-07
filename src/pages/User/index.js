import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './User.module.css'

const cx = classNames.bind(styles)

function User() {
    const userInfor = useSelector(state => state.user)
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    {userInfor.isLogin?
                    <>
                        <aside className={cx('sideBar', 'c-3')}>
                            <div className={cx('account')}>Account User</div>
                            <div className={cx('profile', 'active')}>Profile User</div>
                            <div className={cx('changePass')}>Change Password</div>
                            <div className={cx('orders')}>Orders</div>
                        </aside>
                        <div className={cx('content', 'c-9')}>
                            <div className={cx('contentView')}>
                                <div className={cx('contentTitle')}>My Profile</div>
                                <div className={cx('name')}>
                                    <div className={cx('nameTitle')}>Name:</div>
                                    <div>{userInfor.inforUser.name}</div>
                                </div>
                                <div className={cx('email')}>
                                    <div className={cx('emailTitle')}>Email:</div>
                                    <div>{userInfor.inforUser.email}</div>
                                </div>
                                <div className={cx('address')}>
                                    <div className={cx('addressTitle')}>Address:</div>
                                    <div>{userInfor.inforUser.address}</div>
                                </div>
                                <div className={cx('address')}>
                                    <div className={cx('addressTitle')}>Phone:</div>
                                    <div>{userInfor.inforUser.phone}</div>
                                </div>
                            </div>
                        </div>
                    </>: 
                    <div>Vui lòng <Link to="/login">đăng nhập</Link>/<Link to="/register">đăng ký</Link> tài khoản để tiếp tục</div>}
                </div>
            </div>
        </div>
    )
}

export default User
