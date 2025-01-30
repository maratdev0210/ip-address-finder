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
            zoom: 10,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="https://demotiles.maplibre.org/style.json"
        >
          <GeolocateControl />
        </Map>
      ) : null}
    </>
  );
}
