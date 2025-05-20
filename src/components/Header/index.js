import {memo} from "react"

function Header(props){
    const {onCounter, onReset} = props
    console.log("header");
    return (
        <>
            <button onClick={onCounter}>CLick</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}

export default memo(Header);