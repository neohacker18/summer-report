import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductDisplayPage from "./components/ProductDisplayPage";
import Cart from "./components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import CartOverlay from "./components/Overlay/CartOverlay";
import Women from "./components/Category/Women";
import Men from "./components/Category/Men";
import Kids from "./components/Category/Kids";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Error from "./components/Error";
import { Routes, Route } from "react-router-loading";

function App() {
  const MyLoadingScreen=()=><div>Loading...</div>

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes loadingScreen={MyLoadingScreen} maxLoadingTime={350}>
          <Route exact path="/" element={<Women />} loading />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/kids" element={<Kids />} />
          <Route exact path="/product" element={<ProductDisplayPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/overlay" element={<CartOverlay />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
