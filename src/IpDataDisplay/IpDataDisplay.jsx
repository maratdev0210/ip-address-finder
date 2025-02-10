import CityInfo from "./CityInfo";
import LanguageTimezoneDisplay from "./LanguageTimezoneDisplay";
import IpCountryLocation from "./IpCountryLocation";
import CoordinatesDisplay from "./CoordinatesDisplay";
import IpValueDisplay from "./IpValueDisplay";

export default function IpDataDisplay({ theme, ipData }) {
  const dataKeys = [
    "ip",
    "latitude",
    "longitude",
    "flag",
    "country_name",
    "country_code",
    "city",
    "postal",
  ];

  const dataValues = [];
  if ("data" in ipData) {
    dataKeys.forEach((key) => {
      dataValues.push(ipData.data[key]);
    });
  }

  const components = [
    <IpValueDisplay dataValues={dataValues} />,
    <CoordinatesDisplay dataValues={dataValues} />,
    <IpCountryLocation dataValues={dataValues} />,
    <CityInfo dataValues={dataValues} />,
    <LanguageTimezoneDisplay ipData={ipData} />,
  ];

  const componentTree = components.map((component) => component);
  // TO-DO: find a better way for setting the common styles of components.
  // we might pass hardcoded data down to the components.
  return (
    <>
      {"data" in ipData && (
        <div
          className={`${theme} dark:bg-black/80 dark:border-0 rounded-xl dark:text-white/80 w-4/5 my-5 font-serif ip-data-container border-1 border-blue-900 border-solid mx-auto sm:w-1/2 md:w-2/3`}
        >
          {componentTree}
        </div>
      )}
    </>
  );
}
