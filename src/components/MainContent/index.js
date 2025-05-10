import { FaAppleAlt } from "react-icons/fa";

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
    let name = "Pham Chí Trọng"
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
            </div>
        </>
    )
    
}

export default MainMenu;