import {useState,useRef,useCallback} from "react"
import Header from "../Header"

function UseRef(){
    const [counter, setCounter] = useState(0)
    const counterRef = useRef(0);

    const handleClick = useCallback(()=>{
        setCounter(counter => counter + 1)
        counterRef.current += 1
    },[]);

    const handleReset = useCallback(()=>{
        setCounter(0);
    },[]);

    return (
        <>
            <p>Kết quả: {counter}</p>
            <Header onCounter={handleClick} onReset={handleReset}/>
        </>
    )
}

export default UseRef;