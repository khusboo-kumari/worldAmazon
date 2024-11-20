import React from 'react'
import { useState, createContext } from 'react';
import Layout from './Layout.jsx';
import Counter from './Counter.jsx';
import Card from './components/Card/Card.jsx';
import Cart from './components/Cart/Cart.jsx';
import Home from './components/Home/Home.jsx';
import Signin from './components/Signin/Signin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const CartContext = createContext();

const App = () => {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const updateCart = (product) => {
        setCart(product);
        localStorage.setItem('cart', JSON.stringify(product));
    }   
  return (
    <div>
        <CartContext.Provider value={{
            cart,
            size : cart.reduce((acc, item) => acc + parseInt(item.quantity), 0), 
            totalPrice : cart.reduce((acc, item) => acc + (item.discounted_price ? parseFloat(item.discounted_price.substring(1).replace(",", "")) : parseFloat(item.price.substring(1).replace(",", ""))) * parseInt(item.quantity), 0),
            updateCart}}>
            <BrowserRouter>
                <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
                </Layout>
            </BrowserRouter>
        </CartContext.Provider>
    </div>
  )
}

export default App
