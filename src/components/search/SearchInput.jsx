import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import api from "../../api";  // Assuming this is the axios instance

const SearchInput = ({ handleSearchProduct, selectedName }) => {
  const [inputValue, setInputValue] = useState(selectedName);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounce function to delay API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchSuggestions = async (name) => {
    try {
      if (name.length > 0) {
        const response = await api.get(`search_product/${name}`);
        setSuggestions(response.data);
        setShowSuggestions(true);  // Show suggestions when results are available
      } else {
        setSuggestions([]);  // Clear suggestions if input is empty
        setShowSuggestions(false);
      }
    } catch (error) {
      console.log("Error fetching suggestions", error);
    }
  };

  const debouncedFetch = debounce(fetchSuggestions, 300);  // Debounce API call by 300ms

  const handleInputChange = (e) => {
    const name = e.target.value;
    setInputValue(name);
    debouncedFetch(name);  // Fetch suggestions as user types
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setShowSuggestions(false);  // Hide suggestions after user selects one
    handleSearchProduct(suggestion.name);  // Search for the selected product
  };

  return (
    <div className="relative w-full flex items-center justify-center">
    
      <div className="flex items-center justify-end  relative ">
          
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search product..." 
          type="text"
          className="pl-40 w-[34rem] h-12  outline-none text-black border"
          
        />
         <span className="absolute left-0  pl-3 p-4 text-sm  h-full text-[#555555] bg-[#e4e3e3] flex items-center justify-center
         ">
         All categories
        </span>
        <span className="absolute font-semibold pl-3 p-4  h-full bg-[#fedc19] flex items-center justify-center
         hover:bg-black duration-100 transition-all hover:text-white  ">
         Search
        </span>
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-12  bg-white border border-gray-200 rounded-xl w-[27rem] max-h-60 overflow-y-auto z-10 shadow-lg">
          {suggestions.map((suggestion) => (
            <li 
              key={suggestion.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
