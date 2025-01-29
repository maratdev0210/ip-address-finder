import * as React from "react";
import Mapbox from "./MapBox";
import IpLookup from "./IpLookup";
import { useState } from "react";

function App() {
  const [IpData, setIpData] = useState({});

  return (
    <>
      <IpLookup IpData={IpData} setIpData={setIpData} />
      <Mapbox IpData={IpData} />
    </>
  );
}

export default App;
