import { FaCartShopping, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import NavLink from "../../components/ui/NavLink"; 
import SearchInput from "../search/SearchInput";
import NavBarLink from "../../components/ui/NavLink";
import { useState } from 'react';

const NavBar = ({ numCartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex z-40 w-full items-center h-16 bg-white border-b fixed justify-between px-6 md:px-14 shadow-md">
      <div className="flex gap-5 items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">Shoppit</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <NavBarLink />
        <Link to="/cart" className="flex items-center gap-2 relative">
          <FaCartShopping size={30} className="text-yellow-400" />
          {numCartItems > 0 && (
            <span className="absolute left-4 bottom-4 font-semibold flex items-center justify-center bg-yellow-400 rounded-full h-6 w-6">
              {numCartItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden p-2 text-green-400">
        <FaBars size={28} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg w-48 rounded-md z-50">
          <NavBarLink />
          <Link to="/cart" className="flex items-center gap-2 p-2 hover:bg-gray-100">
            <FaCartShopping size={20} className="text-yellow-400" />
            <span className="font-semibold">Cart</span>
            {numCartItems > 0 && (
              <span className="absolute left-4 bottom-0 font-semibold flex items-center justify-center bg-yellow-400 rounded-full h-6 w-6">
                {numCartItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
