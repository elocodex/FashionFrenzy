import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Component/Footer/Footer";
import menBanner from '../Assets/banner_mens.png'
import womenBanner from '../Assets/banner_women.png'
import kidsBanner from '../Assets/banner_kids.png'
import { useRef } from "react";
import Error from "./Component/Error/Error";

 
function App() {
  const bbb = useRef(null)
  return (
    <div ref={bbb}>
      <Router>
        <Navbar body = {bbb}  />
        <Routes>
            <Route path="/" element={<Shop />}  />
            <Route path="/mens" element={<ShopCategory category="men" banner={menBanner} />}  />
            <Route path="/womens" element={<ShopCategory category="women" banner={womenBanner} />} />
            <Route path="/kids" element={<ShopCategory category="kid" banner={kidsBanner} />}  />
            <Route path="/product" element={<Product />} >
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={ <LoginSignup /> } />
            <Route path="*" element={ <Error /> } />
        </Routes>
        <Footer  />
      </Router>
    </div>
  )
}
export { App };
