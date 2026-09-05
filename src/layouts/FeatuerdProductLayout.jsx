import { Outlet } from "react-router-dom";
import Header from "../components/Headeer";
import Footer from '../components/Footer'

export default function CategoryPage() {
  return (
    <div>
       <Header/>
       <main>
         <Outlet/>
       </main>
       <Footer/>
    </div>
  )
}
