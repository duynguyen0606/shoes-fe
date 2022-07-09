import classNames from "classnames/bind"
import React, { useEffect, useState } from "react"
import { getListOrderByAdmin, updateStatusOrderApi } from "../../api/orderAPI"
import styles from './ManageOrder.module.css'
import { showSuccessToast } from "../../utils/toastMessage"


const cx = classNames.bind(styles)

const statusOrder = ['Đang xử lý', 'Đã hủy', 'Giao hàng thành công', 'Đang giao']

const ManageOrder = () => {
    const [listOrders, setListOrders] = useState([]);
    const [statusTable, setStatusTable] = useState(0);

    useEffect(() => {
        getListOrder();
    }, [])
    const getListOrder = async() => {
        const res = await getListOrderByAdmin();
        setListOrders(res.data);
    }

    const handleChangeStatusOrder =async (reqBody) => {
        const res = await updateStatusOrderApi(reqBody);
        if(res.status ===201) {
            showSuccessToast("Cập nhật thành công", "Thành công", "success");
        }else{
            showSuccessToast('Có lỗi xảy ra vui lòng thử lại!', 'Lỗi!', 'error');
        }
        getListOrder();
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '6rem 2rem'}}>
            <div style={{width: '100%'}}>
                <button style={{padding: '1rem 2rem', backgroundColor: 'blue', width: '200px', color: '#fff', cursor: 'pointer'}} onClick={() => setStatusTable(0)}>
                    Đang chờ xử lý
                </button>
                <button style={{padding: '1rem 2rem', backgroundColor: 'red', width: '200px', color: '#fff', cursor: 'pointer'}} onClick={() => setStatusTable(1)}>
                    Đã hủy
                </button>
                <button style={{padding: '1rem 2rem', backgroundColor: 'yellow', width: '200px', color: '#fff', cursor: 'pointer'}} onClick={() => setStatusTable(3)}>
                    Đang giao
                </button>
                <button style={{padding: '1rem 2rem', backgroundColor: 'green', width: '200px', color: '#fff', cursor: 'pointer'}} onClick={() => setStatusTable(2)}>
                    Giao thành công
                </button>
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
                {
                    (listOrders.filter(item => item.status === statusTable).map((item, index) => (
                        <tr key={index} >
                            <td>{index+1}</td>
                            <td>{item.userId.name}</td>
                            <td>{item.products.map((product) => product.name).join(', ')}</td>
                            <td>{item.totalPrice}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneNumber}
                            </td>
                            <td>
                                <select style={{width: '200px'}} value={item.status} onChange={(e) => handleChangeStatusOrder({id: item._id, data: {status: e.target.value}})}>
                                    <option value={0}>Đang xử lý</option>
                                    <option value={1}>Đã hủy</option>
                                    <option value={2}>Đã giao</option>
                                    <option value={3}>Đang giao</option>
                                </select>
                            </td>
                        </tr>)
                    ))
                }
            </table>
        </div>
    )
}
export default ManageOrder;