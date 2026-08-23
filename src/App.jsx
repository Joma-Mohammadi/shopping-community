import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import Account from "./pages/Account";
import Cart from "./productPage/Cart";
import Hero from "./components/Hero";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/hero" element={<Hero />} />
      </Route>
    </Routes>
  );
}