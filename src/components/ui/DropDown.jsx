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

  

const DropDown = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="flex gap-x-5"><BiMenuAltLeft size={28}/>Browse categories<RiArrowDropDownLine size={28}/></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default DropDown
  
