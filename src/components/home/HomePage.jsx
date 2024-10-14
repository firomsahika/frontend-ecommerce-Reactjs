import Header from "./Header"
import CardContainer from "./CardContainer"
import api from "../../api"
import {useEffect, useState} from 'react'
import PlaceHolderContainer from "../ui/PlaceHolderContainer"
import {randomValue} from "../../GenerateCartCode"


const HomePage = () => {

  const categories = [
    {
      id: 1,
      category: "Electronics"
    },   
    {
      id: 2,
      category: "clothings"
    },
    {
      id: 3,
      category: "Groceries"
    }
  ]

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

  // Fetch products based on selected category
  useEffect(function () {
    setLoading(true)

    if (selectedCategory === "") {
      // Fetch all products when no category is selected
      api.get("products")
        .then(res => {
          console.log(res.data)
          setProducts(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.message)
          setLoading(false)
        })
    } else {
      // Fetch products by category
      api.get(`product_category/${selectedCategory}`)
        .then(res => {
          console.log(res.data)
          setProducts(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.message)
          setLoading(false)
        })
    }
  }, [selectedCategory])

  useEffect(function() {
    if (localStorage.getItem("cart_code") === null) {
      localStorage.setItem("cart_code", randomValue)
    }
  }, [])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Header />
      
      <div className="flex items-center justify-center gap-4 my-4">
        <h4 className="text-2xl font-semibold">Categories :</h4>
        {/* "All" Button to show all products */}
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded-md ${selectedCategory === "" ? "bg-slate-700 text-white" : "border"}`}
        >
          All
        </button>

        {/* Category buttons */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.category)}
            className={`px-4 py-2 rounded-md ${selectedCategory === cat.category ? "bg-slate-700 text-white" : " border"}`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {loading ? <PlaceHolderContainer /> : <CardContainer products={products} />}
    </>
  )
}

export default HomePage
