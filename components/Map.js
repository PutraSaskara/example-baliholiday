"use client";
import React, { useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";

const Map = ({ center, zoom, markers }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const southWest = L.latLng(-9.1, 114.1);
      const northEast = L.latLng(-8.0, 115.8);
      const bounds = L.latLngBounds(southWest, northEast);
      map.fitBounds(bounds);
    }
  }, []);

  const FlyToMarker = ({ marker }) => {
    const map = useMap();

    useEffect(() => {
      map.flyTo(marker.position, 10, {
        duration: 2,
      });
    }, [map, marker]);

    return null;
  };

  const customIcon = L.icon({
    iconUrl: "/pin1.webp",
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Popup>
            <h2>{marker.title}</h2>
            <p>{marker.description}</p>
            <button onClick={() => window.open(marker.link, '_blank')} className="text-blue-500 hover:text-blue-800">See Article</button>
          </Popup>
          <FlyToMarker marker={marker} />
        </Marker>
      ))}
      {/* Create line routes */}
      {/* {markers.length > 1 && (
        <Polyline
          positions={markers.map((marker) => marker.position)}
          color="red"
          weight={4}
        />
      )} */}
    </MapContainer>
  );
};

export default Map;
