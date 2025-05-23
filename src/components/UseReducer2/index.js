import {useReducer,useEffect} from 'react'

var object = {
    loading:true,
    products: []
}

const reducer = (state,action) =>{
    if(action.message==="SUCCESS")
    {
        return {
            loading:false,
            products:action.products
        }
    }
    return state;
}

function UseReducer2(){
    const [data, dispatch] = useReducer(reducer,object);

    useEffect(()=>{
        const fetchAPI = () => {
            fetch(`https://dummyjson.com/products`)
                .then(data=>data.json())
                .then(data => {
                    dispatch({
                        products:data.products,
                        message:"SUCCESS"
                    })
                }
                )
        }
    
        setTimeout(()=>{
            fetchAPI();
        },3000);
    },[])


    return (
        <>
            <div className="box">
                {data.loading?
                "Đang tải dữ liệu..."
                :
                <>
                    <ul>
                        {data.products.map((item)=><li key={item.id}>{item.title}</li>)}
                    </ul>
                </>}
            </div>
        </>
    )
}

export default UseReducer2;