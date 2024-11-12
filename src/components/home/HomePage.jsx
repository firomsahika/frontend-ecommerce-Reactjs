import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import { useEffect, useState } from 'react';
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import { randomValue } from "../../GenerateCartCode";
import SideBar from "../ui/SideBar";



const HomePage = ({setNumCartItems}) => {
  const categories = [
    { id: 1, category: "Asus" },
    { id: 2, category: "Dell" },
    { id: 3, category: "Hp" },
    { id: 4, category: "Macbook" },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedName, setSelectedName] = useState("");
 
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedName) {
          response = await api.get(`search_product/${selectedName}`);
        } else if (selectedCategory) {
          response = await api.get(`product_category/${selectedCategory}`);
        } else if (selectedRam) {
          response = await api.get(`product_ram/${selectedRam}`);
        } else {
          response = await api.get("products");
        }
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedRam, selectedName]);

  useEffect(() => {
    if (!localStorage.getItem("cart_code")) {
      localStorage.setItem("cart_code", randomValue());
    }
  }, []);

  const handleSearchProduct = (name) => {
    setSelectedName(name);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRamChange = (label) => {
    setSelectedRam(label);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedRam("");
    setSelectedName("");
  };

 

  return (
    <>
      <Header 
      />
      <div className="flex items-start justify-center mx-10 gap-10 my-28">
        {/* <SideBar
          products={products}
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
          handleRamChange={handleRamChange}
          selectedRam={selectedRam}
          resetFilters={resetFilters}
        /> */}
        {loading ? <PlaceHolderContainer /> : <CardContainer setNumCartItems={setNumCartItems} resetFilters={resetFilters} products={products} />}
      </div>
    </>
  );
};

export default HomePage;
