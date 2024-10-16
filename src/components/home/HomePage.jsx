import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import { useEffect, useState } from 'react';
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import { randomValue } from "../../GenerateCartCode";
import SideBar from "../ui/SideBar";


const HomePage = () => {
  const categories = [
    { id: 1, category: "Asus" },
    { id: 2, category: "Dell" },
    { id: 3, category: "Hp" },
    { id: 4, category: "Macbook" },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRam, setSelectedRam] = useState("")

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = selectedCategory  === ""
          ? await api.get("products")
          : await api.get(`product_category/${selectedCategory}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = selectedRam  === ""
          ? await api.get("products")
          : await api.get(`product_ram/${selectedRam}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedRam]);

  useEffect(() => {
    if (localStorage.getItem("cart_code") === null) {
      localStorage.setItem("cart_code", randomValue);
    }
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRamChange = (label) =>{
    setSelectedRam(label)
  }

  return (
    <>
      <Header />
      <div className="flex items-start justify-center mx-10 gap-10 my-28">
       
       <SideBar
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
          handleRamChange={handleRamChange}
          selectedRam={selectedRam}
        />
       
        {loading ? <PlaceHolderContainer /> : <CardContainer products={products} />}
      </div>
    </>
  );
};

export default HomePage;
