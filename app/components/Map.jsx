
import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
const key = process.env.REACT_APP_MAPS_API_KEY;
function MapBlock({location}) {
    const center = {
        lat: location.latitude,
        lng: location.longitude
    };
    console.log('our key', key)
    console.log(process.env.URL)
  return (
    <APIProvider apiKey={"AIzaSyCoN-eN4LE9tZDgKNCmLS4zPeqyVLt1y0M"} onLoad={() => console.log('Maps API has loaded.')}>
         <Map
            options={{
                mapTypeControl: false,
            }}
            defaultZoom={13}
            defaultCenter={center}
            style={{ width: '100%', height: '400px' }}
            >
            <Marker position={center}></Marker>
        </Map>
    </APIProvider>
  );
}

export default MapBlock;