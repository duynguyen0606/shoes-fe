import { faTruckFast, faLifeRing, faArrowRotateLeft, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Item from '../../components/Item'
import styles from './Home.module.css'

const cx = classNames.bind(styles)
const endow = [
    {
        icon: <FontAwesomeIcon icon={faTruckFast} />,
        name: 'Free Shipping',
        desc: 'Free shipping all order',
    },
    {
        icon: <FontAwesomeIcon icon={faLifeRing} />,
        name: 'Support 24/7',
        desc: 'Support 24 hours a day',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRotateLeft} />,
        name: 'Money Return',
        desc: '30 days for free return',
    },
    {
        icon: <FontAwesomeIcon icon={faMoneyCheck} />,
        name: '100% Payment Secure',
        desc: 'We ensure secure payment',
    },
]
function Home() {
    const products = useSelector((state) => state.products.products);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideWrapper')}>
                <div className="grid wide">
                    <div className={cx('slide')}>
                        <div className={cx('slideMain')}>
                            <div className={cx('title')}>The New Collections</div>
                            <div className={cx('desc')}>Shukra Yogam & Silver Power Silver Saving Schemes.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                <div className={cx('endow')}>
                    {endow.map((item, index) => (
                        <div
                            key={index}
                            className={cx('endowItem')}
                        >
                            <div className={cx('endowIcon')}>{item.icon}</div>
                            <div className={cx('endowContent')}>
                                <div className={cx('endowTitle')}>{item.name}</div>
                                <div className={cx('endowDesc')}>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('sale', 'row')}>
                    <div className={cx('saleItem', 'c-3')}>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0265/2146/8985/files/banner_1_360x.png?v=1652776990"
                            alt="Sale"
                        />
                    </div>
                    <div className={cx('saleItem', 'c-6')}>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0265/2146/8985/files/Yellow_White_Minimalist_Modern_New_Arrivals_Shoes_Banner_855_x_525_px_720x.png?v=1652777310"
                            alt="Sale"
                        />
                    </div>
                    <div className={cx('saleItem', 'c-3')}>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0265/2146/8985/files/banner_2_360x.png?v=1652777031"
                            alt="Sale"
                        />
                    </div>
                </div>
                <div className={cx('product')}>
                    <div className={cx('productIntro')}>
                        <div className={cx('productTitle')}>Our Products</div>
                        <div className={cx('productSeeMore')}>
                            <Link to="/product">See More</Link>
                        </div>
                    </div>
                    <div className={cx('productList')}>
                        <div className={cx('productItem', 'c-3', 'col')}>
                            <Item product={products[0]}/>
                        </div>
                        <div className={cx('productItem', 'c-3', 'col')}>
                            <Item product={products[1]}/>
                        </div>
                        <div className={cx('productItem', 'c-3', 'col')}>
                            <Item product={products[2]}/>
                        </div>
                        <div className={cx('productItem', 'c-3', 'col')}>
                            <Item product={products[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
