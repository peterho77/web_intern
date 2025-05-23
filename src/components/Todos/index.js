import {useReducer,useEffect,useRef} from "react"
import "./product.scss"

const init = [
    {
        id: 1,
        content: "Thứ 2 học HTML"
    },
    {
        id: 2,
        content: "Thứ 3 học CSS"
    },
    {
        id: 3,
        content: "Thứ 4 học Javacript"
    }
]

const reducer = (state,action) => {
    switch(action.message)
    {
        case "create":
            return[
                    ...state,
                    {
                        id: action.id,
                        content: action.content
                    }
                ]
        case "delete":
            const new_state = state.filter((todo)=>{
                return todo.id !== action.id;
            })
            return new_state
        case "update":
            const ne_state = state.filter((todo)=>{
                return todo.id !== action.id
            });
            return [
                ...ne_state,
                {
                    id: action.id,
                    content: action.content
                }
            ]
        default:
            return state;
    }
}

function Todos(){
    const [todos, dispatch] = useReducer(reducer,init);

    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements[0].value;
        if(value)
        {
            dispatch({
                id: Date.now(),
                content: value,
                message:"create"
            })
            inputRef.current.value = "";
        }
    }

    const handleUpdate = (id) => {
        dispatch({
            id: id,
            content: inputRef.current.value,
            message: "update"
        })
    }

    const handleDelete = (id) =>
    {
        dispatch({
            id: id,
            message:"delete"
        })
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input ref={inputRef} type="text"/>
                <button>Create</button>
            </form>

            {todos.length>0 && (
                <ul>
                    {
                        todos.map((item)=>
                        <li key={item.id}>
                            {item.content}
                            <button onClick={()=>handleUpdate(item.id)}>Update</button>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </li>
                    )
                    }
                </ul>
            )}
        </>
    )
}

export default Todos;