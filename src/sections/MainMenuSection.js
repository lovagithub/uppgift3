import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
//import { useShoppingCart } from '../contexts/ShoppingCartContext'
import MenuIcon from '../components/MenuIcon'


const MainMenuSection = () => {
    const [showMenu, setShowMenu] = useState(false)
//   const { cartQuantity } =useShoppingCart()

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
                <MenuIcon link="/search" icon="fa-solid fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-solid fa-code-compare" />
                <MenuIcon quantity="3" link="/wishlist" icon="fa-solid fa-heart" />
                <MenuIcon quantity="4" link="/shoppingcart" icon="fa-solid fa-bag-shopping" />
         </div>          
    </nav>
    )
}

export default MainMenuSection