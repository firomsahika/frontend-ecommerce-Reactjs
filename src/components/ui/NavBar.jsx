import { FaCartShopping, FaBars } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import NavLink from "../../components/ui/NavLink"; 
import SearchInput from "../search/SearchInput";
import NavBarLink from "../../components/ui/NavLink";
import { useState, useEffect } from 'react';
import DropDown from "./DropDown";
import { BsTelephoneInbound } from "react-icons/bs";
import api from "@/api";


const NavBar = ({ numCartItems }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedName, setSelectedName] = useState("");
 

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedName) {
          response = await  api.get(`search_product/${selectedName}`);
        } else if (selectedCategory) {
          response = await api.get(`product_category/${selectedCategory}`);
        } else if (selectedRam) {
          response = await api.get(`product_ram/${selectedRam}`);
        } else {
          response = await api.get("products");
        }
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedRam, selectedName]);

  useEffect(() => {
    if (!localStorage.getItem("cart_code")) {
      localStorage.setItem("cart_code", randomValue());
    }
  }, []);

  const handleSearchProduct = (name) => {
    setSelectedName(name);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRamChange = (label) => {
    setSelectedRam(label);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedRam("");
    setSelectedName("");
  };

 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col pt-3 z-40  w-full items-center h-34 bg-white border-b fixed justify-between  shadow-md">
      <div className="w-full flex items-center justify-between sm:px-4 md:px-14">
      <div className="flex gap-5 items-center">
        <Link to="/" className="text-2xl font-bold text-black ">Shoppit</Link>
      </div>

      <div>
        <SearchInput 
        handleSearchProduct={handleSearchProduct}
        products={products}
        selectedName={selectedName}
        />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <NavBarLink />
        <Link to="/cart" className="flex items-center justify-center gap-2 relative">
          <span className="text-xs font-semibold text-slate-600  items-center flex  flex-col justify-center ">
          <BsCart3 size={32}/>
          
          </span>

          {numCartItems > 0 && (
            <span className="absolute left-4 bottom-8 font-semibold flex items-center justify-center bg-yellow-400 rounded-full h-6 w-6">
              {numCartItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden  p-2 text-green-400">
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
      </div>
      
      <div className=" w-full flex items-center  relative justify-between bg-[#fedc19] p-3 mt-4 px-5">
        <div className="md:px-4 sm:px-4  flex items-center justify-center">
           <li className="bg-black font-bold left-14 text-white px-4 py-4 h-full absolute flex items-center justify-center ">
              <DropDown />
            </li>
          <ul className="flex left-80 absolute gap-10 pl-20">
            
              <li className="">Home</li>
              <li>About</li>
              <li>Contact</li>
             
          
            
          </ul>
        </div>
        <div className="flex gap-x-2 items-center justify-center">
            <p>
            <BsTelephoneInbound />
            </p>
            <p>
              Hotline: +251-917-627-181
            </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
