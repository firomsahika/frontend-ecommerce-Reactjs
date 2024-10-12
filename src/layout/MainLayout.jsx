import NavBar from "../components/ui/NavBar"
import Footer from "../components/ui/Footer"
import {Outlet} from 'react-router-dom'

const MainLayout = ({numCartItems}) =>{
    return(
        <main className="flex flex-col min-h-screen">
          <NavBar numCarItems={numCartItems}/>
         <div className="flex-grow">
         <Outlet />
         </div>
          <Footer />
        </main>
    )
}

export default MainLayout