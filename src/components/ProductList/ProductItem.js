function ProductItem(props){
    const {item} = props
    return (
        <>
            <div className="product-item">
                <h2>Tiêu đề: {item.name}</h2>
                <p>Giá: {item.price}</p>
            </div>
        </>
    )
}

export default ProductItem;