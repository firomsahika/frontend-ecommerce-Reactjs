const Sidebar = ({ categories,handleRamChange,resetFilters, selectedRam, handleCategoryClick, selectedCategory }) => {
    const ramOptions = [
      { id: 'ram-8gb', label: '8GB' },
      { id: 'ram-16gb', label: '16GB' },
      { id: 'ram-32gb', label: '32GB' },
    ];
  
    return (
      <div className="sm:hidden w-1/4 md:flex flex-col items-start justify-start mt-16 p-4 border h-screen  bg-white">
        
        <h4 className="text-xl font-semibold mb-4">Filter by:</h4>
  
        {/* RAM Section */}
        <div className="mb-4">
          <h5 className="font-semibold mb-2">RAM</h5>
          <ul className="space-y-2 ml-4">
            {ramOptions.map((option) => (
              <li key={option.id}>
                <label className="flex items-center">
                  <input 
                  type="checkbox"
                   className="mr-2" id={option.id}
                   checked={selectedRam === option.label}
                   onChange={() => handleRamChange(option.label)}
                   />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Model Section */}
        <div>
          <h5 className="font-semibold mb-2">Model</h5>
          <ul className="space-y-2 ml-4">
            {categories.map((cat) => (
              <li key={cat.id}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedCategory === cat.category}
                    
                    onChange={() => handleCategoryClick(cat.category)}
                  />
                  {cat.category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  