import CityInfo from "./CityInfo";
import LanguageTimezoneDisplay from "./LanguageTimezoneDisplay";
import IpLocationCoordinates from "./IpLocationCoordinates";
import CoordinatesDisplay from "./CoordinatesDisplay";
import IpValueDisplay from "./IpValueDisplay";

export default function IpDataDisplay({ ipData }) {
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
    <IpLocationCoordinates dataValues={dataValues} />,
    <CityInfo dataValues={dataValues} />,
    <LanguageTimezoneDisplay ipData={ipData} />,
  ];

  const componentTree = components.map((component) => component);

  return (
    <>
      {"data" in ipData ? (
        <div className="my-5 font-serif ip-data-container border-1 border-blue-900 border-solid mx-auto w-1/2">
          {componentTree}
        </div>
      ) : null}
    </>
  );
}
