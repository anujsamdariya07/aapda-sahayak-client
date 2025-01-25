import React from 'react';
import MapComponent from '../../maps/Map/Map';
import {
  AlertTriangle,
  Bell,
  HandHelping,
  MapPin,
  MessageCircle,
  MessageSquareMore,
  TriangleAlert,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const center = { lat: 23.24691041781924, lng: 77.40023809744822 };

  return (
    <div className='min-h-full flex p-5 gap-3 items-center justify-between'>
      <MapComponent
        apiKey={import.meta.env.VITE_YOUR_API_KEY}
        center={center}
        zoom={17}
        width={'60vw'}
        height={'80vh'}
        caller={'home'}
      />

      <div className='w-[35vw] h-[80vh] rounded-xl bg-[#F8EDED] flex flex-col p-5 justify-center items-center gap-10'>
        <div className='flex gap-5'>
          <Link to={'/map-overview'}>
            <button className='flex items-center justify-center gap-2 w-full max-w-md bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg transition-all duration-300 hover:bg-green-700 focus:ring-4 focus:ring-green-300'>
              <MapPin size={24} className='text-white' />
              Map Overview
            </button>
          </Link>
          <Link to={'/chat-room'}>
            <button className='flex items-center justify-center gap-2 w-full max-w-md bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg transition-all duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'>
              <MessageCircle size={24} className='text-white' />
              Chat Room
            </button>
          </Link>
        </div>
        <Link to={'/raise-emergency'}>
          <button className='w-[25vw] flex items-center justify-center gap-2  max-w-md bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg transition-all duration-300 hover:bg-red-700 focus:ring-4 focus:ring-red-300 relative group'>
            <AlertTriangle
              size={24}
              className='text-white animate-pulse group-hover:animate-none'
            />
            Raise Emergency
            <span className='absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full animate-bounce'>
              Alert!
            </span>
          </button>
        </Link>
        <div className='bg-white w-[25vw] h-[40vh] rounded-lg flex justify-center items-center'>
          <h1 className='text-3xl font-bold'>News</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
