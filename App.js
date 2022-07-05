import "./App.css";
import { MainHeader } from "./components/MainHeader";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Home from "./pages/Home";
import React, { useState } from "react";
function App() {
  return (
    <>
      <MainHeader />

      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
