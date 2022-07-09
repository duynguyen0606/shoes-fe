import classNames from 'classnames/bind'
import { useState } from 'react';
import styles from './Modal.module.css'

const cx = classNames.bind(styles)
const Modal = ({title,onCloseModal, onSubmit, dataPro = undefined, isModalConfirm = false, isModalVoucher = false}) => {
    const [name, setName] = useState(dataPro?.name ?? '');
    const [price, setPrice] = useState(dataPro?.price ??0);
    const [size, setSize] = useState(JSON.stringify(dataPro?.size) ??[]);
    const [color, setColor] = useState(dataPro?.color??'');
    const [linkImg, setLinkImg] = useState(JSON.stringify(dataPro?.linkImg)?? []);
    const [discount, setDiscount] = useState(0);
    const [condition, setCondition] = useState(0);

    const onOk = () => {

       if(isModalConfirm){
            onSubmit({},true);
       }else{
            if(isModalVoucher){
                onSubmit({
                    discount: parseInt(discount),
                    condition: parseInt(condition)
                })
            }else{
                if(dataPro === undefined) {
                    onSubmit({
                        name,
                        price, 
                        size: JSON.parse(size),
                        color,
                        linkImg: JSON.parse(linkImg),
                    })
                }else {
                    onSubmit({
                        name,
                        price, 
                        size: JSON.parse(size),
                        color,
                        linkImg: JSON.parse(linkImg),
                        
                    },dataPro._id)
                }
            }
        
       }
        
    }

    return (
        <div className={cx("w3-container")} >
            <div id="id01" className={cx("w3-modal")}>
                <div className={cx("w3-modal-content", "w3-animate-top", "w3-card-4")} >
                    <header className={cx("w3-container", "w3-teal")} style={{display: "flex", color: '#000', padding: '1rem'}}>
                        <span onClick={onCloseModal} style={{fontSize: "25px", cursor: "pointer"}}
                        >&times;</span>
                        {isModalConfirm?<h2 style={{flex: 1, textAlign: "center"}}>Bạn có muốn tiếp tục không?</h2>:<h2 style={{flex: 1, textAlign: "center"}}>{title}</h2>}
                    </header>
                    <div className={cx("w3-container")}>
                        
                        {
                        isModalVoucher?(
                            <>
                                <label >Giảm giá</label>
                                <input
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                type="text" />

                                <label >Điều kiện (giá trị đơn hàng tối thiểu VND)</label>
                                <input 
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                                type="text"/>
                            </>
                        ):
                        (isModalConfirm?<p>Đồng ý xóa</p>:
                        <>
                        <label >Tên sản phẩm</label>
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" id="fname" name="firstname"  />

                        <label >Giá tiền</label>
                        <input 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text" id="lname" name="lastname"  />

                        <label >Size ({"Vui lòng nhập đúng định dạng: [{\"size\": 40,\"amount\": 1}, ...]"})</label>
                        <input 
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        type="text" id="lname" name="lastname" placeholder={"Vui lòng nhập đúng định dạng: [{\"size\": 40,\"amount\": 1}, ...]"} />

                        <label >Màu sắc</label>
                        <input 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        type="text" id="lname" name="lastname"  />

                        <label >Link ảnh ({"Vui lòng nhập đúng định dạng: [\"link1\", \"link2\", ...]"})</label>
                        <input 
                        value={linkImg}
                        onChange={(e) => setLinkImg(e.target.value)}
                        type="text" id="lname" name="lastname"  
                        placeholder={"Vui lòng nhập đúng định dạng: [link1, link2, ...]"}
                        />
                        </>)}
                    </div>
                    <footer className={cx("w3-container", "w3-teal")} style={{padding: "1rem", borderTop: "1px solid #ccc", display: "flex", justifyContent: "end"}}>
                        <button type="button" style={{padding: "1rem 2rem", backgroundColor: "#d8355a", marginRight: '1rem', cursor: "pointer"}} onClick={onOk}>OK</button>
                        <button type="button" style={{padding: "1rem 2rem", backgroundColor: "#fff", cursor: "pointer"}} onClick={onCloseModal}>Hủy</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Modal;