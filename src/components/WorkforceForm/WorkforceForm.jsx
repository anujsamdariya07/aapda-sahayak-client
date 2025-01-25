import React, { useState } from 'react';

const WorkforceForm = ({ onFormSubmit, type }) => {
  const [workforces, setWorkforces] = useState([
    { skillCategory: '', specificSkill: '', numberOfWorkers: '' },
  ]);

  const handleInputChange = (index, event) => {
    const newWorkforces = [...workforces];
    newWorkforces[index][event.target.name] = event.target.value;
    setWorkforces(newWorkforces);
  };

  const handleAddRow = () => {
    setWorkforces([
      ...workforces,
      { skillCategory: '', specificSkill: '', numberOfWorkers: '' },
    ]);
  };

  const handleRemoveRow = (index) => {
    const newWorkforces = workforces.filter((item, i) => i !== index);
    setWorkforces(newWorkforces);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(workforces);
    onFormSubmit(workforces);
  };

  return (
    <div className='flex flex-col h-full text-[#173B45]'>
      <h1 className='text-2xl font-bold mb-3 text-left'>
        {type === 'regsiter-agency'? 'Equipment Details': 'Workforce Requirements'}
      </h1>

      <form onSubmit={handleSubmit} className='w-full max-w-3xl'>
        {workforces.map((item, index) => (
          <div key={index} className='gap-4 mb-4 flex'>
            {/* Skill Category */}
            <div className='w-1/2'>
              <label className='label'>
                <span className='label-text text-lg font-semibold text-[#173B45]'>
                  Skill Category
                </span>
              </label>
              <input
                type='text'
                name='skillCategory'
                value={item.skillCategory}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='Type skill category'
                className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              />
            </div>

            {/* Specific Skill */}
            <div className='w-1/2'>
              <label className='label'>
                <span className='label-text text-lg font-semibold text-[#173B45]'>
                  Specific Skill
                </span>
              </label>
              <input
                type='text'
                name='specificSkill'
                value={item.specificSkill}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='Type specific skill'
                className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              />
            </div>

            {/* No. of workers */}
            <div className='w-1/2'>
              <label className='label'>
                <span className='label-text text-lg font-semibold text-[#173B45]'>
                  No. of workers
                </span>
              </label>
              <input
                type='number'
                name='numberOfWorkers'
                value={item.numberOfWorkers}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='Type number of workers'
                className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              />
            </div>

            {/* Remove button */}
            <div className='flex'>
              {workforces.length > 1 && (
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

        {/* Add row button */}
        <div className='flex'>
          <button
            type='button'
            onClick={handleAddRow}
            className='btn btn-outline btn-primary mt-4'
          >
            Add Workforce
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

export default WorkforceForm;
