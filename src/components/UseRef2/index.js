import {useState, useRef} from 'react'

const gifts = ["Ti vi", "Điện thoại", "Xe máy"];

function RandomGift(){
    const [gift, setGift] = useState("")
    const counter = useRef(0)
    const handleClick = () =>{
        if(counter.current < 3)
        {
            let index = Math.floor(Math.random()*gifts.length);
            setGift(gifts[index])
            counter.current += 1
        }
        else
        {
            alert("Bạn đã hết lượt quay thưởng")
        }
    }
    return(
        <>
            <h2>Bảng quay thưởng</h2>
            <button onClick={handleClick}>Quay số</button>
            <p>Bạn đã quay được {counter.current} lần</p>
            <p>Bạn đã được tặng {gift}</p>
        </>
    )
}

export default RandomGift;