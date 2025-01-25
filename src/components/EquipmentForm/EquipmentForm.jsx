import React, { useState } from 'react';

const EquipmentForm = ({ onFormSubmit, type }) => {
  const [equipments, setEquipments] = useState([
    { equipment: '', quantity: '' },
  ]);

  const handleInputChange = (index, event) => {
    const newEquipments = [...equipments];
    newEquipments[index][event.target.name] = event.target.value;
    setEquipments(newEquipments);
  };

  const handleAddRow = () => {
    setEquipments([...equipments, { equipment: '', quantity: '' }]);
  };

  const handleRemoveRow = (index) => {
    const newEquipments = equipments.filter((item, i) => i !== index);
    setEquipments(newEquipments);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Equipments:', equipments);
    onFormSubmit(equipments);
  };

  return (
    <div className='flex flex-col h-full text-[#173B45]'>
      <h1 className='text-2xl font-bold mb-3 text-left'>
      {type === 'regsiter-agency'? 'Equipment Details': 'Equipment Requirements'}
      </h1>

      <form onSubmit={handleSubmit} className='w-full max-w-3xl'>
        {equipments.map((item, index) => (
          <div key={index} className='flex gap-4 mb-4 '>
            {/* Equipment Name */}
            <div className='w-1/2'>
              <label className='label'>
                <span className='label-text text-lg font-semibold text-[#173B45]'>
                  Equipment Name
                </span>
              </label>
              <input
                type='text'
                name='equipment'
                value={item.equipment}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='Type equipment name'
                className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              />
            </div>

            {/* Quantity */}
            <div className='w-1/2'>
              <label className='label'>
                <span className='label-text text-lg font-semibold text-[#173B45]'>
                  Quantity
                </span>
              </label>
              <input
                type='number'
                name='quantity'
                value={item.quantity}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='Enter quantity'
                className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              />
            </div>

            {/* Remove Button */}
            <div className='flex '>
              {equipments.length > 1 && (
                <div className='hover:text-white'>
                  <button
                    type='button'
                    onClick={() => handleRemoveRow(index)}
                    className='btn btn-outline btn-error mt-11 ml-3'
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Add Row Button */}
        <div className='flex'>
          <button
            type='button'
            onClick={handleAddRow}
            className='btn btn-outline btn-primary mt-4'
          >
            Add Equipment
          </button>
        </div>

        {/* Submit Button */}
        <div className='flex mt-6'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EquipmentForm;
