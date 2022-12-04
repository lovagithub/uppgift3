import { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductTiles from '../sections/ProductTiles'
import FooterSection from '../sections/FooterSection'
import {ProductContext} from '../contexts/ProductContext'



const ProdactsView = () => {
//   const {products, getProducts} = ProductContext()
//   useEffect(() => {
//      getProducts()
//  }, [])
// <ProductTiles title="Products" items={products} /> 
    return (
        <>
         <MainMenuSection />
         <BreadcrumbSection currentPage="Products" />

         <FooterSection /> 
        </>
    )
}
export default ProdactsView
