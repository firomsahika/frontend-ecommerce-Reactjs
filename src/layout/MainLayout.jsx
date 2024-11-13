import NavBar from "../components/ui/NavBar"
import Footer from "../components/ui/Footer"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Outlet} from 'react-router-dom'

const MainLayout = ({numCartItems,setSelectedCategory,selectedCategory, categories }) =>{
    return(
        <main className="flex flex-col min-h-screen font-poppins">
          <NavBar
          numCartItems={numCartItems}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}  // Pass the selectedCategory prop here
          categories={categories}/>
          <ToastContainer />
         <div className="flex-grow font-poppins">
         <Outlet />
         </div>
          <Footer />
        </main>
    )
}

export default MainLayout