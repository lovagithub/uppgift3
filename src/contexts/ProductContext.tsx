
import { useContext, useState } from 'react'
import React, {createContext} from 'react'
import { ProductItem } from '../models/ProductModels'

// 'https://win22-webapi.azurewebsites.net/api/products'

interface ProductProviderType {
    children: any 
}
export interface ProductContextType {
        product: ProductItem
        products: ProductItem[]
        featured: ProductItem[]
        get: (articleNumber?: string) => void
        getAll: () => void
        getFeatured: (take?: number) => void
      
}
export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPtY_PRODUCT: ProductItem = { articleNumber: '',name: '', category: '', price: 0, imageName: ''}
    const [product, setProduct] = useState<ProductItem>(EMPtY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([]) 
    const [featured, setFeatured] = useState<ProductItem[]>([])
    
    
    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
        const res = await fetch(`${baseUrl}/details/${articleNumber}`)
        setProduct(await res.json())
        }
    }
    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    } 
    
        const getFeatured = async (take: number  = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
        url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }
  
  
    return <ProductContext.Provider value={{product, products, featured, get, getAll, getFeatured}}>
    {children}
    </ProductContext.Provider>
}

export default ProductProvider

