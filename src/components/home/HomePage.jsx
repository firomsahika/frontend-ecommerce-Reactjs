import Header from "./Header"
import CardContainer from "./CardContainer"
import api from "../../api"
import {useEffect, useState} from 'react'
import PlaceHolderContainer from "../ui/PlaceHolderContainer"
import {randomValue} from "../../GenerateCartCode"


const HomePage = () =>{
   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


  useEffect(function(){
    if(localStorage.getItem("cart_code")=== null){
      localStorage.setItem("cart_code", randomValue)
    }

  },[])


   useEffect(function(){
    setLoading(true)
    api.get("products")
    .then(res =>{
     console.log(res.data)
     setProducts(res.data)
     setLoading(false)
    })

    .catch(err =>{
         console.log(err.message)
         setLoading(false)
    })
   },[])



    return(
        <>
          <Header />
          {loading ?   <PlaceHolderContainer /> : <CardContainer products={products}/>}
        
          
        </>
    )
}

export default HomePage