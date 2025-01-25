import React from 'react'
import MapComponent from '../../maps/Map/Map';
import { useLocation, useParams } from 'react-router-dom';

const ChatRoom = () => {  
  const location = useLocation()
  const { agencyName } = location.state || {}; 
  
  console.log('Agency Name:', location)
  
  const center = { lat: 23.24691041781924, lng: 77.40023809744822 };
  
  return (
    <div className='min-h-full flex p-5 gap-3 items-center justify-between text-[#173B45] bg-[#F8EDED]'>
      <MapComponent
        apiKey={import.meta.env.VITE_YOUR_API_KEY}
        center={center}
        zoom={17}
        width={'60vw'}
        height={'80vh'}
        caller={'home'}
      />

      <div className='w-[35vw] h-[80vh] rounded-xl bg-[#F8EDED] text-[#173B45] flex flex-col m-5 gap-10 border-[#173B45] border-2'>
        {/* Header */}
        <div className='h-[10%] flex items-center justify-center rounded-xl rounded-b-none bg-[#FF8225] text-[#F8EDED]'>
          <h1 className='text-3xl font-semibold top-0 w-full p-2'>
            {agencyName || 'Agency Name'}
          </h1>
        </div>

        {/* Messages section */}
        <div className='flex-1 overflow-y-auto p-4 flex flex-col-reverse'>
          {/* Dummy msgs */}
          <div className='mb-4 self-end'>
            <p className='bg-[#FF8225] text-[#F8EDED] p-2 rounded-lg w-fit'>
              I need assistance with equipment.
            </p>
          </div>
          <div className='mb-4'>
            <p className='bg-[#173B45] text-[#F8EDED] p-2 rounded-lg w-fit'>
              Hello, how can we help?
            </p>
          </div>
        </div>

        {/* New message */}
        <div className='mt-auto flex items-center justify-between p-3 border-t-2 border-[#173B45]'>
          <input
            type='text'
            placeholder='Type your message...'
            className='flex-1 p-2 rounded-lg border-2 text-[#173B45] border-[#173B45] outline-none focus:ring-2 focus:ring-[#FF8225] bg-[#F8EDED]'
          />
          <button className='ml-3 px-4 py-2 bg-[#173B45] text-[#F8EDED] rounded-lg hover:bg-[#235969]'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom