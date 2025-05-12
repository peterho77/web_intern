import { useState } from "react";


function Lamp(){
    const [status, setState] = useState(false);

    const handleClick = () => {
        setState(!status)
    }

    return (
        <>
            <div>
                <p>{status ? "Đang tắt":"Đang bật"}</p>
                <button onClick={handleClick}>{status?"Bật đèn":"Tắt đèn"}</button> 
            </div>
        </>
    )
}

export default Lamp;