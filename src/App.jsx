// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav.jsx";
import ProductOverviews from "./components/productOverviews.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <BrowserRouter basename="/veterinary-store">
      <Nav />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route 
          path="/product/:productName" 
          element={<ProductOverviews />} 
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
