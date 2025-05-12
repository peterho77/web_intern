import { FaAppleAlt } from "react-icons/fa";
import Lamp from "../Lamp/index.js"


function MainMenu(){
    const css = {
        // color: "yellow",
        // backgroundColor: "blue"
    }
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ];

    let name = "Hồ Công Thiên Đạt";
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chào {name} <FaAppleAlt />
                </div>
                <div className="test" style={css}>
                    Hello world
                </div>
                <ul>
                    {
                        arrayMenu.map((item,index)=>
                            (<li key={index}>{item}</li>)
                        )
                    }
                </ul>
                <Lamp/>
            </div>
        </>
    )
    
}

export default MainMenu;