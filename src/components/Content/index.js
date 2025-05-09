function Content(object)
{
    const {text,number,active} = object;
    return (
        <>
            <div className={"box "+(active ? "box--active" : "")}>
                {text} - {number}
            </div>
        </>
    )
}

export default Content;