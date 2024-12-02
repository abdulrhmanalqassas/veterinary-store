// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero.jsx";
import "./App.css";
import Nav from "./components/nav.jsx";
import ProductLists from "./components/productLists.jsx";
import ProductOverviews from "./components/productOverviews.jsx";
import HeroFeat from "./components/heroFeat.jsx";
import ContactForm from "./components/contactForm.jsx";

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
     
        <Route
          path="/"
          element={
            <>  
              <Hero>
                <HeroFeat />
              </Hero>
              <ProductLists />
              <ProductOverviews />
              <ContactForm />
            </>
          }
        ></Route>
        <Route path="/product" element={<ProductOverviews  />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
