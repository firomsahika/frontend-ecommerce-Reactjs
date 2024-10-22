import {Link} from 'react-router-dom'
import { BASE_URL } from "../../api"

const HomeCard = ({product}) =>{
      return (
        <div className='w-full'>
            <Link to={`/products/${product.slug}`}>
               <div className="flex w-full p-2 flex-col items-center justify-center border-2 border-green-400 hover:sca rounded-xl ">
                <div className='w-full'>
                    <img src={`${BASE_URL}${product.image}`} alt="product-image"
                    className=" object-fit rounded-xl h-40"
                    />
                </div>
                <div className="flex flex-col items-start pt-4">
                    <h5 className="text-slate-600 text-sm font-semibold">{product.name}</h5>
                    <h6 className="text-slate-600 text-sm font-semibold">Price: ${product.price}</h6>
                    <h6 className="text-slate-600 text-sm font-semibold">Ram: {product.ram}</h6>
                </div>
                <button className="px-4 py-2 mt-2 border bg-green-400 font-semibold text-white rounded-md">
                    Add to Cart
                </button>
                </div>
                
            </Link>

            
           
        </div>
      )
}

export default HomeCard