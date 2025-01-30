import * as React from "react";
import Mapbox from "./MapBox";
import IpLookup from "./IpLookup";
import DataDisplay from "./DataDisplay/DataDisplay";
import { useState } from "react";

function App() {
  const [IpData, setIpData] = useState({});
  console.log(IpData);
  return (
    <>
      <IpLookup IpData={IpData} setIpData={setIpData} />
      <DataDisplay IpData={IpData} />
      {"data" in IpData ? <Mapbox IpData={IpData} /> : null}
    </>
  );
}

export default App;
