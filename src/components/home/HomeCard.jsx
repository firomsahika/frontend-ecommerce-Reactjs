import {Link} from 'react-router-dom'
import { BASE_URL } from "../../api"

const HomeCard = ({product}) =>{
      return (
        <div>
            <Link to={`/products/${product.slug}`}>
               <div className="flex flex-col items-center justify-center border rounded-xl ">
                <div>
                    <img src={`${BASE_URL}${product.image}`} alt="product-image"
                    className="w-60 object-cover rounded-xl h-60"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h5 className="text-slate-600 text-sm">{product.name}</h5>
                    <h6 className="text-slate-600 text-sm">${product.price}</h6>
                </div>
                </div>
                
            </Link>

            <button className="px-4 py-2 my-2 bg-slate-800 text-white rounded-md">Add to Cart</button>
           
        </div>
      )
}

export default HomeCard