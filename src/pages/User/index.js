import classNames from 'classnames/bind'
import styles from './User.module.css'

const cx = classNames.bind(styles)

function User() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
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
                                <div>Tang Manh Dat</div>
                            </div>
                            <div className={cx('email')}>
                                <div className={cx('emailTitle')}>Email:</div>
                                <div>tangdatsdbg@gmail.com</div>
                            </div>
                            <div className={cx('address')}>
                                <div className={cx('addressTitle')}>Address:</div>
                                <div>Ha Noi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
