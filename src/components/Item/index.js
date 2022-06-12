import classNames from 'classnames/bind'
import styles from './Item.module.css'

const cx = classNames.bind(styles)

function Item() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('imgPro')}>
                <img
                    className={cx('imgChange')}
                    src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                    alt="Nike"
                />
                <img
                    src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/product4_c2c35951-c391-4e42-9ff9-a878da28fdd8_360x.jpg?v=1586928336"
                    alt="Nike"
                />
            </div>
            <div className={cx('decs')}>
                <div className={cx('name')}>Nike</div>
                <div className={cx('price')}>$70.00</div>
            </div>
        </div>
    )
}

export default Item
