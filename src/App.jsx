import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav.jsx";
import ProductOverviews from "./components/productOverviews.jsx";
import Home from "./pages/home.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productName" element={<ProductOverviews />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
