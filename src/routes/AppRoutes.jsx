import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
// import Shop from "../pages/Shop/Shop";
// import Category from "../pages/Category/Category";
// import Product from "../pages/Product/Product";
// import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        {/* <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/category/:slug"
          element={<Category />}
        />

        <Route
          path="/product/:slug"
          element={<Product />}
        />

        <Route
          path="/404"
          element={<NotFound />}
        />

        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        /> */}

      </Route>

    </Routes>
  );
}