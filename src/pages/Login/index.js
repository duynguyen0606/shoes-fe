import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames/bind'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { apiLogin } from '../../api/userAPI'
import { loginSuccess } from '../../features/user/userSlice'
import { showSuccessToast } from '../../utils/toastMessage'
import styles from './Login.module.css'
import Register from '../Register'
const cx = classnames.bind(styles)

function Login() {
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const handleLoginOrRegister = async  (e) => {
        e.preventDefault();
        if(register) {

        }else{
            const res = await apiLogin({email, password});
            console.log(res)
            if(res.data.status === 1){
                dispatch(loginSuccess(res.data.userFormatted))
                localStorage.setItem('accessToken', res.data.accessToken);
                navigation('/');
                showSuccessToast("Chào mừng bạn đã quay trở lại", "Đăng nhập thành công", "success")
            }else{
                showSuccessToast("Email hoặc mật khẩu không chính xác!", "Đăng nhập thất bại", "error")
            }
        }
        

    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form onSubmit={(e)=>handleLoginOrRegister(e)}>
                    <div className={cx('formContainer')}>
                        <div className={cx('loginText')}>
                            <div className={cx('loginIcon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className={cx('loginDesc')}>Please login using account detail below</div>
                        </div>
                        <div className={cx('loginForm')} style={{width: '350px'}}>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {register&&<><label
                                htmlFor="name"
                                className={cx('placeHolder')}
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                className={cx('email')}
                                type="text"
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /></>}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <div className={cx('actionSubmit')}>
                            <button className={cx('submit')} >{register?'Sign up':'Sign In'}</button>
                            <br />
                            {
                                register?<span>Bạn đã có tài khoản? <span style={{color: '#d8355a', cursor: 'pointer'}} onClick={() => setRegister(false)}>Đăng nhập</span></span>:
                                <span>Bạn chưa có tài khoản? <span style={{color: '#d8355a', cursor: 'pointer'}} onClick={() => setRegister(true)}>Đăng ký</span></span>
                            }
                        </div>
                            
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
