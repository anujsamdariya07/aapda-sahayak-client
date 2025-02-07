// import React, { useState, useEffect } from 'react';
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   DirectionsRenderer,
// } from '@react-google-maps/api';

// const DirectionsMap = ({ apiKey, height, width }) => {
//   const [directions, setDirections] = useState(null); // Directions response
//   const [currentLocation, setCurrentLocation] = useState(null); // Current position of user
//   const [destination, setDestination] = useState({lat: 23.164755226012083, lng: 79.90360517784198}); // Destination coordinates

//   const mapContainerStyle = {
//     width: width,
//     height: height,
//   };

//   const center = { lat: 23.16157926083567, lng: 79.89252222430616 };

//   // Get current location of the user
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error('Error getting location', error);
//         }
//       );
//     }
//   }, []);

//   // Calculate and display directions when both current location and destination are available
//   useEffect(() => {
//     if (currentLocation && destination) {
//       const directionsService = new window.google.maps.DirectionsService();
//       const directionsRenderer = new window.google.maps.DirectionsRenderer();

//       const request = {
//         origin: currentLocation, // Current location of user
//         destination: destination, // Destination (e.g., an address or coordinates)
//         travelMode: window.google.maps.TravelMode.DRIVING, // Can be DRIVING, WALKING, BICYCLING, or TRANSIT
//       };

//       directionsService.route(request, (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           setDirections(result); // Set the directions result to display on map
//         } else {
//           console.error('Directions request failed due to ', status);
//         }
//       });
//     }
//   }, [currentLocation, destination]);

//   return (
//     <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={12}
//       >
//         {currentLocation && (
//           <Marker position={currentLocation} label='You are here' />
//         )}
//         {destination && <Marker position={destination} label='Destination' />}
//         {directions && <DirectionsRenderer directions={directions} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default DirectionsMap;

import React, { useEffect, useState } from "react";

const DirectionsMap = ({ apiKey, origin, destination, zoom, height, width }) => {
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      if (!window.google) {
        console.error("Google Maps API is not loaded!");
        return;
      }

      // Dynamically import Google Maps libraries
      const { Map } = await google.maps.importLibrary("maps");
      const { DirectionsService, DirectionsRenderer } = await google.maps.importLibrary("routes");

      // Initialize the map
      const map = new Map(document.getElementById("directions-map"), {
        zoom,
        center: origin, // Centered at origin coordinates
        mapId: "DEMO_MAP_ID",
      });

      const directionsService = new DirectionsService();
      const renderer = new DirectionsRenderer({
        draggable: true,
        map,
        // panel: document.getElementById("directions-panel"), // ❌ Remove this to hide text directions
      });

      setDirectionsRenderer(renderer);

      // Fetch the route
      displayRoute(directionsService, renderer, origin, destination);
    };

    initMap();
  }, [origin, destination]);

  const displayRoute = (service, renderer, origin, destination) => {
    service
      .route({
        origin: origin, 
        destination: destination, 
        waypoints: [],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      })
      .then((result) => {
        renderer.setDirections(result);
        computeTotalDistance(result);
      })
      .catch((error) => {
        console.error("Could not fetch directions:", error);
      });
  };

  const computeTotalDistance = (result) => {
    let total = 0;
    const route = result.routes[0];

    if (!route) return;

    for (let i = 0; i < route.legs.length; i++) {
      total += route.legs[i].distance.value;
    }

    total = total / 1000;
    document.getElementById("total-distance").innerText = `Total Distance: ${total} km`;
  };

  return (
    <div>
      <div id="directions-map" style={{ height, width }}></div>
      {/* <div id="directions-panel" className="p-4 bg-gray-100 rounded-md mt-4"></div> ❌ Remove this to hide text directions */}
      <p id="total-distance" className="font-bold mt-2 text-lg"></p>
    </div>
  );
};

export default DirectionsMap;
