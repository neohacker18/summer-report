import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductDisplayPage from "./components/ProductDisplayPage";
import Cart from "./components/Cart/Cart";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartOverlay from "./components/Overlay/CartOverlay";
import Home from './components/Category/Home'
import Login from "./components/Login/Login";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product" element={<ProductDisplayPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/overlay" element={<CartOverlay/>}/>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
