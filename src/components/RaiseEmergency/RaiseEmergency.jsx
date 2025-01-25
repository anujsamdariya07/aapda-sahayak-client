import React, { useCallback, useEffect, useState } from 'react';
import MapComponent from '../../maps/Map/Map';
import EquipmentForm from '../EquipmentForm/EquipmentForm';
import WorkforceForm from '../WorkforceForm/WorkforceForm';
import { Link } from 'react-router-dom';

const RaiseEmergency = () => {
  const center = { lat: 23.24691041781924, lng: 77.40023809744822 };

  const [coordinates, setCoordinates] = useState({
    lat: '',
    lng: '',
  });
  const [equipmentData, setEquipmentData] = useState([]);
  const [workforceData, setWorkforceData] = useState([]);

  const [formData, setFormData] = useState({
    coordinates: {},
    disasterType: '',
    level: '',
    equipmentDetails: [],
    workforceDetails: [],
  });

  const handleCoordinates = useCallback((lat, lng) => {
    // setCoordinates
    setCoordinates({
      lat,
      lng,
    });
    console.log('Received Coordinates1:', { lat, lng });
  }, []);

  const handleEquipmentFormSubmit = (equipments) => {
    // console.log('Received Equipments:', equipments)
    setEquipmentData(equipments);
  };

  const handleWorkforceFormSubmit = (workforce) => {
    // console.log('Received Workforce:', workforce)
    setWorkforceData(workforce);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.disasterType === '' || formData.level === '') {
      return
    }
    
    formData['workforceDetails'] = [...workforceData];
    formData['equipmentDetails'] = [...equipmentData];
    formData['coordinates'] = { ...coordinates };
    console.log('Form Data:', formData);
  };

  useEffect(() => {
    console.log('Received Coordinates2:', coordinates);
  }, [coordinates]);

  return (
    <div className='min-h-fit h-auto flex px-5 bg-[#F8EDED] gap-3 items-center justify-between'>
      <div className='min-w-[80%] min-h-[80vh] h-auto rounded-xl flex flex-col p-5 mt-5 gap-5 text-[#173B45]'>
        <h1 className='text-4xl font-bold underline'>Enter Disaster Details</h1>

        <h1 className='text-2xl font-bold text-left'>
          Pinpoint the location on the map below:
        </h1>
        <MapComponent
          apiKey={import.meta.env.VITE_YOUR_API_KEY}
          center={center}
          zoom={17}
          width={'80vw'}
          height={'80vh'}
          caller={'raise-emergency'}
          getCoordinates={handleCoordinates}
        />

        <h1 className='text-2xl font-bold text-left'>
          Select the type of disaster
        </h1>
        <select
        required
          className='w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
          name='disasterType'
          id='disasterType'
          value={formData.disasterType}
          onChange={handleChange}
        >
          <option value='' disabled>Select a disaster type</option>
          <option value='earthquake'>Earthquake</option>
          <option value='flood'>Flood</option>
          <option value='cyclone'>Cyclone</option>
          <option value='wildfire'>Wildfire</option>
          <option value='landslide'>Landslide</option>
          <option value='other'>Other</option>
        </select>

        <h1 className='text-2xl font-bold text-left'>Level of disaster</h1>
        <select
        required
          className='w-full bg-white text-[#173B45] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm'
          id='level'
          name='level'
          value={formData.level}
          onChange={handleChange}
        >
          <option value='' disabled>Select a disaster type</option>
          <option value='low'>Low</option>
          <option value='moderate'>Moderate</option>
          <option value='severe'>Severe</option>
          <option value='critical'>Critical</option>
          <option value='extreme'>Extreme</option>
        </select>

        <EquipmentForm
          onFormSubmit={handleEquipmentFormSubmit}
          type={'raise-emergency'}
        />
        <WorkforceForm
          onFormSubmit={handleWorkforceFormSubmit}
          type={'raise-emergency'}
        />

        <div className='flex flex-row gap-5'></div>
        <button
          className='btn text-white font-semibold text-xl w-full btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>

        {/* <button
            className='btn text-gray-700 font-semibold text-xl w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg'
            type='button'
            >
            Cancel
          </button> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className='btn text-gray-700 font-semibold text-xl w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg'
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Cancel
        </button>
        <dialog id='my_modal_1' className='modal'>
          <div className='modal-box bg-[#F8EDED] text-[#173B45]'>
            <h3 className='font-bold text-lg'>Are you sure?</h3>
            <p className='py-4'>
              Unsaved changes will be lost. Do you want to cancel this action?
            </p>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <div className='flex gap-2'>
                  <Link to={'/'}>
                    <button className='btn btn-primary text-white'>
                      Discard
                    </button>
                  </Link>
                  <button className='btn btn-error text-white'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default RaiseEmergency;
