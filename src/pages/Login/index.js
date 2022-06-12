import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames/bind'
import styles from './Login.module.css'

const cx = classnames.bind(styles)

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form>
                    <div className={cx('formContainer')}>
                        <div className={cx('loginText')}>
                            <div className={cx('loginIcon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className={cx('loginDesc')}>Please login using account detail below</div>
                        </div>
                        <div className={cx('loginForm')}>
                            <label
                                htmlFor="email"
                                className={cx('placeHolder')}
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                className={cx('email')}
                                type="email"
                                spellCheck={false}
                                autoFocus
                            />
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
                            />
                        </div>
                        <div className={cx('actionSubmit')}>
                            <button className={cx('submit')}>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
