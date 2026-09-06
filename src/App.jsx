
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CartLayout from "./layouts/CartLayout";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./productPage/Cart";
import Hero from "./components/Hero";
import Checkout from "./productPage/Checkout";
import OrderPage from "./productPage/OrderPage";

import CategoryPage from "./layouts/CategoryPage";
import ShopAll from "./categoryPage/ShopAll";

import FeatuerdProductLayout from "./layouts/FeatuerdProductLayout";

import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Routes>

      {/* =========================
          Main Pages
      ========================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/hero" element={<Hero />} />
      </Route>


      {/* =========================
          Cart / Checkout
      ========================= */}
      <Route element={<CartLayout />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/order-complete"
          element={<OrderPage />}
        />
      </Route>


      {/* =========================
          Shop + Categories
      ========================= */}
      <Route element={<CategoryPage />}>

        {/* Shop All */}
        <Route
          path="/shop"
          element={<ShopAll />}
        />

        {/* Categories */}
        <Route
          path="/category/flower"
          element={<ShopAll />}
        />

        <Route
          path="/category/edibles"
          element={<ShopAll />}
        />

        <Route
          path="/category/concentrates"
          element={<ShopAll />}
        />

        <Route
          path="/category/mushrooms"
          element={<ShopAll />}
        />

      </Route>


      {/* =========================
          Product Details
      ========================= */}
      <Route element={<FeatuerdProductLayout />}>
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
      </Route>


      {/* =========================
          Not Found
      ========================= */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

