import React, {products} from 'react'

const ProductTile = ({title}) => {
    console.log("ProductTile runnig")
    return ( 
        
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {
         products.map( product => <ProductTile items={product} />)
            
    }
        </div> 
    </div>
          
    </section>

    )
}
export default ProductTile
