import { useState, useEffect } from 'react'
import "./product.scss"

const limit = 10;

function UseEffect3(){
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    const handleActiveClick = (e) => {
        setActivePage(e);
    }

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/?limit=${limit}&skip=${limit*activePage}`)
            .then(key=>key.json())
            .then((data) => {
                setData(data.products);
                setQuantityPage(Math.ceil(data.total / limit))
            })
    },[activePage])
    
    return(
        <>
            <div className="product__list">
                {data.map((item) => {
                    return  <div className="product__item">
                                <div className="product__image">
                                    <img src={item.images[0]} alt=""/>
                                </div>
                                <h3 className="product__title">${item.title}</h3>
                                <p className="product__price">${item.price}</p>
                            </div>                   
                })}
            </div>
            <ul>
                {[...Array(quantityPage)].map((_,index)=><li onClick={()=>handleActiveClick(index)}>{index+1}</li>)}
            </ul>
        </>
    )
}

export default UseEffect3;