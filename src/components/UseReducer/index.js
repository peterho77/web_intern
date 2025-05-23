import { useReducer } from 'react'

const reducer = (state,action) =>{
    switch(action)
    {
        case "up":
            return state+1;
        case "down":
            return state-1;
        case "reset":
            return 0;
    }
}

function UseReducer1(){
    const [counter, dispatch] = useReducer(reducer,0);

    return (
        <>
            <div className="box">
                <p>Kết quả: {counter}</p>
                <button onClick={()=>dispatch("up")}>Tăng</button>
                <button onClick={()=>dispatch("down")}>Giảm</button>
                <button onClick={()=>dispatch("reset")}>Reset</button>
            </div>
        </>
    )
}

export default UseReducer1;