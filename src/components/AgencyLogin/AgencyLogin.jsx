import React, { useState } from 'react';

const AgencyLogin = () => {
  const [formData, setFormData] = useState({
    agencyId: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className='min-h-96 h-auto flex  text-lg text-[#173B45] bg-white'>
      {/* <div className='w-1/2 text-center py-5'> */}
      <div className='px-5 py-7 flex flex-col gap-5 items-start justify-center h-full ml-10'>
        <h1 className='text-3xl font-bold'>Agency Login</h1>

        {/* Agency ID */}
        <label className='form-control w-full max-w-lg mt-4'>
          {' '}
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Agency ID
            </span>
          </div>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-[500px] bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold'
            name='agencyId'
            id='agencyId'
            value={formData.agencyId}
            onChange={handleChange}
          />
        </label>

        {/* Email */}
        <label className='form-control w-full max-w-lg'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Email Address
            </span>
          </div>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            required
          />
        </label>

        {/* Password */}
        <label className='form-control w-full max-w-lg'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Password
            </span>
          </div>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            required
          />
        </label>

        <button
          className='mt-5 btn text-white font-semibold text-xl w-full btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AgencyLogin;
