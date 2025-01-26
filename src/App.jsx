import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav.jsx";
import ProductOverviews from "./components/productOverviews.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productName" element={<ProductOverviews />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
