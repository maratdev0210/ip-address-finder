import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import React, { useRef, useEffect } from "react";
import "./map.css";

// unlike the IP location, the actual locaion is based on user's geoposition
export default function ActualLocaiton() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  let locationActual = { lng: 0, lat: 0 };
  const zoom = 14;

  maptilersdk.config.apiKey = "pNMgOAwqcLUmiSVH6Mp6";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      locationActual.lat = position.coords.latitude;
      locationActual.lng = position.coords.longitude;

      if (map.current) return;

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [locationActual.lng, locationActual.lat],
        zoom: zoom,
      });

      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([locationActual.lng, locationActual.lat])
        .addTo(map.current);
    });
  }, [locationActual.lng, locationActual.lat, zoom]);

  return <div ref={mapContainer} className="map" />;
}
