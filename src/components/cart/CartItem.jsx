import {BASE_URL} from "../../api"
import {useState} from "react"
import api from "../../api"


const CartItem = ({ item }) => {

   const [quantity, setQuantity] = useState(item.quantity)

   const itemData = {
     item_id:item.id,
     quantity:quantity
   }

   function updateCartItem(){
     api.patch("update_quantity/", itemData)
     .then(res =>{
      console.log(res.data)
     })
     .catch(err =>{
      console.log(err.message)
     })
   }

    return (
      <div className="flex flex-col gap-4">
    
            <div key={item.id} className="flex items-center justify-between gap-40 bg-slate-100 rounded-md p-4">
              <div className="flex items-center gap-2">
                <div>
                  <img src={`${BASE_URL}${item.product.image}`} alt="product image" className="w-20 h-20 object-cover rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                  <p>{item.product.name}</p>
                  <p>{`$${item.product.price}`}</p>
                </div>
              </div>
  
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    className="border w-14 border-gray-300 rounded p-2"
                    value={quantity}
                    onChange={(e) =>setQuantity(e.target.value)}
                    min="1"
                    
                  />
                </div>
  
                <button className="bg-blue-600 px-4 py-2 rounded-md text-gray-200"
                onClick={updateCartItem}
                >UpdateQuantity</button>
                <button className="bg-red-500 px-4 rounded-md text-black py-2">Remove</button>
              </div>
            </div>
    
        
      </div>
    );
  };
  
  export default CartItem;
  