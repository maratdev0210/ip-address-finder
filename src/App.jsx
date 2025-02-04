import * as React from "react";
import IpLookup from "./IpLookup";
import IpDataDisplay from "./IpDataDisplay/IpDataDisplay";
import { useState } from "react";
import Map from "./Map";

function App() {
  const [ipData, setIpData] = useState({});

  return (
    <>
      <IpLookup ipData={ipData} setIpData={setIpData} />
      <IpDataDisplay ipData={ipData} />
      {"data" in ipData ? (
        <Map
          ipLongitude={ipData.data.longitude}
          ipLatitude={ipData.data.latitude}
        />
      ) : null}
    </>
  );
}

export default App;
