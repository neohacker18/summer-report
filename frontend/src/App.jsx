import React, { useState } from "react";
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
import { topbar } from "react-router-loading";
import OverlayContext from "./context/OverlayContext";
import LoadingScreen from "./components/Loader/LoadingScreen";
import AuthContext from "./context/AuthContext";
import PrivateRoute from "./components/ProtectedRoutes/PrivateRoute";
import CheckoutHero from "./components/Checkout/CheckoutHero";

function App() {
  const MyLoadingScreen = () => <LoadingScreen />;
  topbar.config({
    autoRun: false,
    barThickness: 7,
    barColors: {
      0: "rgba(26,  188, 156, .7)",
      0.3: "rgba(41,  128, 185, .7)",
      1.0: "rgba(231, 76,  60,  .7)",
    },
    shadowBlur: 5,
    shadowColor: "green",
    className: "topbar",
  });
  const [openCartOverlay, setOpenCartOverlay] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("userId"));
  return (
    <ChakraProvider>
      <BrowserRouter>
        <OverlayContext.Provider
          value={{ openCartOverlay, setOpenCartOverlay }}
        >
          <AuthContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Routes loadingScreen={MyLoadingScreen} maxLoadingTime={350}>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Women />
                  </PrivateRoute>
                }
                loading
              />
              <Route
                exact
                path="/men"
                element={
                  <PrivateRoute>
                    <Men />
                  </PrivateRoute>
                }
                loading
              />
              <Route
                exact
                path="/kids"
                element={
                  <PrivateRoute>
                    <Kids />
                  </PrivateRoute>
                }
                loading
              />
              <Route
                exact
                path="/product"
                element={
                  <PrivateRoute>
                    <ProductDisplayPage />
                  </PrivateRoute>
                }
                loading
              />
              <Route
                exact
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
                loading
              />
              <Route
                exact
                path="/overlay"
                element={
                  <PrivateRoute>
                    <CartOverlay />
                  </PrivateRoute>
                }
                loading
              />
              <Route exact path="/login" element={<Login />} loading />
              <Route exact path="/signup" element={<Register />} loading />
              <Route exact path="/checkout" element={<CheckoutHero />} loading />
              <Route exact path="*" element={<Error />} loading />
            </Routes>
          </AuthContext.Provider>
        </OverlayContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
