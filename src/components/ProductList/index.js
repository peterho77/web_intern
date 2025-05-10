import {productList} from "../../data/products.js"
import {country} from "../../data/country.js"
import ProductItem from "./ProductItem.js"
import CountryItem from "./CountryItem.js"

function ProductList(){
    return (
        <>
            <div className="product_list">
                {
                    productList.map((item)=>
                        (<ProductItem item={item} key={item.id}/>)
                    )
                }
            </div>
            <div>
                <ul className="country_list">
                    {
                        country.map((item)=>(<CountryItem item={item} key={item.id}/>))
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductList