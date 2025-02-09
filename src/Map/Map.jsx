import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import React, { useRef, useEffect } from "react";
import "./map.css";

function addMarker(color, lng, lat, mapReference) {
  return new maptilersdk.Marker({ color: color })
    .setLngLat([lng, lat])
    .addTo(mapReference);
}

export default function Map({ ipLongitude, ipLatitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const markers = [
    { lng: ipLongitude, lat: ipLatitude },   
    { lng: 0, lat: 0 },                // user's actual geolocation
  ];

  const zoom = 14;
  maptilersdk.config.apiKey = "pNMgOAwqcLUmiSVH6Mp6";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [ipLongitude, ipLatitude],
      zoom: zoom,
    });

    navigator.geolocation.getCurrentPosition((position) => {
      markers[1].lng = position.coords.longitude;
      markers[1].lat = position.coords.latitude;

      markers.map((marker) => {
        addMarker("#FF0000", marker.lng, marker.lat, map.current);
      });

      // TO-DO: design the addition of markers in a different, more efficient way
    });
  }, [ipLongitude, ipLatitude, zoom]);

  return (
    <div className="map-wrap ">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
