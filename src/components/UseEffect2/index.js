import { useState } from 'react';
import { useEffect } from 'react';
import "./product.scss"

function UseEffect2(){
    const [data, setData] = useState([]);

    // dùng useEffect khi fetching API
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then(data => {
                setData(data.products);
                console.log(data);
                console.log(data.products);
            })
    },[])    // nếu không để dependency thì khi in data bằng console.log sẽ bị lặp vô hạn.

    console.log(data);

    return (
        <>
            <div className="product__list">
                {
                    data.map((item)=>               
                        (
                            <>
                                <div className="product__item" key={item.id}>
                                    <div className="product__image">
                                        <img src={item.images[0]} alt=""/>
                                    </div>
                                    <h3 className="product__title">{item.title}</h3>
                                    <p className="product__price">{item.price}</p>
                                </div>     
                            </>
                        )
                    )
                }
            </div>
        </>
    )
}

export default UseEffect2;