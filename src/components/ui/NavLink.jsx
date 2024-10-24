import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";



const NavBarLink = () => {
  const { isAuthenticated, username, setIsAuthenticated } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  }

  return (
    <ul className="flex items-center justify-center md:flex-row gap-2 w-full  font-semibold">
      {isAuthenticated ? (
        <>
          <li className='  flex flex-col items-center justify-center'>
            <NavLink
              to="/profile"
              className="flex flex-col gap-0 items-center justify-center"
            >
           <div className='flex flex-col gap-y-0 items-center justify-center pt-3'>
           <FaUserLarge size={30} className='text-green-400  rounded-full border '/>
            <div className='flex items-center justify-center'>
            <span className='text-xs text-slate-500'>Me</span>
            <RiArrowDropDownLine size={25}/>
            </div>


           </div>
            </NavLink>

          </li>
          <li onClick={logout}>
            
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm" : "text-green-400"}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm" : "text-green-400"}
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavBarLink;
