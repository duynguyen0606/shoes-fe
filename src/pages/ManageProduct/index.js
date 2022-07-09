import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiAddProduct, apiDeleteProduct, apiUpdateProduct } from "../../api/productAPI"
import Modal from "../../components/Modal"
import { addProduct, deleteProduct, updateProduct } from "../../features/product/productSlice"
import { showSuccessToast } from "../../utils/toastMessage"
import styles from './ManageProduct.module.css'

const cx = classNames.bind(styles)

const ManageProduct = () => {
    const productList = useSelector((state) => state.products.products);
    const [openModal, setOpenModal] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [proDetail, setProDetail] = useState(undefined);
    const [openModalConfirm, setOpenModalConfirm] = useState(false);
    const [itemDelete, setItemDelete] = useState({});
    const dispatch = useDispatch();
    const handleInputSearch = (value) => {
        setValueSearch(value)
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }
    const handleAddNewProduct =async (data = {}, _id = undefined, isModalConfirm = false) => {
        if(isModalConfirm) {
            const res = await apiDeleteProduct({_id: itemDelete._id});
            if(res.status===200){
                dispatch(deleteProduct({_id: itemDelete._id}))
                showSuccessToast('Xóa sản phẩm thành công', 'Thông báo', 'success');
            }else{
                showSuccessToast('Có lỗi xảy ra vui lòng thử lại!', 'Lỗi!', 'error');
            }
            setItemDelete({});
            setOpenModalConfirm(false)
            onCloseModal()
        }else{
            if(_id !== undefined){
            const res = await apiUpdateProduct({_id,data});
            dispatch(updateProduct(res.data));
            showSuccessToast('Cập nhật sản phẩm thành công', 'Thông báo', 'success');
            onCloseModal();
            }else{
                const res = await apiAddProduct(data);
                dispatch(addProduct(res.data));
                showSuccessToast('Thêm sản phẩm thành công', 'Thông báo', 'success');
                onCloseModal();
            }
        }
        
       
    }

    const handleDeleteItem = (item) => {
        setItemDelete(item)
        setOpenModalConfirm(true);
        setOpenModal(true);
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '6rem 2rem'}}>
            <div className={cx('mainRight')}>
                <button style={{padding: '1rem 2rem', backgroundColor: '#d8355a', width: '135px', color: '#fff', cursor: 'pointer'}} onClick={() => setOpenModal(true)}>
                    Thêm mới
                </button>
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
                            style={{margin: 0}}
                            
                        />
                        <div className={cx('searchIcon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </form>
                </div>
                    
                
            </div>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Màu sắc</th>
                    <th>Size</th>
                    <th>Link ảnh</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Tùy chọn</th>
                </tr>
                {
                    (productList.filter(item => item.name.includes(valueSearch))).map((item, index) => (
                        <tr key={index} onDoubleClick={() => {
                            setProDetail(item);
                            setOpenModal(true);
                        }} >
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.size.map(el => el.size).join(', ')}</td>
                            <td>{item.linkImg[0]},
                                <br />
                                {item.linkImg[1]}
                            </td>
                            <td style={{textAlign: 'center'}}>
                                <img alt={index} src={item.linkImg[0]} style={{width: '40%'}}/>
                            </td>
                            <td style={{textAlign: 'center'}}>
                                <button style={{color: 'red', textDecoration: 'underline', border: 'none', cursor: 'pointer'}} onClick={() => handleDeleteItem(item)}>Xóa</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            {openModal&&<Modal onCloseModal={onCloseModal} title="Thông tin sản phẩm" onSubmit={handleAddNewProduct} dataPro={proDetail} isModalConfirm={openModalConfirm}/>}
        </div>
    )
}
export default ManageProduct;