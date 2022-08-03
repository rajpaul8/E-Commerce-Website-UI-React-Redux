import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./Pages/Category/Category";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart";
import CheckoutContactPage from "./Pages/Checkout/CheckoutContactPage";
import CheckoutShippingPage from './Pages/Checkout/CheckoutShippingPage';

function App() {
  return (
    <>
      <Router>
        <div className="max-w-screen-2xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/products/:id"
              element={
                <>
                  <Category />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/products/:id/:productID"
              element={
                <>
                  <ProductDetail />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <>
                  <Category />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout"
              element={
                <>
                  <CheckoutContactPage />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout/shipping-information"
              element={
                <>
                  <CheckoutShippingPage />
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </>
  );
}

export default App;
