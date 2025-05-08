function MainMenu(){
    const css = {
        // color: "yellow",
        // backgroundColor: "blue"
    }
    let name = "Pham Chí Trọng"
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chào {name}
                </div>
            
                <div className="test" style={css}>
                    Hello world
                </div>
            </div>
        </>
    )
    
}

export default MainMenu;