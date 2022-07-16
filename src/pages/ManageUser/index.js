import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { getAllAccounts } from '../../api/userAPI'
import styles from './ManageUser.module.css'

const cx = classNames.bind(styles)

const ManageUser = () => {
    const [listAcc, setListAcc] = useState([])

    useEffect(() => {
        getListAccount()
    }, [])

    const getListAccount = async () => {
        const res = await getAllAccounts()
        setListAcc(res.data)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '6rem 2rem' }}>
            <table className={cx('tableWrapper')}>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>SĐT</th>
                </tr>
                {listAcc
                    .filter((item) => item.role === 0)
                    .map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneNumber}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default ManageUser
