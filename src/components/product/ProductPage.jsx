import { useParams } from 'react-router-dom'
import {useEffect,useState} from 'react'
import { BASE_URL } from "../../api"


import RelatedProducts from "./RelatedProducts"
import ProductPagePlaceHolder from "./ProductPagePlaceHolder"
import api from "../../api"


const ProductPage = () =>{
    const {slug} = useParams();
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const  [inCart, setInCart] = useState(false)    
    const cart_code = localStorage.getItem("cart_code")

    useEffect(function(){
        if(product.id){
            api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
            .then(res =>{
                console.log(res.data)
                setInCart(res.data.product_in_cart)
            })
            .catch(err =>{
                console.log(err.message)
            })
        }
    },[cart_code, product.id])

    const newItem = {
        cart_code: cart_code,
        product_id: product.id
    }

    function add_item(){
        api.post("add_item/", newItem)
        .then(res =>{
            console.log(res.data)
            setInCart(true)
        })
        .catch(err =>{
            console.log(err.message)
        })
    }

    useEffect(function(){
        setLoading(true)
        api.get(`product_detail/${slug}`)
        .then(res =>{

            console.log(res.data)
            setProduct(res.data)
            setSimilarProducts(res.data.similar_products)
            setLoading(false)
            
        })
        .catch(err =>{
            console.log(err)
            setLoading(false)
        })
    },[slug])

    if(loading){
        return  <ProductPagePlaceHolder/> 
    }

    
    return(
        <div className="flex flex-col py-20  gap-14">
         
            <section className="flex items-center justify-center">
               <div className="flex w-full items-center justify-center gap-10 ">
                <div className=" rounded-xl  border">
                    <img 
                    className="rounded-xl w-96 h-80  object-cover"
                    src={`${BASE_URL}${product.image}`}
                    />
                </div>
                <div className="flex flex-col items-start gap-4 max-w-xl text-wrap">
                    <p className="text-2xl font-semibold">{product.name}</p>
                    <p className="text-slate-600">{`$${product.price}`}</p>
                    <p className='flex text-wrap max-w-md text-slate-600'>{product.description}</p>
                    <button className="bg-slate-700 text-white px-4 py-2 rounded-2xl"
                    onClick={add_item}>  
                      {inCart ? "Product added to cart!" : "Add To Cart"}
                    </button>
                </div>
               </div>
            </section>
            <RelatedProducts products={similarProducts}/>
        </div>
    )
}

export default ProductPage