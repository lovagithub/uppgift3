import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext, ShoppingCartContextType } from '../contexts/ShoppingCartContext'


const MainMenuSection: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { totalQuantity } =useShoppingCartContext() as ShoppingCartContextType

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

  

    return (
        <nav className="mainmenu container">     
                <NavLink className="logo" to ="/" end>Fixxo.</NavLink>

                <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>   
                <NavLink className="menu-link" to="/" end>Home</NavLink> 
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>   
                <NavLink className="menu-link" to="/products" end>Products</NavLink>   
                <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>   
                </div>
      
            <div className="menu-icons">
                <NavLink to="/search" end className="menu-link">
                <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>

                <NavLink to="/compare" end className="menu-link d-none d-md-flex">
                <span className="position-absolute top-0 start-100 translate-midde bagde rounded bg-theme"></span>
                <i className="fa-solid fa-code-compare"></i>
                </NavLink>

                <NavLink to="/wishlist" end className="menu-link d-none d-md-flex">
                <span className="position-absolute top-0 start-100 translate-midde bagde rounded bg-theme"></span>
                <i className="fa-solid fa-heart"></i>
                </NavLink> 

            
                <button className="menu-icons" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingcart">
                 <span className="position-absolute top-0 start-100 translate-midde bagde rounded bg-theme">{totalQuantity}</span>
                 <i className="fa-solid fa-bag-shopping"></i> 
                 </button>
                <button onClick={toggleMenu} className="menu-link btn-link-icon d-xl-none">
                <i className="fa-solid fa-bars"></i> 
                </button>
         </div>          
    </nav>
    )
}

export default MainMenuSection