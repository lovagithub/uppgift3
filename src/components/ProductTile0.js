import React from 'react'
import { NavLink } from 'react-router-dom'


const  ProductTile = ({item}) => {
  const addToWishList = (e) => {
    console.log("add to wish list")
  }

  const addToCompare = (e) => {
    console.log("add to compare")
  }

  const addToCard = (e) => {
    console.log("add to shopping card")
  }

    return (
   <div className="col">
   <div className="card">
     <div className="card-img">
     <img src={item.imgName} alt="{item.name}" />
     <div className="card-menu d-xl-none">
         <button onClick={addToWishList} className="menu-link"><i className="fa-solid fa-heart"></i></button >
         <button onClick={addToCompare} className="menu-link"><i className="fa-solid fa-code-compare"></i></button >
         <button onClick={addToCard} className="menu-link"><i className="fa-solid fa-bag-shopping"></i></button >
     </div>
     <NavLink to={` /products/${item.name.toLowerCase().replace(/ /gi,"-")}`} className="btn-theme btn-card-theme d-xl-none">
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
