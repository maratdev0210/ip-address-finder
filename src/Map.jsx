import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./map.css";

export default function MapComponent({ longitude, latitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = { lng: longitude, lat: latitude };
  let locationActual = { lng: 0, lat: 0 };

  const zoom = 14;
  maptilersdk.config.apiKey = "pNMgOAwqcLUmiSVH6Mp6";

  useEffect(() => {
    if (map.current) return;

    navigator.geolocation.getCurrentPosition((position) => {
      locationActual.lng = position.coords.longitude;
      locationActual.lat = position.coords.latitude;

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [location.lng, location.lat],
        zoom: zoom,
      });

      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([location.lng, location.lat])
        .addTo(map.current);

      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([locationActual.lng, locationActual.lat])
        .addTo(map.current);
    });
  }, [location.lng, location.lat, zoom]);

  return (
    <div className="map-wrap ">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
