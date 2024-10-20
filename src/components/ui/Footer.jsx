import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
 
const Footer = () =>{
    return(
        <footer className=' flex items-center text-green-400 font-semibold justify-center bg-slate-900 '>
            <div className="flex flex-col items-center gap-3">
                <div className="flex gap-4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                </div>
                <div className="flex gap-8">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
                <p>&copy; 2024 Shoppit</p>
            </div>
        </footer>
    )
}

export default Footer