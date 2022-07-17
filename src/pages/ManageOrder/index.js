import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { getListOrderByAdmin, updateStatusOrderApi } from '../../api/orderAPI'
import styles from './ManageOrder.module.css'
import { showSuccessToast } from '../../utils/toastMessage'
import { ExportReactCSV } from '../../utils/exportCSV'
const cx = classNames.bind(styles)

const statusOrder = [
    {
        id: 1,
        cnt: 'Đang xử lý',
    },
    {
        id: 2,
        cnt: 'Đã hủy',
    },
    {
        id: 3,
        cnt: 'Đang giao',
    },
    {
        id: 4,
        cnt: 'Giao thành công',
    },
]

const ManageOrder = () => {
    const [listOrders, setListOrders] = useState([])
    const [statusTable, setStatusTable] = useState(0)
    const [active, setActive] = useState(1)
    useEffect(() => {
        getListOrder()
    }, [])
    const getListOrder = async () => {
        const res = await getListOrderByAdmin()
        setListOrders(res.data)
    }

    const handleChangeStatusOrder = async (reqBody) => {
        const res = await updateStatusOrderApi(reqBody)
        if (res.status === 201) {
            showSuccessToast('Cập nhật thành công', 'Thành công', 'success')
        } else {
            showSuccessToast('Có lỗi xảy ra vui lòng thử lại!', 'Lỗi!', 'error')
        }
        getListOrder()
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '6rem 2rem' }}>
            <div className={cx('orderWrapper')}>
                <div className={cx('btnOrder')}>
                    <button
                        className={cx('buttonOrder', 'buttonLeft', active === 0 && 'active')}
                        onClick={() => {
                            setStatusTable(0)
                            setActive(0)
                        }}
                    >
                        Đang chờ xử lý
                    </button>
                    <button
                        className={cx('buttonOrder', active === 1 && 'active')}
                        onClick={() => {
                            setStatusTable(1)
                            setActive(1)
                        }}
                    >
                        Đã hủy
                    </button>
                    <button
                        className={cx('buttonOrder', active === 3 && 'active')}
                        onClick={() => {
                            setStatusTable(3)
                            setActive(3)
                        }}
                    >
                        Đang giao
                    </button>
                    <button
                        className={cx('buttonOrder', 'buttonRight', active === 2 && 'active')}
                        onClick={() => {
                            setStatusTable(2)
                            setActive(2)
                        }}
                    >
                        Giao thành công
                    </button>
                </div>
                <div className={cx('exportCSV')}>
                    <ExportReactCSV
                        fileName={`Doanh thu`}
                        csvData={listOrders.filter((item) => item.status === 2)}
                    />
                </div>
            </div>

            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Tổng đơn</th>
                    <th>Địa chỉ</th>
                    <th>SĐT khách hàng</th>
                    <th>Trạng thái đơn hàng</th>
                </tr>
                {listOrders
                    .filter((item) => item.status === statusTable)
                    .map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.userId.name}</td>
                            <td>{item.products.map((product) => product.name).join(', ')}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneNumber}</td>
                            <td>
                                <select
                                    style={{ width: '200px' }}
                                    value={item.status}
                                    onChange={(e) =>
                                        handleChangeStatusOrder({ id: item._id, data: { status: e.target.value } })
                                    }
                                >
                                    <option value={0}>Đang xử lý</option>
                                    <option value={1}>Đã hủy</option>
                                    <option value={2}>Đã giao</option>
                                    <option value={3}>Đang giao</option>
                                </select>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default ManageOrder
