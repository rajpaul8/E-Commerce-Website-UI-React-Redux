import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./Pages/Category/Category";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Router>
        <div className="max-w-screen-2xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products/:id" element={<Category />}></Route>
            <Route path="/products/:id/:productID" element={<ProductDetail />}></Route>
            <Route path="/products" element={<Category />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <ToastContainer />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
