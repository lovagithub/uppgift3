import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../models/ProductModels'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { ShorthandPropertyAssignment } from 'typescript'

interface ProductTileType {
  item: ProductItem

}

const  ProductTile: React.FC<ProductTileType> = ({item}) => {
  const { increment } = useShoppingCartContext() as ShoppingCartContextType

    return (
   <div className="col">
   <div className="card">
     <div className="card-img">
     <img src={item.imageName} alt="{item.name}" />
     <div className="card-menu d-xl-none">
         <button className="menu-link"><i className="fa-solid fa-heart"></i></button >
         <button className="menu-link"><i className="fa-solid fa-code-compare"></i></button >
         <button onClick={() => increment({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link"><i className="fa-solid fa-bag-shopping"></i></button >
     </div>
     <NavLink to={` /products/${item.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">
         <span className="corner-left"></span>            
         <span className="corner-right"></span>
          QUICK VIEW
     </NavLink>
     </div>
     <div className="card-body">
         <p className="card-category">{item.category}</p>
       <h5 className="card-title">{item.name}</h5>
       <p className="card-rating">
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
         <i className="fa-solid fa-star"></i>
       </p>
       <p className="card-price">{item.price}</p>

     </div>
   </div>
 </div>
 )
}
export default ProductTile


