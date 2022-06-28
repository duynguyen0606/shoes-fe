import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import styles from './Product.module.css'
import Item from '../../components/Item/'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
function Product() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className="grid wide">
                <div className={cx('content', 'row')}>
                    <div className={cx('item', 'c-3', 'col')}>
                        <Link to="/detail">
                            <Item />
                        </Link>
                    </div>
                    <div className={cx('item', 'c-3', 'col')}>
                        <Link to="/detail">
                            <Item />
                        </Link>
                    </div>
                    <div className={cx('item', 'c-3', 'col')}>
                        <Link to="/detail">
                            <Item />
                        </Link>
                    </div>
                    <div className={cx('item', 'c-3', 'col')}>
                        <Link to="/detail">
                            <Item />
                        </Link>
                    </div>
                    <div className={cx('item', 'c-3', 'col')}>
                        <Link to="/detail">
                            <Item />
                        </Link>
                    </div>
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
