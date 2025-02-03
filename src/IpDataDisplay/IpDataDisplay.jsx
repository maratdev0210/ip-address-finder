import CityInfo from "./CityInfo";
import LanguageTimezoneDisplay from "./LanguageTimezoneDisplay";
import IpLocationCoordinates from "./IpLocationCoordinates";
import CoordinatesDisplay from "./CoordinatesDisplay";
import IpValueDisplay from "./IpValueDisplay";

export default function IpDataDisplay({ IpData }) {
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
  if ("data" in IpData) {
    dataKeys.forEach((key) => {
      dataValues.push(IpData.data[key]);
    });
  }

  const components = [
    <IpValueDisplay dataValues={dataValues} />,
    <CoordinatesDisplay dataValues={dataValues} />,
    <IpLocationCoordinates dataValues={dataValues} />,
    <CityInfo dataValues={dataValues} />,
    <LanguageTimezoneDisplay IpData={IpData} />,
  ];

  const componentTree = components.map((component) => component);

  return (
    <>
      {"data" in IpData ? (
        <div className="my-5 font-serif ip-data-container border-1 border-blue-900 border-solid mx-auto w-1/2">
          {componentTree}
        </div>
      ) : null}
    </>
  );
}
