import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faXmark,
    faCartShopping,
    faMoneyCheck,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)
function Header() {
    const [isFixed, setIsFixed] = useState(false)
    const [isOCCart, setIsOCCart] = useState(false)
    const userInfor = useSelector(state => state.user)
    const handleScroll = (event) => {
        if (event.wheelDelta < 0 || window.scrollY === 0) {
            setIsFixed(false)
        } else {
            setIsFixed(true)
        }
    }
    const handleOCCart = () => {
        setIsOCCart(!isOCCart)
    }
    const handleInputSearch = (event) => {}
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
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
                                            src="anh1.png"
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
                                {userInfor.isLogin ? (
                                    <>
                                        <div className={cx('user')}>
                                            <Link to="/user">
                                                <FontAwesomeIcon icon={faUserCircle} />
                                            </Link>
                                        </div>
                                        <div
                                            className={cx('cart')}
                                            onClick={handleOCCart}
                                        >
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            <div className={cx('count')}>1</div>
                                        </div>
                                        <div className={cx('loggout')}>
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
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
            <div className={cx('viewCart', isOCCart && 'show')}>
                <div
                    className={cx('overlay')}
                    onClick={handleOCCart}
                ></div>
                <div className={cx('cartWrapper')}>
                    <div
                        className={cx('btnClose')}
                        onClick={handleOCCart}
                    >
                        <FontAwesomeIcon
                            className={cx('btnCloseIcon')}
                            icon={faXmark}
                        />
                    </div>
                    <div className={cx('cartContent')}>
                        <div className={cx('cartPro')}>
                            <div className={cx('cartProImg')}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                                    alt="Anh1"
                                />
                            </div>
                            <div className={cx('cartDesc')}>
                                <div className={cx('cartName')}>Nike</div>
                                <div className={cx('cartQnt')}>
                                    <div className={cx('qnt')}>1</div>
                                    <div>x</div>
                                    <div className={cx('price')}>$70.00</div>
                                </div>
                            </div>
                            <div className={cx('cartProAction')}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        </div>
                        <div className={cx('cartTotal')}>
                            <div className={cx('totalTitle')}>Total</div>
                            <div className={cx('priceTotal')}>$70.00</div>
                        </div>
                        <div className={cx('cartAction')}>
                            <Link
                                to="/cart"
                                className={cx('toViewCart')}
                            >
                                <FontAwesomeIcon
                                    className={cx('iconAction')}
                                    icon={faCartShopping}
                                />
                                View Cart
                            </Link>
                            <Link
                                to="/checkout"
                                className={cx('toCheckOut')}
                            >
                                <FontAwesomeIcon
                                    className={cx('iconAction')}
                                    icon={faMoneyCheck}
                                />
                                Check Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
