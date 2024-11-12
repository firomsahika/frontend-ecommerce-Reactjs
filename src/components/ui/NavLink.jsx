import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";


const NavBarLink = () => {
  const { isAuthenticated, username, setIsAuthenticated } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  }

  const trimmedUsername = username.trim();
  const user_name = trimmedUsername.charAt(0);

  return (
    <ul className="flex items-center justify-center md:flex-row gap-2 w-full  font-semibold">
      {isAuthenticated ? (
        <>
          <li className=' flex flex-col items-center justify-center'>
            <NavLink
              to="/profile"
              className="flex flex-col gap-0 items-center justify-center"
            >
             <div className=' flex flex-col itece justify-center rounded-full'>
             < p className='bg-green-400 text-slate-800      flex items-center justify-center border rounded-full text-3xl'>{user_name}</p>
             <span className='text-slate-600 text-xs'>Profile</span>
             </div>
          
           {/* <div className='flex flex-col gap-y-0 items-center justify-center pt-3'>
           
           
            <span className='text-green-400 rounded-md border'>{user_name}</span>
            <div className='flex items-center justify-center'>
            <span className='text-xs text-slate-500'>Me</span>
            <RiArrowDropDownLine size={25}/>
            </div>


           </div> */}
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
              className={({ isActive }) => isActive ?
               "bg-yellow-400 text-slate-800 font-bold flex items-center justify-center text-md px-4 py-2 rounded-sm" 
               : "text-black flex items-center justify-center "}
            >
              <LuUser size={32}/>
              Login
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/register"
              className={({ isActive }) => isActive ?
               "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm"
                : "text-black"}
            >
              Register
            </NavLink>
          </li> */}
        </>
      )}
    </ul>
  );
};

export default NavBarLink;
