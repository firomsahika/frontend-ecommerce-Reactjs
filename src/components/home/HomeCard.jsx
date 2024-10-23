import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api';

const HomeCard = ({ product }) => {
  return (
    <div className="w-full max-w-xl mx-auto"> {/* Increased max-w-xs to max-w-md */}
      <Link to={`/products/${product.slug}`}>
        <div className="flex  flex-col items-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200 overflow-hidden">
          {/* Image Section */}
          <div className="w-full border-b h-48  bg-gray-100 flex items-center justify-center">
            <img
              src={`${BASE_URL}${product.image}`}
              alt={product.name}
              className="h-full object-cover"
            />
          </div>

          {/* Product Info Section */}
          <div className="p-4 w-full">
            <h5 className="text-gray-800 text-lg font-semibold mb-2 line-clamp-1">
              {product.name}
            </h5>
            <p className="text-gray-500 text-sm mb-2">
              Price: <span className="text-green-500 font-semibold">${product.price}</span>
            </p>
            <p className="text-gray-500 text-sm">
              RAM: <span className="font-semibold">{product.ram}</span>
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="w-full px-4 pb-4">
            <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
