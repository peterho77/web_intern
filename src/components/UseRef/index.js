import {useState,useRef} from "react"

function UseRef(){
    const [counter, setCounter] = useState(0)
    const counterRef = useRef(0);

    const handleClick = () => {
        setCounter(counter => counter + 1)
        counterRef.current += 1
    }

    console.log(counter);
    console.log(counterRef);

    return (
        <>
            <button onClick={handleClick}>CLick</button>
        </>
    )
}

export default UseRef;