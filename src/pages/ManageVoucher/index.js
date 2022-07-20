import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { addNewVoucherApi, deleteVoucherApi, getListVoucherApi } from '../../api/voucherAPI'
import Modal from '../../components/Modal'
import { showSuccessToast } from '../../utils/toastMessage'
import { formatter } from '../../utils/tool'
import styles from './ManageVoucher.module.css'

const cx = classNames.bind(styles)

const ManageVoucher = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openModalConfirm, setOpenModalConfirm] = useState(false)
    const [itemDelete, setItemDelete] = useState({})
    const [listVoucher, setListVoucher] = useState([])
    const [isModalVoucher, setIsModalVoucher] = useState(false)

    useEffect(() => {
        loadAllVoucher()
    }, [])

    const loadAllVoucher = async () => {
        const res = await getListVoucherApi()
        setListVoucher(res.data)
    }

    const onCloseModal = () => {
        setIsModalVoucher(false)
        setOpenModal(false)
    }
    const handleAddNewVoucher = async (data = {}, isModalConfirm = false) => {
        if (isModalConfirm) {
            const res = await deleteVoucherApi({ id: itemDelete._id })
            if (res.status === 200) {
                showSuccessToast('Xóa sản phẩm thành công', 'Thông báo', 'success')
            } else {
                showSuccessToast('Có lỗi xảy ra vui lòng thử lại!', 'Lỗi!', 'error')
            }
            setItemDelete({})
            setOpenModalConfirm(false)
            onCloseModal()
            loadAllVoucher()
        } else {
            const res = await addNewVoucherApi(data)
            showSuccessToast('Thêm sản phẩm thành công', 'Thông báo', 'success')
            onCloseModal()
            loadAllVoucher()
        }
    }

    const handleDeleteItem = (item) => {
        setItemDelete(item)
        setIsModalVoucher(false)
        setOpenModalConfirm(true)
        setOpenModal(true)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '6rem 2rem' }}>
            <div className={cx('mainRight')}>
                <button
                    style={{
                        padding: '1rem 2rem',
                        backgroundColor: '#d8355a',
                        width: '135px',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setIsModalVoucher(true)
                        setOpenModal(true)
                    }}
                >
                    Thêm mới
                </button>
            </div>
            <table className={cx('tableWrapper')}>
                <tr>
                    <th>STT</th>
                    <th>Giảm giá (%)</th>
                    <th>Điều kiện (giá trị đơn hàng tối thiểu VND)</th>
                    <th>Tùy chọn</th>
                </tr>
                {listVoucher.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.discount}</td>
                        <td>{formatter.format(item.condition)}</td>
                        <td style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    color: 'red',
                                    textDecoration: 'underline',
                                    border: 'none',
                                    cursor: 'pointer',
                                    background: '#fff',
                                    fontSize: '1.8rem',
                                }}
                                onClick={() => handleDeleteItem(item)}
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
            {openModal && (
                <Modal
                    onCloseModal={onCloseModal}
                    title="Thông tin Voucher"
                    onSubmit={handleAddNewVoucher}
                    isModalConfirm={openModalConfirm}
                    isModalVoucher={isModalVoucher}
                />
            )}
        </div>
    )
}
export default ManageVoucher
