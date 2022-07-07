import { useState, useEffect } from 'react'
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
    const products = useSelector((state) => state.products.products)
    const [currentPage, setCurrentPage] = useState(1)
    // useEffect(() => {
    //     const handleChangePage = () => {
    //         productsRender = products.filter((product) => {
    //             return true
    //         })
    //     }
    //     handleChangePage()
    // }, [currentPage])

    const handleDeCrePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleInCrePage = () => {
        if (currentPage * 8 <= products.length) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <Navbar name={'products'} />
            <div className="grid wide">
                <div className={cx('content', 'row')}>
                    {products.slice(8 * (currentPage - 1), 8 * currentPage).map((product) => {
                        return (
                            <div
                                className={cx('item', 'l-3', 'col', 'm-4', 'c-6')}
                                key={product._id}
                            >
                                <Link to={`/detail/${product._id}`}>
                                    <Item product={product} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className={cx('changePage')}>
                    <div
                        className={cx('preBtn')}
                        onClick={handleDeCrePage}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className={cx('pagePro')}>{currentPage}</div>
                    <div
                        className={cx('nextBtn')}
                        onClick={handleInCrePage}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
