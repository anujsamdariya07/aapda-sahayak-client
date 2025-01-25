import { AlertTriangle, MessageSquare, MoreHorizontal, Phone, PhoneCall } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AgencyDisplayBox = ({
  id,
  agencyName,
  headName,
  headContactNumber,
  expertise,
  address,
  equipmentRequirements,
  workforce,
  about,
  emailAddress,
}) => {
  const navigate = useNavigate()
  
  return (
    <div className='h-auto w-[100%] p-5 my-3 border-[#173B45] rounded-lg border-2 flex items-center justify-between'>
      <h1 className='text-3xl font-semibold'>{agencyName}</h1>

      <div className='flex flex-col gap-3'>
        <button className='flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 px-4 rounded-2xl shadow-md transition-all duration-300'>
          <AlertTriangle className='w-5 h-5' /> Alert
        </button>
        <div className='flex gap-3'>
          <button
            className='flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-6 rounded-2xl shadow-md transition-all duration-300'
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            <Phone className='w-5 h-5' /> Contact
          </button>
          <dialog id='my_modal_1' className='modal'>
            <div className='modal-box bg-[#F8EDED] text-[#173B45]'>
              <h3 className='font-bold text-lg'>Choose Contact Method</h3>
              <p className='py-4'>
                How would you like to proceed with contacting the agency?
              </p>
              <div className='modal-action'>
                <form method='dialog'>
                  {/* if there is a button in form, it will close the modal */}
                  
                  <div className='flex gap-2'>
                    {/* <Link to={{pathname: '/chat-room', state: {agencyName: agencyName}}}> */}
                      <button className='flex items-center gap-2 text-white px-4 py-2 rounded-lg bg-[#4CAF50] hover:bg-[#3E8E41] text-lg' onClick={() => {
    navigate('/chat-room', { state: { agencyName: agencyName } });
  }}>
                        <MessageSquare className='w-5 h-5' /> Chat
                      </button>
                    {/* </Link> */}
                    <button className='flex items-center gap-2 text-white px-4 py-2 rounded-lg bg-[#2196F3] hover:bg-[#0b7dda] text-lg'>
                      <PhoneCall className='w-5 h-5' /> Phone
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>

          <button className='flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 px-6 rounded-2xl shadow-md transition-all duration-300'>
            <MoreHorizontal className='w-5 h-5' /> More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgencyDisplayBox;
