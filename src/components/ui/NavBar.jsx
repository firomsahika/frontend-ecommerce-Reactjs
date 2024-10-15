import {FaCartShopping} from "react-icons/fa6"
import { Link } from 'react-router-dom'
import NavLink from "../../components/ui/NavLink" 
import SearchInput from "../search/SearchInput"

const NavBar = ({numCartItems}) =>{
    return(
       <nav className="flex z-40 w-full h-16 bg-slate-700 text-white fixed items-center justify-between px-14">
        <div className="flex gap-5 items-center">
            <Link to="/" className="text-2xl font-semibold text-yellow-400">Shoppit</Link>
            <SearchInput />
        </div>
        <div className="flex items-center gap-4">
            <NavLink />
            <Link to="/cart" className="flex items-center gap-2 relative">
              <FaCartShopping size={30}/>
              {numCartItems === 0 ? <></> : <span className="absolute left-4 bottom-4 text-black font-semibold flex items-center justify-center bg-yellow-400 rounded-full h-6 w-6">
                {numCartItems}
              </span>}
           
            </Link>
        </div>
       </nav>
    )
}

export default NavBar