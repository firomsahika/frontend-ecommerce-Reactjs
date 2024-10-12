import HomeCard from "./HomeCard"

const CardContainer = ({products}) =>{
    return (
       <section className = "flex flex-col items-center justify-center gap-10 py-10">
         <h4 className="text-3xl font-semibold ">Our Products</h4>
         <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {
                  products.map(product => <HomeCard key={product.id} product={product}/>)
                }
               
            </div>
         </div>
       </section>
    )
}

export default CardContainer