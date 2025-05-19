import { useState } from "react";
import "./Cart.scss"
import UseContext1 from "../UseContext"


function Cart(){
    const [quantity, setQuantity] = useState(1);
    
    const handleChange = (e) => {
        setQuantity(e.target.value);
    }
    
    let value = 120000;

    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>SỐ lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giày thể thao</td>
                        <td><input onChange={handleChange} type="number" defaultValue={1} min={1}></input></td>
                        <td>{value}</td>
                        <td>{value*quantity}</td>
                    </tr>
                </tbody>
            </table>
            <div className="box">
                <UseContext1/>
            </div>
        </>
    )
}

export default Cart