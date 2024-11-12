import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api';
import { useState } from 'react';
import api from '../../api';
import Rating from '../ui/Rating';

const HomeCard = ({ product, setNumCartItems }) => {
  const [inCart, setInCart] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cart_code = localStorage.getItem("cart_code");

  const newItem = {
    cart_code: cart_code,
    product_id: product.id,
  };

  function add_item() {
    api.post("add_item/", newItem)
      .then(res => {
        console.log(res.data);
        toast.success("Product added to cart!✅");
        setInCart(true);
        setNumCartItems(curr => curr + 1);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  return (
    <div
      className="w-full max-w-md mx-auto relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.slug}`}>
        <div
          id="product-item"
          className="flex text-gray-400 flex-col items-center bg-white 
          hover:shadow-xl duration-300 rounded-lg border overflow-hidden hover:scale-110"
        >
          {/* Image Section */}
          <div className="w-full bg-gray-100 flex items-center justify-center">
            <img
              src={`${BASE_URL}${product.image}`}
              alt={product.name}
              className="h-full object-cover"
            />
          </div>

          {/* Product Info Section */}
          <div className="p-4 w-full">
            <h5
              id="product-name"
              className="text-gray-500 text-md font-semibold mb-2 line-clamp-1"
            >
              {product.name}
            </h5>
            <span className="py-2">
              <Rating rating={product.rating}/>
            </span>
            <p
              id="product-price"
              className="text-gray-500 text-sm mb-2"
            >
              <span className="text-gray-800 font-bold">${product.price}</span>
            </p>
          </div>

           {/* Conditionally Render Add to Cart Button */}
      {hovered && (
        <div className="w-full px-4 pb-2 absolute bottom-0 duration-500 ">
          <button
            onClick={add_item}
            className="w-full bg-yellow-400 text-black font-medium py-2 rounded-md hover:bg-black hover:text-gray-100  duration-300"
          >
            Add to Cart
          </button>
        </div>
      )}
        </div>
      </Link>

     
    </div>
  );
};

export default HomeCard;
