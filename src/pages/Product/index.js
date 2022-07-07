import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import styles from './Product.module.css'
import Item from '../../components/Item/'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const cx = classNames.bind(styles)
function Product() {
    const products = useSelector(state => state.products.products);
    return (
        <div className={cx('wrapper')}>
            <Navbar name={"products"}/>
            <div className="grid wide">
                <div className={cx('content', 'row')}>
                    {products.map((product) => {
                        return (
                            <div className={cx('item', 'c-3', 'col')}>
                                <Link to={`/detail/${product._id}`}>
                                    <Item product={product}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className={cx('changePage')}>
                    <div className={cx('preBtn')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className={cx('pagePro')}>1</div>
                    <div className={cx('pageProNext')}>2</div>
                    <div className={cx('nextBtn')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
