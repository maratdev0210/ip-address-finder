import * as React from "react";
//import Mapbox from "./MapBox";
import IpLookup from "./IpLookup";
import DataDisplay from "./DataDisplay/DataDisplay";
import { useState } from "react";
import MapComponent from "./Map";

function App() {
  const [IpData, setIpData] = useState({});
  console.log(IpData);
  return (
    <>
      <IpLookup IpData={IpData} setIpData={setIpData} />
      <DataDisplay IpData={IpData} />
      {"data" in IpData ? (
        <MapComponent
          longitude={IpData.data.longitude}
          latitude={IpData.data.latitude}
        />
      ) : null}

      {/*"data" in IpData ? <Mapbox IpData={IpData} /> : null */}
    </>
  );
}

export default App;
