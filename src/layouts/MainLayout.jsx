import { Outlet } from "react-router-dom";
import  Headeer   from "../components/Headeer.jsx"
import AnnouncementBar from "../components/AnnouncementBar.jsx";

import Footer from '../components/Footer.jsx'
export default function MainLayout() {
  return (
    <>
      <AnnouncementBar />
      <Headeer/>

      <main>
        <Outlet />
      </main>

      <Footer></Footer>
    </>
  );
}