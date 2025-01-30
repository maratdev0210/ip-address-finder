export default function CityData({ dataValues }) {
  const cityData = [
    {
      name: "City, State",
      value: dataValues[6],
    },
    {
      name: "Zip Code",
      value: dataValues[7],
    },
  ];

  const components = cityData.map((data) => (
    <div className="w-1/2 flex flex-col">
      <span className="text-2xl font-bold text-blue-900">{data.name}</span>
      <span className="text-xl">{data.value}</span>
    </div>
  ));

  return (
    <div className="city-data flex px-3 py-3 border-b-2 border-blue-900/50">
      {components}
    </div>
  );
}
