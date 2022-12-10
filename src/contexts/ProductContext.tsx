
import { useContext, useState } from 'react'
import React, {createContext} from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductProviderType {
    children: any 
}
export interface ProductContextType {
        product: ProductItem
        products: ProductItem[]
        featured: ProductItem[]
        get: (articleNumber?: string) => void
        getAll: (take?: number) => void
        getFeatured: (take?: number) => void
      
}
export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const EMPY_PRODUCT: ProductItem = { articleNumber: '',name: '', category: '', price: 0, imageName: ''}
    const [product, setProduct] = useState<ProductItem>(EMPY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([]) 
    const [featured, setFeatured] = useState<ProductItem[]>([])
    
    
    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
        const res = await fetch(baseUrl + `/${articleNumber}`)
        setProduct(await res.json())
        }
    }
    const getAll = async (take: number  = 0) => {
        let url = baseUrl

        if (take !== 0)
        url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
    } 
    
    
    const getFeatured = async (take: number  = 0) => {
        let url = baseUrl + `?tag=featured`

        if (take !== 0)
        url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }
  
  
   
return <ProductContext.Provider value={{product, products, featured, get, getAll, getFeatured}}>
    {children}
    </ProductContext.Provider>
}

export default ProductProvider

