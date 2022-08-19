import React,{useState} from "react";
import { Route, Link, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Announcement } from "../components/Announcement";
import { Categories } from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import ProductList from "./ProductList";
import Product from "./Product";
import FrontProducts from "../components/FrontProducts";
import { Idcontext } from "../Context/Idcontext";

export const Home = () => {
  const [quantity, setquantity] = useState(1);
  const [id,setid]=useState(0);
  const user = false;
  return (
    <>
    <Idcontext.Provider value={{quantity,setquantity,id,setid}}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Announcement />
                  <Navbar />
                  <Slider />
                  <Categories />
                  <FrontProducts />
                  <Newsletter />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <div>
                    <Register />
                  </div>
                )
              }
            />
            {/* <Route
              exact
              path="/product/Cart/:id/:id"
              element={
                <div>
                  <Cart />
                </div>
              }
            /> */}
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <>
                    <Login />
                  </>
                )
              }
            />
            
            <Route
              exact
              path="/product/:id"
              element={
                <>
                  <Product />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                </>
              }
            />
            <Route
              exact
              path="/products/:category"
              element={
                <>
                  <ProductList />
                </>
              }
            />
            <Route
              exact
              path="/product/Cart"
              element={
                <>
                  <Cart />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      </Idcontext.Provider>
    </>
  );
};
