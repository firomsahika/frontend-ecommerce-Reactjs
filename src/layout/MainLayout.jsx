import NavBar from "../components/ui/NavBar"
import Footer from "../components/ui/Footer"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Outlet} from 'react-router-dom'

const MainLayout = ({numCartItems}) =>{
    return(
        <main className="flex flex-col min-h-screen">
          <NavBar numCartItems={numCartItems}/>
          <ToastContainer />
         <div className="flex-grow pt-16">
         <Outlet />
         </div>
          <Footer />
        </main>
    )
}

export default MainLayout