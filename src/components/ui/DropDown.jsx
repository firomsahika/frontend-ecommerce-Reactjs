import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { BiMenuAltLeft } from "react-icons/bi";
  import { RiArrowDropDownLine } from "react-icons/ri";

  

const DropDown = ({selectedCategory, handleCategoryClick, categories}) => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex gap-x-5 "><BiMenuAltLeft size={28}/>Browse categories<RiArrowDropDownLine size={28}/></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel className="text-2xl fontsemibold">Categories</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-md">
      <ul className="space-y-2 mt-2">
          {categories.map((cat) => (
            <DropdownMenuItem
              key={cat.id}
              onClick={() => handleCategoryClick(cat.category)}
              className={`text-md px-2 py-1 cursor-pointer rounded-md hover:bg-gray-100 ${
                selectedCategory === cat.category ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {cat.category}
            </DropdownMenuItem>
          ))}
        </ul>
      </DropdownMenuItem>




      {/* <DropdownMenuItem className="text-md">Watches</DropdownMenuItem>
      <DropdownMenuItem className="text-md">Mobile</DropdownMenuItem>
      <DropdownMenuItem className="text-md">Laptop</DropdownMenuItem>
      <DropdownMenuItem className="text-md">Speaker</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default DropDown
  
