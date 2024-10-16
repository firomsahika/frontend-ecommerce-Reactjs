import Carousel from "../ui/Carousel"
import ComboBox from "../ui/Combobox"


const Header = () =>{
    return (
       <div className="flex mx-10 gap-x-60 items-center justify-center py-16">
          <Carousel />
          <div className="flex flex-col">
          <ComboBox />
         
          </div>
       </div>
    )
}

export default Header