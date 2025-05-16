import "./Tab.scss"
import { useState, useEffect } from "react"

function TabList(){

    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("products");

    const handleTabClick = (e) =>{
        setTabActive(e);    
    }

    useEffect(()=>{
        fetch(`https://dummyjson.com/${tabActive}`)
            .then(res => res.json())
            .then(data => {
                setData(data[tabActive])
            })
    },[tabActive])

    return (
        <>
            <div className="tabs">
                <div className="tabs__item" onClick={()=>handleTabClick("products")}>
                    Products
                </div>
                <div className="tabs__item" onClick={()=>handleTabClick("users")}>
                    Users
                </div>
                <div className="tabs__item" onClick={()=>handleTabClick("carts")}>
                    Carts
                </div>
            </div>

            <div className="tabs__content">
                <ul>
                    {
                        data.map((item)=>
                            <li key={item.id}>{item.title || item.firstName || item.id}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default TabList;