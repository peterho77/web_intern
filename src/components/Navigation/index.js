const handleClick = (e) => {
    console.log(e.target);
}

const handleChange = (e) => {
    console.log(e.target.value);
}

const handleFocus = (e) => {
    e.target.classList.add("input--active");
}

const handleBlur = (e) => {
    e.target.classList.remove("input--active");
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
}

function Navigation(){
    return (
        <>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ></input>
                    <button onClick={handleClick}>Search</button>
                </form>
            </div>
        </>
    )
}

export default Navigation;