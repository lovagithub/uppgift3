import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetails from '../sections/ProductDetails'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'



const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const productContext = useProductContext() as ProductContextType

    useEffect(() => {
        productContext.get(id)
    }, [])

    return (
        <>
         <MainMenuSection />
        <BreadcrumbSection parentPage="Product" currentPage={productContext.product.name} />
        <ProductDetails item={productContext.product} />
        <FooterSection /> 
        </>
    )
    
}
export default ProductDetailsView