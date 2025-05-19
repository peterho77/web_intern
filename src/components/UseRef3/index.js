import {useRef, useEffect} from 'react'

function UseRef3(){
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
        inputRef.current.value = "thien dat"
    },[])
    return (
        <>
            <input ref={inputRef} type="text"/>
        </>
    )
}

export default UseRef3;