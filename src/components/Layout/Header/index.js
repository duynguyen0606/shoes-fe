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
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import { formatter } from '../../../utils/tool'
import { faUserCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductInCart } from '../../../features/cart/cartSlice'

const cx = classNames.bind(styles)
function Header() {
    const dispatch = useDispatch()
    const [isFixed, setIsFixed] = useState(false)
    const [isOCCart, setIsOCCart] = useState(false)
    const [isOCMenu, setIsOCMenu] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const userInfor = useSelector((state) => state.user)
    const producList = useSelector((state) => state.products.products)
    const cart = useSelector((state) => state.cart.products || [])
    const [selectCartItem, setSelectCartItem] = useState({})
    const totalPriceCart = cart.reduce((pre, cur) => {
        return pre + cur.amount * cur.price
    }, 0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
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
    const handleOCMenu = () => {
        setIsOCMenu(!isOCMenu)
    }
    const handleInputSearch = (value) => {
        const data = producList.filter((item) => item.name.includes(value))
        if (value.length === 0) {
            setSearchResult([])
        } else {
            setSearchResult(data)
        }
    }

    const handleRemoveCart = (product) => {
        setSelectCartItem(product)
        dispatch(deleteProductInCart(product))
    }
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
                                            src="logo.png"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            {
                                userInfor.inforUser.role === 1 && 
                                <>
                                    <div className={cx('mainCenter')} style={{width: 'auto'}}>
                                        <Link
                                            to="/"
                                            className={cx('home')}
                                        >
                                            Product
                                        </Link>
                                        <Link
                                            to="/manage-order"
                                            className={cx('product')}
                                        >
                                            Order
                                        </Link> 
                                        <Link
                                            to="/manage-account"
                                            className={cx('product')}
                                        >
                                            Account
                                        </Link>
                                        <Link
                                            to="/manage-voucher"
                                            className={cx('product')}
                                        >
                                            Voucher
                                        </Link>
                                        {userInfor.isLogin ? (
                                            <>
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
                                </>
                            }
                            {userInfor.inforUser.role !==1 && 
                            <>
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
                                            onFocus={(e) => {
                                                handleInputSearch(e.target.value)
                                            }}
                                            onBlur={(e) => {
                                                setTimeout(() => {
                                                    setSearchResult([])
                                                }, 500)
                                            }}
                                            style={{margin: 0}}
                                        />
                                        <div className={cx('searchIcon')}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </div>
                                    </form>
                                    <div className={cx('search-result')}>
                                        {searchResult.length > 0 &&
                                            searchResult.map((item) => {
                                                return (
                                                    <Link to={`/detail/${item._id}`}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                backgroundColor: '#fff',
                                                                padding: '10px',
                                                                borderBottom: '1px #ccc solid',
                                                            }}
                                                        >
                                                            <div style={{ width: '90px' }}>
                                                                <img
                                                                    src={item.linkImg[0]}
                                                                    alt={item.name}
                                                                />
                                                            </div>
                                                            <div style={{ padding: '10px' }}>
                                                                <div>{item.name}</div>
                                                                <span>{item.price}đ</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                    </div>
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
                                            <div className={cx('count')}>{cart.length}</div>
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
                            <div className={cx('mobileVersion')}>
                                <FontAwesomeIcon
                                    className={cx('iconMobile')}
                                    icon={faBars}
                                    onClick={handleOCMenu}
                                />
                                <div className={cx('viewMenuMobile', isOCMenu && 'show')}>
                                    <div
                                        className={cx('overlayMobile')}
                                        onClick={handleOCMenu}
                                    ></div>
                                    <div className={cx('menuWrapper')}>
                                        <div
                                            className={cx('btnClose')}
                                            onClick={handleOCMenu}
                                        >
                                            <FontAwesomeIcon
                                                className={cx('btnCloseIcon')}
                                                icon={faXmark}
                                            />
                                        </div>
                                        <div className={cx('menuContent')}>Heleo</div>
                                    </div>
                                </div>
                            </div></>}
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
                        {cart.length > 0 ? (
                            <>
                                {cart.map((item) => (
                                    <>
                                        <div
                                            className={cx('cartPro')}
                                            key={item._id}
                                        >
                                            <div className={cx('cartProImg')}>
                                                <img
                                                    src={item.linkImg[0]}
                                                    alt="Anh1"
                                                />
                                            </div>
                                            <div className={cx('cartDesc')}>
                                                <div className={cx('cartName')}>{item.name}</div>
                                                <div className={cx('cartQnt')}>
                                                    <div className={cx('qnt')}>{item.amount}</div>
                                                    <div>x</div>
                                                    <div className={cx('price')}>{formatter.format(item.price)}</div>
                                                </div>
                                            </div>
                                            <div
                                                className={cx('cartProAction')}
                                                onClick={() => {
                                                    handleRemoveCart(item)
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </div>
                                        </div>
                                    </>
                                ))}
                                <div className={cx('cartTotal')}>
                                    <div className={cx('totalTitle')}>Total</div>
                                    <div className={cx('priceTotal')}>
                                        {formatter.format(totalPriceCart > 0 ? totalPriceCart : 0)}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={cx('notProductInCart')}>Chưa có sản phẩm nào</div>
                        )}

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
