import {Link} from 'react-router-dom'
import { BASE_URL } from "../../api"

const HomeCard = ({product}) =>{
      return (
        <div className='w-full'>
            <Link to={`/products/${product.slug}`}>
               <div className="flex w-54 p-4 flex-col items-center justify-center border rounded-xl ">
                <div className='w-full'>
                    <img src={`${BASE_URL}${product.image}`} alt="product-image"
                    className="w-full object-cover rounded-xl h-40"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h5 className="text-slate-600 text-sm">{product.name}</h5>
                    <h6 className="text-slate-600 text-sm">${product.price}</h6>
                    <h6 className="text-slate-600 text-sm">{product.ram}</h6>
                </div>
                <button className="px-4 py-2 mt-2 border bg-slate-900 font-semibold text-yellow-400 rounded-md">
                    Add to Cart
                </button>
                </div>
                
            </Link>

            
           
        </div>
      )
}

export default HomeCard