import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductTiles from '../sections/ProductTiles'
import FooterSection from '../sections/FooterSection'
import { useProductContext } from '../contexts/ProductContext'
import { useEffect } from 'react'


const ProdactsView = () => {
    const {products, getProducts} = useProductContext()
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
         <MainMenuSection />
         <BreadcrumbSection currentPage="Products" />
         <ProductTiles tittle="Products" items={products} />
        <FooterSection /> 
        </>
    )
}
export default ProdactsView
