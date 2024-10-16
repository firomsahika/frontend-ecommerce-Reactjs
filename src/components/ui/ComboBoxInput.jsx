import React, { useState } from 'react';

const ComboInput = ({ label, value, onChange }) => {
  // Define the assets array inside the component
  const assets = [
    { id: 'hp', name: 'Hp' },
    { id: 'asus', name: 'Asus' },
    { id: 'mac', name: 'Macbook' },
    { id: 'dell', name: 'Dell' },
  ];

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value ? value.id : ''}
        onChange={(e) => {
          const selectedAsset = assets.find(asset => asset.id === e.target.value) || null;
          onChange(selectedAsset);
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Pc</option>
        {assets.map((asset) => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboInput;
