import { useEffect, useState } from "react"
import api from "../api"

function useOrderedData(){
   const [items, setItems] = useState([])
   const [cartTotal, setCartTotal] = useState(0.00)
   const tax = 4
   
   const [loading, setLoading] = useState(false)
   
   useEffect(function(){
    setLoading(true)
    api.get('get_user_info')
    .then (res =>{
      console.log(res.data)
      setLoading(false)
      setItems(res.data.items)
      setCartTotal(res.data.sum_total)
    })
    .catch(err =>{
      console.log(err.message)
      setLoading(false)
    })
   },[])

   return {items, setItems,cartTotal, setCartTotal ,loading, tax}

}

export default useOrderedData