import React, { useState } from 'react';
import ComboInput from './ComboBoxInput'; // Import the AssetInput component

const ComboBox = () => {
  const [asset, setAsset] = useState(null);

  const handleAssetChange = (selectedAsset) => {
    setAsset(selectedAsset);
    console.log('Selected Asset:', selectedAsset);
  };

  return (
    <div className="max-w-sm mx-auto p-4 space-y-8">
      <div className='bg-yellow-400 my-3 '>
        <h4 className='text-slate-800 p-3 font-semibold'>Comparison Between two laptops</h4>
      </div>
      <ComboInput
        label="Laptop 1"
        value={asset}
        onChange={handleAssetChange}
      />
      <ComboInput
        label="Laptop 2"
        value={asset}
        onChange={handleAssetChange}
        
      />
      <button className='bg-slate-700 rounded-sm px-4 py-2 text-white'>Compare</button>
      {asset && <p className="mt-4">You selected: {asset.name}</p>}
    </div>
  );
};

export default ComboBox;
