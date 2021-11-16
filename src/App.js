import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Frontpage from "./Components/front-page";
import Products from "./Components/products-page";
import Menu from "./Components/menu";
import Footer from "./Components/footer";
import Cart from "./Components/cart-page";
import Productspecificpage from "./Components/productspecific-page";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Menu/>
        <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/' element={<Frontpage/>} />
        <Route path='/productspecificpage' element={<Productspecificpage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
