import SearchInput from "../search/SearchInput"
// import Carousel from "../ui/Carousel"
// import ComboBox from "../ui/Combobox"


const Header = ({handleSearchProduct, products,selectedName}) =>{
    return (
       <div className="w-full flex items-center justify-center bg-gray-100 ">
        <div className="w-full py-20 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-slate-800 pb-10">Welcome to <span className="text-green-400">Shoppit</span></h2>
       
          
         <SearchInput 
         products={products}
         handleSearchProduct={handleSearchProduct}
         selectedName={selectedName} 
          />
        
       
        </div>
       </div>
    )
}

export default Header