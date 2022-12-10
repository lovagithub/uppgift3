
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProdactsView from './views/ProdactsView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider} from './contexts/ShoppingCartContext'

function App() {
 
  return (

      <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProdactsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/product:name" element={<ProductDetailsView/>} />
        <Route path="*" element={<NotFoundView />} />
  
      </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
      </BrowserRouter>
  );
  
}

export default App;