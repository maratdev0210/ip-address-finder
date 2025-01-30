import { Map, GeolocateControl } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Mapbox({ IpData }) {
  return (
    <>
      {"data" in IpData ? (
        <Map
          initialViewState={{
            longitude: IpData.data.longitude,
            latitude: IpData.data.latitude,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=pNMgOAwqcLUmiSVH6Mp6"
        >
          <GeolocateControl />
        </Map>
      ) : null}
    </>
  );
}
