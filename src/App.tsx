
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import SearchView from './views/SearchView';
import ProdactsView from './views/ProdactsView';
import ProductDetailsView from './views/ProductDetailsView';
import CategoriesView from './views/CategoriesView';
import ComparesView from './views/CompareView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider} from './contexts/ShoppingCartContect'

function App() {
 
  return (

      <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProdactsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<ComparesView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/product:name" element={<ProductDetailsView/>} />
        <Route path="*" element={<NotFoundView />} />
  
      </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
      </BrowserRouter>
  );
  
}

export default App;