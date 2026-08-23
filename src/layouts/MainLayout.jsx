import { Outlet } from "react-router-dom";
import  Headeer   from "../components/Headeer.jsx"
import AnnouncementBar from "../components/AnnouncementBar.jsx";
import Footer from '../components/Footer.jsx'

import { useCart } from "../context/CartContext";

export default function MainLayout() {
   const { message } = useCart();
  return (
    <>
      <AnnouncementBar />
      <Headeer/>
       {message && (
        <div className="fixed right-5 top-24 z-100 rounded-lg bg-[#075039] px-5 py-3 text-sm font-medium text-white shadow-lg">
          {message}
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <Footer></Footer>
    </>
  );
}