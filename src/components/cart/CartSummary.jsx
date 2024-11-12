import { useNavigate } from "react-router-dom";


const CartSummary = ({cartTotal, tax}) => {
  const subTotal = cartTotal.toFixed(2)
  const cartTax = tax.toFixed(2)
  const total = (cartTotal + tax).toFixed(2)

  const navigate = useNavigate()

  const handleCheckout = () =>{
    const token = localStorage.getItem("access")

    if (!token){
      navigate("/login", {state: {from: "/checkout"}})
    }else{
      navigate("/checkout")
    }
  }

  return (
    <div className="flex flex-col gap-y-10 border p-2 rounded-md">
      <div className="border-b">
        <h4>Cart Summary</h4>
      </div>
      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-center justify-end gap-20">
          <p>Subtotal</p>
          <strong>{`$${subTotal}`}</strong>
        </div>
        <div className="flex items-center justify-end gap-32">
          <p>Tax</p>
          <strong>{`$${cartTax}`}</strong>
        </div>
        <div className="flex items-center justify-end gap-28">
          <p>total</p>
          <strong>{`$${total}`}</strong>
        </div>
      </div>
      <div>
       
         <button
         onClick={handleCheckout}
          className="bg-green-400 rounded-md px-4 py-2 w-full text-white text-md font-bold text-center">
          Proceed to Checkout
         </button>
       
      </div>
    </div>
  );
};

export default CartSummary;
