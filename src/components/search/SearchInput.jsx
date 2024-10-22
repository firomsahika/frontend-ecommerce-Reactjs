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
      <div className="flex items-center justify-start  relative ">
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search product..." 
          type="text"
          className="pl-14 w-[27rem] h-12 rounded-2xl outline-none text-black"
        />
        <span className="absolute pl-3 flex items-center justify-center ">
          <CiSearch size={36} className="text-gray-300" />
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
