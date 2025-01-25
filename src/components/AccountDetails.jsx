import React, { useState } from 'react';

const AccountDetails = ({ onAccountDetailsSubmit }) => {
  const [accountDetails, setAccountDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (accountDetails.password !== accountDetails.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');
    // Send the account details to the parent component
    onAccountDetailsSubmit(accountDetails);
  };

  return (
    <div className='flex flex-col h-full text-[#173B45]'>
      <h1 className='text-2xl font-bold mb-3 text-left'>Account Information</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-3xl'>
        {/* Email */}
        <label className='form-control w-full max-w-md'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Email Address
            </span>
          </div>
          <input
            type='email'
            name='email'
            value={accountDetails.email}
            onChange={handleInputChange}
            placeholder='Enter your email'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            required
          />
        </label>

        {/* Password */}
        <label className='form-control w-full max-w-md mt-4'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Password
            </span>
          </div>
          <input
            type='password'
            name='password'
            value={accountDetails.password}
            onChange={handleInputChange}
            placeholder='Enter your password'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            required
          />
        </label>

        {/* Confirm Password */}
        <label className='form-control w-full max-w-md mt-4'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Confirm Password
            </span>
          </div>
          <input
            type='password'
            name='confirmPassword'
            value={accountDetails.confirmPassword}
            onChange={handleInputChange}
            placeholder='Re-enter your password'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            required
          />
        </label>

        {/* Error Message */}
        {error && <div className='text-red-600 text-sm mt-2'>{error}</div>}

        {/* Submit Button */}
        <div className='flex mt-6'>
          <button type='submit' className='btn btn-primary'>
            Submit Account Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
