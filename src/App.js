import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { ShopContextProvider } from './Components/Shop-context';
import { Cart } from './Components/Cart';


function App() {
  
  return (
    <div className="App">
    <ShopContextProvider>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes> 
    </Router>
    </ShopContextProvider>
   
    </div>
  );
}

export default App;
