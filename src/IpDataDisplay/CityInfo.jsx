export default function CityInfo({ dataValues }) {
  const cityInfo = [
    {
      name: "City, State",
      value: dataValues[6],
    },
    {
      name: "Zip Code",
      value: dataValues[7],
    },
  ];

  const cityInfoSection = cityInfo.map((data) => (
    <div className="w-1/2 flex flex-col cityInfo-section">
      <span className="text-2xl font-bold text-blue-900">{data.name}</span>
      <span className="text-xl">{data.value}</span>
    </div>
  ));

  return (
    <div className="city-info flex px-3 py-3 border-b-2 border-blue-900/50">
      {cityInfoSection}
    </div>
  );
}
