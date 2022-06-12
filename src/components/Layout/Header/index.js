import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
// import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const cx = classNames.bind(styles)
function Header({ }) {
    const [isFixed, setIsFixed] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const handleScroll = (event) => {
        if (event.wheelDelta < 0 || window.scrollY === 0) {
            setIsFixed(false)
        } else {
            setIsFixed(true)
        }
    }
    const handleInputSearch = (event) => {}
    window.addEventListener('scroll', handleScroll)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapperTop')}>
                <div className={cx('title', 'grid', 'wide')}>Welcome to T20 store</div>
            </div>
            <div className={cx('wrapperBottom', isFixed && 'sticky')}>
                <div className="grid wide">
                    <div className={cx('main')}>
                        <div className={cx('mainLeft')}>
                            <div className={cx('logo')}>
                                <Link to="/">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0265/2146/8985/files/logo2_150x.png?v=1652677494"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('mainCenter')}>
                            <Link
                                to="/"
                                className={cx('home')}
                            >
                                Home
                            </Link>
                            <Link
                                to="/product"
                                className={cx('product')}
                            >
                                Product
                            </Link>
                            <Link
                                to="/about"
                                className={cx('about')}
                            >
                                About Team
                            </Link>
                        </div>
                        <div className={cx('mainRight')}>
                            <div className={cx('search')}>
                                <form
                                    className={cx('searchForm')}
                                    action="search"
                                >
                                    <input
                                        className={cx('searchInput')}
                                        autoFocus={true}
                                        type="text"
                                        spellCheck={false}
                                        placeholder="Search for the product you want..."
                                        onChange={(e) => {
                                            handleInputSearch(e.target.value)
                                        }}
                                    />
                                    <div className={cx('searchIcon')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                </form>
                            </div>
                            {isLogin ? (
                                <>
                                    <div className={cx('user')}>
                                        <Link to="/user">
                                            <FontAwesomeIcon icon={faUserCircle} />
                                        </Link>
                                    </div>
                                    <div className={cx('cart')}>
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                        <div className={cx('count')}>1</div>
                                    </div>
                                </>
                            ) : (
                                <button className={cx('login')}>
                                    <Link to="/login">Login</Link>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
