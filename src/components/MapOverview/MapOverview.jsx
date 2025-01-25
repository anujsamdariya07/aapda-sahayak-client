import React from 'react';
import MapComponent from '../../maps/Map/Map';

const MapOverview = () => {
  const center = { lat: 23.24691041781924, lng: 77.40023809744822 };

  return (
    <div className='h-screen m-5 rounded-xl'>
      <MapComponent
        apiKey={import.meta.env.VITE_YOUR_API_KEY}
        center={center}
        zoom={17}
        width={'100%'}
        height={'100%'}
        caller={'home'}
      />
    </div>
  );
};

export default MapOverview;
