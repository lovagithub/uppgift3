import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from "../models/ShoppingCartModels"

interface ShoppingCartProviderType {
    children: any 
}



export interface ShoppingCartType {
    items: CartItem[]
    totalQuntity: number
    increment: (cartItem: CartItem) => void
    decrement: (cartItem: CartItem) => void
    iremove: (articleNumber: string) => void
}

export const ShoppingCartContext = createContext<ShoppingCartType | null>(null)
export const useShoppingCartContext = () => { return useContext(ShoppingCartContext)}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({children}) =>
const [cartItems. set]
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) =>