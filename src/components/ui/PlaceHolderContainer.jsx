import PlaceHolder from "./PlaceHolder"

const PlaceHolderContainer = () =>{
    
    const placeNumbers = [...Array(12).keys()].slice(0);

    return(
       <section className="flex flex-col w-full gap-5 py-10">
        <h4 className="text-3xl font-semibold flex items-center justify-center py-4">Our Products</h4>
         <div className="">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-32">
                {placeNumbers.map(num => <PlaceHolder key={num}/>)}
                
            </div>
         </div>
       </section>
    )
}

export default PlaceHolderContainer