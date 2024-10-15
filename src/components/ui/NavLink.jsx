import {Link} from 'react-router-dom'

const NavLink = () =>{
    return (
        <ul className="flex gap-10 w-full text-yellow-400 font-semibold">
            <li>
                <a>Home</a>
            </li>
            <li>
                <Link to="/profile">Shop</Link>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
    )
}

export default NavLink