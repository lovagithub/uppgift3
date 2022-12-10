import React, { useEffect } from "react"
import { ProductContextType, useProductContext } from "../contexts/ProductContext"
import FooterSection from "../sections/FooterSection"
import MainMenuSection from "../sections/MainMenuSection"
import ShowCaseSection from "../sections/ShowCaseSection"
import ProductTiles from "../sections/ProductTiles"


const HomeView: React.FC = () => {
    
    const {featured, getFeatured } = useProductContext() as ProductContextType

    useEffect(() => {
        getFeatured(8)},[])
                                 

    return (
        <>
        <header>
        <MainMenuSection />
       <ShowCaseSection />
       </header>
  
       <ProductTiles title="Featured Products" items={featured} />
       

        <FooterSection />
      
        
        </>
    )
}
export default HomeView


