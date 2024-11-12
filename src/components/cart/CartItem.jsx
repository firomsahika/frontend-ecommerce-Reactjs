import {BASE_URL} from "../../api"
import {useState} from "react"
import api from "../../api"
import {toast} from 'react-toastify'


              
const CartItem = ({ item, setCartTotal,setCartItems, cartItems, setNumCartItems }) => {

   const [quantity, setQuantity] = useState(item.quantity)
   const [loading, setLoading] = useState(false)

   const itemData = { item_id:item.id, quantity:quantity }
   const itemID = {item_id:item.id}

   function deleteCartItem(){
    const confirmDelete = window.confirm("Are you want to delete this cart item?")
    if (confirmDelete){
      api.post("delete_item", itemID)
      .then (res =>{
        toast.success("Deleted item Successfully!")
        console.log(res.data)

        setCartItems(cartItems.filter(cartitem => cartitem.id != item.id))

        setCartTotal(cartItems.filter((cartitem) => cartitem.id != item.id )
        .reduce((acc, curr) => acc+curr.total, 0))

      setNumCartItems(cartItems.filter((cartitem) => cartitem.id != item.id )
      .reduce((acc, curr)=> acc+curr.quantity, 0) )
      })
    
      .catch(err =>{
        console.log(err.message)
      })
     }
    }
   

   function updateCartItem(){
    setLoading(true)
     api.patch("update_quantity/", itemData)
     .then(res =>{
      console.log(res.data)
      setLoading(false)
      toast.success("Cart Item Updated Successfully!!")
      setCartTotal(cartItems.map((cartitem) => cartitem.id===item.id ? res.data.data : cartitem)
    .reduce((acc, curr) => acc+curr.total, 0))

    setNumCartItems(cartItems.map((cartitem) => cartitem.id===item.id ? res.data.data : cartitem)
    .reduce((acc, curr)=> acc+curr.quantity, 0) )
     })

     

     .catch(err =>{
      console.log(err.message)
      setLoading(false)
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
  
                <button className="bg-green-400 px-4 py-2 font-semibold rounded-md text-white"
                onClick={updateCartItem}
                disabled={loading}
                >{loading ? "Updating" : "Update"}</button>
                <button className="bg-red-500 px-4 rounded-md text-black py-2" onClick={deleteCartItem}>Remove</button>
              </div>
            </div>
    
        
      </div>
    );
  };
  
  export default CartItem;
  