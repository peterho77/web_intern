function CountryItem(props){
    const {item} = props
    return (
        <>
            <li className="country_item">
                <span>{item.name}</span>
                <ul>
                    {item.city.map((city)=><li>{city.name}</li>)}
                </ul>
            </li>
        </>
    )
}

export default CountryItem;