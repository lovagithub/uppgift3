import React from 'react'
import ProductTile from '../components/ProductTile'


const ProductTiles= ({title, items = []}) => {
   
    console.log("ProductTiles runnig")
    return ( 
        
        <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {
         items.map( product => <ProductTile key={product.articleNumber} item={product} />)
            
    }
         
        </div>
    </div>
          
    </section>

    )
}

export default ProductTiles
