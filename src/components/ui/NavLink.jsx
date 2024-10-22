import { AuthContext } from '@/context/AuthContext'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBarLink = () => {

    const { isAuthenticated, username,setIsAuthenticated } = useContext(AuthContext)
    
    
    function logout(){
        localStorage.removeItem("access")
        setIsAuthenticated(false)
    }
  

    return (
        <ul className="flex   gap-10 w-full text-green-400 font-semibold">
            {isAuthenticated ?

                <>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm  font-bold" : "text-green-400"}
                        >
                          {`Hi, ${username}`}
                        </NavLink>
                    </li>
                    <li onClick={logout}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm " : "text-green-400"}
                        >
                            logout
                        </NavLink>
                    </li>
                </>
                :
                <>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm " : "text-green-400"}
                        >
                            login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive }) => isActive ? "bg-green-400 text-slate-800 font-bold text-md px-4 py-2 rounded-sm " : "text-green-400"}
                        >
                            register
                        </NavLink>
                    </li>
                </>


            }

        </ul>
    )
}

export default NavBarLink