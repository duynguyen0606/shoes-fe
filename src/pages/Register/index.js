import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames/bind'
import styles from './Register.module.css'

const cx = classnames.bind(styles)

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form>
                    <div className={cx('formContainer')}>
                        <div className={cx('registerText')}>
                            <div className={cx('registerIcon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            
                        </div>
                        <div className={cx('registerForm')}>
                        <label
                                htmlFor="Name"
                                className={cx('placeHolder')}
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                className={cx('name')}
                                type="name"
                            />
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
                            <label
                                htmlFor="password"
                                className={cx('placeHolder')}
                            >
                                Repeat Password
                            </label>
                            <input
                                id="password"
                                className={cx('password')}
                                type="password"
                            />
                        </div>
                        <div> By creating an account you agree to our <a href='#'>Terms & Privacy</a>.</div>

                        <div className={cx('actionSubmit')}>
                            <button className={cx('submit')}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
