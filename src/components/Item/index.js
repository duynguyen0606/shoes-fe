import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { formatter } from '../../utils/tool'
import styles from './Item.module.css'

const cx = classNames.bind(styles)

function Item({ product }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/detail/${product?._id}`}>
                <div className={cx('imgPro')}>
                    <img
                        className={cx('imgChange')}
                        src={product?.linkImg[0]}
                        alt="Nike"
                    />
                    <img
                        src={product?.linkImg[1]}
                        alt="Nike"
                    />
                </div>
                <div className={cx('decs')}>
                    <div className={cx('name')}>{product?.name}</div>
                    <div className={cx('price')}>{formatter.format(product?.price)}</div>
                </div>
            </Link>
        </div>
    )
}

export default Item
