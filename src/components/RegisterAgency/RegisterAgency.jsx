import React, { useEffect, useState } from 'react';
import EquipmentForm from '../EquipmentForm/EquipmentForm';
import WorkforceForm from '../WorkforceForm/WorkforceForm';
import AccountDetails from '../AccountDetails';

const RegisterAgency = () => {
  const [equipmentData, setEquipmentData] = useState([]);
  const [workforceData, setWorkforceData] = useState([]);
  const [accountData, setAccountData] = useState([]);

  const [formData, setFormData] = useState({
    agencyId: '',
    agencyName: '',
    headName: '',
    headContactNumber: '',
    expertise: '',
    address: '',
    equipmentDetails: [],
    workforceDetails: [],
    about: '',
    accountDetails: {},
  });

  const handleSubmit = () => {
    formData['workforceDetails'] = [...workforceData];
    formData['equipmentDetails'] = [...equipmentData];
    formData['accountDetails'] = { ...accountData };
    console.log('Form Data:', formData);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleEquipmentFormSubmit = (equipments) => {
    // console.log('Received Equipments:', equipments)
    setEquipmentData(equipments);
  };

  useEffect(() => {
    // console.log('Updated Equipment Data:', equipmentData);
  }, [equipmentData]);

  const handleWorkforceFormSubmit = (workforce) => {
    // console.log('Received Workforce:', workforce)
    setWorkforceData(workforce);
  };

  useEffect(() => {
    // console.log('Updated Worforce Data:', workforceData);
  }, [workforceData]);

  const handleAccountDetailsSubmit = (accountDetails) => {
    console.log('Received Account Details:', accountDetails);
    setAccountData(accountDetails);
  };

  return (
    <div className='min-h-screen h-auto flex justify-between items-center text-lg text-[#173B45] bg-[#F8EDED]'>
      {/* <div className='w-1/2 text-center py-5'> */}
      <div className='p-5 flex flex-col gap-5 items-start justify-center h-full ml-10'>
        <h1 className='text-4xl font-bold underline'>Agency Registration</h1>

        {/* Agency ID */}
        <label className='form-control w-full max-w-md mt-4'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Agency ID
            </span>
          </div>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold'
            name='agencyId'
            id='agencyId'
            value={formData.agencyId}
            onChange={handleChange}
          />
        </label>

        {/* Agency Name */}
        <label className='form-control w-full max-w-md mt-4'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Agency Name
            </span>
          </div>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold'
            name='agencyName'
            id='agencyName'
            value={formData.agencyName}
            onChange={handleChange}
          />
        </label>

        {/* Head Name and Contact */}
        <div className='flex gap-8 items-center w-full'>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg font-semibold text-[#173B45]'>
                Head Name
              </span>
            </div>
            <input
              type='text'
              placeholder='Enter head name'
              className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              name='headName'
              id='headName'
              value={formData.headName}
              onChange={handleChange}
            />
          </label>

          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg font-semibold text-[#173B45]'>
                Head Contact Number
              </span>
            </div>
            <input
              type='text'
              placeholder='Enter contact number'
              className='input input-bordered w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
              name='headContactNumber'
              id='headContactNumber'
              value={formData.headContactNumber}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Expertise */}
        <label className='form-control w-full max-w-md'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Expertise
            </span>
          </div>
          <textarea
            className='textarea textarea-bordered w-full h-24 bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            placeholder='Expertise'
            name='expertise'
            id='expertise'
            value={formData.expertise}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Address */}
        {/* TODO: Add 'Select from map functionality' */}
        <label className='form-control w-full max-w-md'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              Address
            </span>
          </div>
          <textarea
            className='textarea textarea-bordered w-full h-24 bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            placeholder='Address'
            name='address'
            id='address'
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </label>

        <EquipmentForm
          onFormSubmit={handleEquipmentFormSubmit}
          type={'register-agency'}
        />

        <WorkforceForm
          onFormSubmit={handleWorkforceFormSubmit}
          type={'register-agency'}
        />

        {/* About */}
        <label className='form-control w-full max-w-md'>
          <div className='label'>
            <span className='label-text text-lg font-semibold text-[#173B45]'>
              About
            </span>
          </div>
          <textarea
            className='textarea textarea-bordered w-full h-24 bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
            placeholder='About'
            name='about'
            id='about'
            value={formData.about}
            onChange={handleChange}
          ></textarea>
        </label>

        <AccountDetails onAccountDetailsSubmit={handleAccountDetailsSubmit} />

        <button
          className='btn text-white font-semibold text-xl w-full btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default RegisterAgency;
