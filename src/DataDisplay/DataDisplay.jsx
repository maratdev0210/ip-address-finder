import CityData from "./CityData";
import LanguageTimezone from "./LanguageTimezone";
import IpLocation from "./IpLocation";
import Geoposition from "./Geopostion";
import IpDisplay from "./IpDisplay";

export default function DataDisplay({ IpData }) {
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
    <IpDisplay dataValues={dataValues} />,
    <Geoposition dataValues={dataValues} />,
    <IpLocation dataValues={dataValues} />,
    <CityData dataValues={dataValues} />,
    <LanguageTimezone IpData={IpData} />,
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
