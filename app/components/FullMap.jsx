'use client'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { properties } from "@/lib/properties";
import { useState } from "react";

const PoiMarkers = () => {
  const [openInfo, setOpenInfo] = useState(null);

  return (
    <>
      {properties?.map((poi) => (
        <AdvancedMarker 
          key={poi.title} 
          position={poi.loc}
          onClick={() => setOpenInfo(poi.title)}
        >
          <Pin 
            background="#FF9800" 
            glyphColor="#FFF" 
            borderColor="#E65100" 
            scale={1.2} 
          />
          {openInfo === poi.title && (
            <InfoWindow onCloseClick={() => setOpenInfo(null)}>
              <div className="p-2">
                <h3 className="font-semibold">{poi.title}</h3>
                {poi.address && <p className="text-sm">{poi.address}</p>}
              </div>
            </InfoWindow>
          )}
        </AdvancedMarker>
      ))}
    </>
  );
};
export default function FullMap({empty = true}) {
  return (
    <APIProvider apiKey={"AIzaSyCoN-eN4LE9tZDgKNCmLS4zPeqyVLt1y0M"} >
      <div className="h-full w-full rounded-xl overflow-hidden shadow-xl">
        <Map
          options={{ 
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
              }
            ]
          }}
          defaultZoom={13}
          mapId="Apartamentai"
          defaultCenter={properties[0].loc}
        >
        </Map>
      </div>
    </APIProvider>
  );
}