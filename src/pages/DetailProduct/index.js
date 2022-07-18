import classNames from 'classnames/bind'
import styles from './DetailProduct.module.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { formatter } from '../../utils/tool'
import { addProductToCart, updateCart } from '../../features/cart/cartSlice'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { createNewFeedbackApi, getAllFeedbackByProApi } from '../../api/feedbackAPI'
import { showSuccessToast } from '../../utils/toastMessage'
const cx = classNames.bind(styles)

function DetailProduct() {
    const dispatch = useDispatch()
    const [qnt, setQnt] = useState(1)
    const param = useParams()
    const products = useSelector((state) => state.products.products)
    const userInfor = useSelector((state) => state.user.inforUser)
    const detailProduct = products.filter((product) => product._id === param.id)[0]
    const cart = useSelector((state) => state.cart.products || [])
    const [feedbacks, setFeedbacks] = useState([])
    const [newFeedback, setNewFeedback] = useState('')
    const [size, setSize] = useState(detailProduct.size[0].size)
    const [imgPro, setImgPro] = useState(detailProduct.linkImg[0])
    const [active, setActive] = useState(0)
    useEffect(() => {
        loadFeedback()
    }, [])

    const loadFeedback = async () => {
        const res = await getAllFeedbackByProApi({ productId: param.id })
        console.log(res)
        setFeedbacks(res.data)
    }

    const handleSendComment = async () => {
        const res = await createNewFeedbackApi({
            content: newFeedback,
            owner: userInfor.id,
            productId: param.id,
        })
        if (res.status === 200) {
            showSuccessToast('Gửi feedback thành công', 'Thành công', 'success')
        } else {
            showSuccessToast('Có lỗi xảy ra, vui lòng thử lại!', 'ERROR', 'error')
        }
        loadFeedback()
    }

    const handleAddCart = (product, qnt) => {
        const productNew = { ...product, amount: qnt }
        if (
            cart.some((item) => {
                return product._id === item._id && product.size === item.size
            })
        ) {
            dispatch(updateCart(productNew))
        } else {
            dispatch(addProductToCart(productNew))
        }
        showSuccessToast('Add product success', 'Success', 'success')
    }
    return (
        <div className={cx('wrapper')}>
            <Navbar
                name={detailProduct.name}
                disable={true}
            />
            <div
                className="grid wide"
                style={{ minHeight: '500px' }}
            >
                <div className={cx('contentPro', 'row')}>
                    <div className={cx('imgPro', 'col', 'c-6')}>
                        <div className={cx('mainImg')}>
                            <img
                                src={imgPro}
                                alt="anh"
                            />
                        </div>
                        <div className={cx('otherImg', 'row')}>
                            {detailProduct.linkImg.map((imgItem, index) => (
                                <div
                                    key={index}
                                    className={cx('img1', 'col', 'c-3', active === index && 'active')}
                                    onClick={() => {
                                        setActive(index)
                                        setImgPro(imgItem)
                                    }}
                                >
                                    <img
                                        src={imgItem}
                                        alt="anh"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('imgDetail', 'col', 'c-6')}>
                        <div className={cx('namePro')}>{detailProduct.name}</div>
                        <div className={cx('codePro')}>SKU: 1110</div>
                        <div className={cx('pricePro')}>{formatter.format(detailProduct.price)}</div>
                        <div className={cx('sizePro')}>
                            <div className={cx('sizeTitle')}>Size:</div>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                style={{ width: '100px', marginLeft: '5px' }}
                            >
                                {detailProduct.size.map((item) => {
                                    return (
                                        <option
                                            className={cx('sizeDetail')}
                                            key={item.size}
                                            value={item.size}
                                        >
                                            {item.size}
                                        </option>
                                    )
                                })}
                            </select>
                            {/* <div className={cx('sizeDetail', 'activeSize')}>38</div> */}
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
                            <div
                                className={cx('addToCart')}
                                onClick={() => {
                                    handleAddCart({ ...detailProduct, size }, qnt)
                                }}
                            >
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('feedback')}>
                    Đánh giá sản phẩm
                    <div style={{ display: 'flex' }}>
                        <input
                            value={newFeedback}
                            onChange={(e) => setNewFeedback(e.target.value)}
                            type="text"
                            placeholder="Vui lòng nhập đánh giá tại đây"
                        />
                        <button
                            style={{
                                color: '#fff',
                                padding: '1rem 2rem',
                                margin: '8px 0 8px 2rem',
                                backgroundColor: '#d8355a',
                                cursor: 'pointer',
                            }}
                            onClick={handleSendComment}
                        >
                            Gửi
                        </button>
                    </div>
                    {feedbacks.map((item) => {
                        return (
                            <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '2rem 0' }}>
                                <div>
                                    <div className={cx('avatar')}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {item.owner.name}
                                        <br />
                                        <small>
                                            {new Date(item.createdAt).toLocaleDateString('en-us', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </small>
                                    </div>
                                    <div>{item.content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
