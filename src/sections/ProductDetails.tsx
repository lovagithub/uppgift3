import React from "react"
import { ProductItem } from "../models/ProductModels"


interface ProductDetailsType {
    item: ProductItem
}

const ProductDetails: React.FC<ProductDetailsType> = ({item}) => {
    return (
        <section className="product-datails">
            <div className="container">
            <div> 
                <div>{item.name}</div>
                <img src={item.imageName} />
                </div>
            </div>
        </section>
    )
}
export default ProductDetails 