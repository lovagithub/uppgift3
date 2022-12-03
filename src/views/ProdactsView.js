import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductTiles from '../sections/ProductTiles'
import FooterSection from '../sections/FooterSection'
import { useEffect } from 'react'


const ProdactsView = () => {
    
    return (
        <>
         <MainMenuSection />
         <BreadcrumbSection currentPage="Products" />
        <FooterSection /> 
        </>
    )
}
export default ProdactsView
