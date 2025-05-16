import {useEffect,useState} from 'react'

const limit = 10;

function UseEffect3()
{
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const [quantityPage, setQuantityPage] = useState(0);

    const paginationClick = (e) => {
        setActivePage(e);
    }

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit*activePage}`)
            .then(res=>res.json())
            .then((data)=>{
                setData(data.products);
                setQuantityPage(Math.ceil(data.total/limit));
            })
    }, [activePage]);

    console.log(data);

    return (
        <>
            <ul>
                {
                    data.map((item)=>(<li>{item.title}</li>))
                }
            </ul>
            <ul className="pagination">
                {
                    [...Array(quantityPage)].map((_,index)=><li key={index} onClick={()=>paginationClick(index)}>{index+1}</li>)
                }
            </ul>
        </>
    )
}

export default UseEffect3;