import { Outlet } from "react-router-dom";
import Headeer from "../components/Headeer.jsx";

export default function CartLayout() {
  return (
    <>
      <Headeer />

      <main>
        <Outlet />
      </main>
    </>
  );
}