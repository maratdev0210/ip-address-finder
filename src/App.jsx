import * as React from "react";
import IpLookup from "./IpLookup";
import IpDataDisplay from "./IpDataDisplay/IpDataDisplay";
import { useState } from "react";
import Map from "./Map";
import Header from "./Header/header";

function App() {
  const [ipData, setIpData] = useState({});

  return (
    <>
      <Header />
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
