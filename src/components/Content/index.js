import  Cart  from "../Cart";
import { createContext } from "react"

export const menuContext = createContext();


function Content(object)
{
    const menus = ["Trang chủ", "Giới thiệu", "Trang quảng cáo"];
    const {text,number,active} = object;
    return (
        <>
            <div className={"box "+(active ? "box--active" : "")}>
                {text} - {number}
            </div>
            <menuContext.Provider value={menus}>
                <Cart/>
            </menuContext.Provider>

        </>
    )
}

export default Content;