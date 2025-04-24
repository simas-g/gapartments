import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function MapBlock({ location, url }) {
  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-gray-800">Vieta</h3>
          <Link 
            href={url}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">Peržiūrėti Google Maps</span>
            <ExternalLink size={16} />
          </Link>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <APIProvider
            apiKey="AIzaSyCoN-eN4LE9tZDgKNCmLS4zPeqyVLt1y0M"
            onLoad={() => console.log("Maps API has loaded.")}
          >
            <Map
              options={{
                mapTypeControl: false,
                fullscreenControl: true,
                streetViewControl: true,
                zoomControl: true,
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                  }
                ]
              }}
              defaultZoom={14}
              defaultCenter={center}
              style={{ width: "100%", height: "500px" }}
            >
              <Marker position={center} />
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

export default MapBlock;