import React from "react";
import { useState } from "react";

import IpLookup from "./IpLookup";
import IpDataDisplay from "./IpDataDisplay/IpDataDisplay";
import Map from "./Map";
import Header from "./Header/header";
import AboutIP from "./AboutIP/AboutIP";

function App() {
  const [ipData, setIpData] = useState({});
  const [theme, setTheme] = useState("light"); // light | dark theme

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <IpLookup theme={theme} setIpData={setIpData} />
      <IpDataDisplay ipData={ipData} />
      {"data" in ipData && (
        <Map
          ipLongitude={ipData.data.longitude}
          ipLatitude={ipData.data.latitude}
        />
      )}
      <AboutIP theme={theme} />
    </>
  );
}

export default App;
