import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductTiles from '../sections/ProductTiles'
import FooterSection from '../sections/FooterSection'
import {ProductContextType, useProductContext} from '../contexts/ProductContext'



const ProdactsView: React.FC = () => {
   const {products, getAll} = useProductContext() as ProductContextType
      useEffect(() => {
      getAll()
  }, [])
  
    return (
        <>
         <MainMenuSection />
         <BreadcrumbSection currentPage="Products" />
         <ProductTiles title="Products" items={products} /> 
         <FooterSection /> 
        </>
    )
}
export default ProdactsView
