import classNames from 'classnames/bind'
import styles from './DetailProduct.module.css'
import { useState } from 'react'
const cx = classNames.bind(styles)

function DetailProduct() {
    const [qnt, setQnt] = useState(1)

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('contentPro', 'row')}>
                    <div className={cx('imgPro', 'col', 'c-6')}>
                        <div className={cx('mainImg')}>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                                alt="anh"
                            />
                        </div>
                        <div className={cx('otherImg', 'row')}>
                            <div className={cx('img1', 'col', 'c-3')}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                                    alt="anh"
                                />
                            </div>
                            <div className={cx('img2', 'col', 'c-3')}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0265/2146/8985/products/116_2075a1ce-d97d-4b89-bb50-6ed97c1c396f_360x.jpg?v=1652777580"
                                    alt="anh"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('imgDetail', 'col', 'c-6')}>
                        <div className={cx('namePro')}>Nike</div>
                        <div className={cx('codePro')}>SKU: 1110</div>
                        <div className={cx('pricePro')}>$70.00</div>
                        <div className={cx('sizePro')}>
                            <div className={cx('sizeTitle')}>Size:</div>
                            <div className={cx('sizeDetail', 'activeSize')}>38</div>
                            <div className={cx('sizeDetail')}>39</div>
                            <div className={cx('sizeDetail')}>40</div>
                            <div className={cx('sizeDetail')}>42</div>
                        </div>
                        <div className={cx('actionPro')}>
                            <div className={cx('qntPro')}>
                                <div className={cx('qntTitle')}>Quantity: </div>
                                <div className={cx('qntAction')}>
                                    <div
                                        className={cx('qntDecre')}
                                        onClick={() => {
                                            if (qnt > 1) {
                                                setQnt(qnt - 1)
                                            }
                                        }}
                                    >
                                        -
                                    </div>
                                    <div className={cx('qnt')}>{qnt}</div>
                                    <div
                                        className={cx('qntIncre')}
                                        onClick={() => setQnt(qnt + 1)}
                                    >
                                        +
                                    </div>
                                </div>
                            </div>
                            <div className={cx('addToCart')}>Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
