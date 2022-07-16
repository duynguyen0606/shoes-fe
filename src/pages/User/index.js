import classNames from 'classnames/bind'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './User.module.css'
import UserAction from './UserAction'

const cx = classNames.bind(styles)
const userFeatures = [
    {
        id: 1,
        title: 'Profile',
    },
    {
        id: 2,
        title: 'Change Password',
    },
    {
        id: 3,
        title: 'Orders',
    },
]
function User() {
    const userInfor = useSelector((state) => state.user)
    const [active, setActive] = useState({ id: 1, title: 'Profile' })

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    {userInfor.isLogin ? (
                        <>
                            <aside className={cx('sideBar', 'c-3')}>
                                <div className={cx('account')}>My Account</div>
                                {userFeatures.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cx('userFeature', active.title === item.title && 'active')}
                                        onClick={() => {
                                            setActive({ ...item, title: item.title })
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </aside>
                            <div className={cx('content', 'c-9')}>
                                <div className={cx('contentView')}>
                                    <UserAction
                                        title={active.title}
                                        user={active.id === 1 && userInfor.inforUser}
                                        changePass={active.id === 2}
                                        orders={active.id === 3}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>
                            Vui lòng <Link to="/login">đăng nhập</Link>/<Link to="/register">đăng ký</Link> tài khoản để
                            tiếp tục
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default User
