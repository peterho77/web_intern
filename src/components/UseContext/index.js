import {useContext} from "react"
import {menuContext} from "../Content"


function UseContext1(){
    const menus = useContext(menuContext);
    console.log(menus)
    return (
        <>
            <ul>
                {
                    (menus || []).map((item,index) => (<li key={index}>{item}</li>))
                }
            </ul>   
        </>
    )
}

export default UseContext1;