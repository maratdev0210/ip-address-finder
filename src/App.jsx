import * as React from "react";
import IpLookup from "./IpLookup";
import DataDisplay from "./DataDisplay/DataDisplay";
import { useState } from "react";
import MapComponent from "./Map";

function App() {
  const [IpData, setIpData] = useState({});
  
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


    </>
  );
}

export default App;
