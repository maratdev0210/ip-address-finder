import * as React from "react";
import IpLookup from "./IpLookup";
import IpDataDisplay from "./IpDataDisplay/IpDataDisplay";
import { useState } from "react";
import MapComponent from "./Map";

function App() {
  const [IpData, setIpData] = useState({});

  return (
    <>
      <IpLookup IpData={IpData} setIpData={setIpData} />
      <IpDataDisplay IpData={IpData} />
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
