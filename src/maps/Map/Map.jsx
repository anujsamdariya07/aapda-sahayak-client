import React, { useEffect, useState } from 'react';

const MapComponent = ({
  apiKey,
  center,
  zoom,
  height,
  width,
  caller,
  getCoordinates,
}) => {
  let marker = null;

  const isEmpty = (obj) => {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const initMap = async () => {
      if (!window.google) {
        console.error('Google Maps API is not loaded!');
        return;
      }

      // Dynamically import the Google Maps libraries
      const { Map, InfoWindow } = await google.maps.importLibrary('maps');
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        'marker'
      );

      // The map, centered at the provided coordinates (center prop)
      const map = new Map(document.getElementById('map'), {
        zoom: zoom, // Using the zoom prop
        center: center, // Using the center prop
        mapId: 'DEMO_MAP_ID',
      });

      // The marker, positioned at the provided center coordinates
      if (caller === 'home') {
        new AdvancedMarkerElement({
          map: map,
          position: center,
          title: 'Marker at Center',
        });
      }

      if (caller === 'raise-emergency') {
        map.addListener('click', (event) => {
          if (marker) {
            marker.setMap(null);
          }

          const infoWindow = new InfoWindow();

          marker = new AdvancedMarkerElement({
            map: map,
            position: event.latLng,
            title: 'Add marker',
            gmpDraggable: true,
          });

          let position = marker.position;

          infoWindow.close();
          infoWindow.setContent(
            `Pin dropped at: ${position.lat}, ${position.lng}`
          );
          infoWindow.open(marker.map, marker);

          getCoordinates(event.latLng.lat(), event.latLng.lng());

          marker.addListener('dragend', (event) => {
            position = marker.position; // Get the updated position
            infoWindow.close();
            infoWindow.setContent(
              `Pin dropped at: ${position.lat}, ${position.lng}`
            );
            infoWindow.open(marker.map, marker);
            console.log('Updated coordinates:', position.lat, position.lng); // Log the updated coordinates
            getCoordinates(position.lat, position.lng);
          });

          marker.addListener('click', () => {
            marker.setMap(null); // Remove the marker from the map
            marker = null; // Clear the marker from state
          });
        });
      }
    };

    // Initialize the map
    initMap();
  }, []); // Effect dependencies

  return (
    <div
      id='map'
      style={{ height: height, width: width }} // Use the passed height and width props
    ></div>
  );
};

export default MapComponent;
