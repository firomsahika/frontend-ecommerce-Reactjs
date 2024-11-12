import HomeCard from "../../components/home/HomeCard"


const RelatedProducts = ({products}) =>{
    return (
     <div className="flex flex-col gap-5 items-center justify-center">
        <div>
            <h4 className="text-3xl font-semibold">Related products</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
           {
              products.map(product => <HomeCard key={product.id} product={product}/> )
           }
        </div>
     </div>
    )
 }
 
 
 export default RelatedProducts