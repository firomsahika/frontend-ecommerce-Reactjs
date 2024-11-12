import React from 'react';
import Combobox from './Combobox';

const ComboPage = () => {
  const options = [
    'Asus',
    'Dell',
    'Hp',
    'Macbook',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Combobox Example</h1>
      <Combobox options={options} />
    </div>
  );
};

export default ComboPage;
