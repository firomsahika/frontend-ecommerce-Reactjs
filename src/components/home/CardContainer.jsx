import HomeCard from "./HomeCard"

const CardContainer = ({products,resetFilters,setNumCartItems}) =>{


    return (
       <section className = "flex  flex-col items-center justify-center gap-10 ">
        <div className="flex items-center justify-between w-full">
          <button onClick={resetFilters} className="border px-4 py-2 rounded-md bg-black text-gray-200 font-bold">
            All Products
          </button>
          
        </div>
         <div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
                {
                  products.map(product => <HomeCard key={product.id} product={product} setNumCartItems={setNumCartItems}/>)
                }
               
            </div>
         </div>
       </section>
    )
}

export default CardContainer