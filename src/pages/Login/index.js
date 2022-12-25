import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames/bind'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { apiLogin, apiRegister } from '../../api/userAPI'
import { loginSuccess } from '../../features/user/userSlice'
import { isValidateAccount, isValidEmail } from '../../utils/format'
import { showSuccessToast } from '../../utils/toastMessage'
import styles from './Login.module.css'
const cx = classnames.bind(styles)

function Login() {
    const [isRegister, setIsRegister] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    const dispatch = useDispatch()

    const handleLoginOrRegister = async (values) => {
        const {email, password, name} = values
        if (isRegister) {
            const res = await apiRegister({ email, password, name })
            if (res.data.status === 1) {
                dispatch(loginSuccess(res.data.user))
                localStorage.setItem('accessToken', res.data.accessToken)
                window.location.replace('/');
                showSuccessToast('Chào mừng bạn đã đến với cửa hàng', 'Tạo tài khoản thành công', 'success')
            } else {
                showSuccessToast('Email đã được dùng!', 'Tạo tài khoản thất bại', 'error')
            }
        } else {
            const res = await apiLogin({ email, password })
            if (res.data.status === 1) {
                dispatch(loginSuccess(res.data.userFormatted))
                localStorage.setItem('accessToken', res.data.accessToken)
                window.location.replace('/');
                showSuccessToast('Chào mừng bạn đã quay trở lại', 'Đăng nhập thành công', 'success')
            } else {
                showSuccessToast('Email hoặc mật khẩu không chính xác!', 'Đăng nhập thất bại', 'error')
            }
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form onSubmit={handleSubmit(values => handleLoginOrRegister(values))}>
                    <div className={cx('formContainer')}>
                        <div className={cx('loginText')}>
                            <div className={cx('loginIcon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className={cx('loginDesc')}>Please login using account detail below</div>
                        </div>
                        <div
                            className={cx('loginForm')}
                            style={{ width: '350px' }}
                        >
                            <div className={cx("form-item")}>
                                <label
                                    htmlFor="email"
                                    className={cx('placeHolder')}
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className={cx('email')}
                                    autoFocus
                                    {...register("email", { required: true, validate: (email) => isValidEmail(email) })}
                                />
                                {errors.email?.type === "validate" && <div className={cx('error-message')}>Email is valid!</div>}
                            </div>
                            {isRegister && (
                                <div className={cx("form-item")}>
                                    <label
                                        htmlFor="name"
                                        className={cx('placeHolder')}
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        className={cx('name')}
                                        autoFocus
                                        {...register("name",  {required: true, validate: (name) => isValidateAccount(name)})}
                                    />
                                    {errors.name?.type === "validate" && <div className={cx("error-message")}>Account name cannot contain special characters!</div> }
                               </div>
                            )}
                            <div className={cx('form-item')}>
                                <label
                                    htmlFor="password"
                                    className={cx('placeHolder')}
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className={cx('password')}
                                    type="password"
                                    {...register("password", {required: true, minLength: 6})}
                                />
                                {errors.password?.type === "required" && <div className={cx('error-message')}>Password is required!</div> }
                                {errors.password?.type === "minLength" && <div className={cx('error-message')}>Password must be at least 6 characters!</div> }
                            </div>
                        </div>

                        <div className={cx('actionSubmit')}>
                            <button className={cx('submit')} type="submit" onSubmit={handleSubmit(values => handleLoginOrRegister(values))}>{isRegister ? 'Sign up' : 'Sign In'}</button>
                            <br />
                            {isRegister ? (
                                <span>
                                    Bạn đã có tài khoản?{' '}
                                    <span
                                        style={{ color: '#d8355a', cursor: 'pointer' }}
                                        onClick={() => setIsRegister(false)}
                                    >
                                        Đăng nhập
                                    </span>
                                </span>
                            ) : (
                                <span>
                                    Bạn chưa có tài khoản?{' '}
                                    <span
                                        style={{ color: '#d8355a', cursor: 'pointer' }}
                                        onClick={() => setIsRegister(true)}
                                    >
                                        Đăng ký
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
