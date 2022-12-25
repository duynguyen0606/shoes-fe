import React from 'react'
import { CSVLink } from 'react-csv'
import styles from '../pages/ManageOrder/ManageOrder.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export const headers = [
    {label: 'Mã SP', key: 'productId'},
    {label: 'Tên sản phẩm', key: 'nameProduct'},
    {label: 'Giá', key:'price'},
    {label: 'Số lượng', key: 'quantity'},
    {label: 'Màu sắc', key: 'color'},
    {label: 'Kích thước', key: 'size'},
    {label: 'Tên khách hàng', key: 'nameUser'},
    {label: 'Địa chỉ', key: 'address'},
    {label: 'Số điện thoại', key: 'phoneNumber'},
    {label: 'Hình thức TT', key: 'paymentMethod'},
    {label: 'Link sản phẩm', key: 'linkImage'}
]
export const ExportReactCSV = ({ csvData, fileName }) => {
    return (
        <button>
            <CSVLink
                headers={headers}
                className={cx('btnExp')}
                data={csvData}
                filename={fileName}
            >
                Xuất Excel
            </CSVLink>
        </button>
    )
}
