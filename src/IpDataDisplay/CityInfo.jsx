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
    <div className="w-1/2 text-center">
      <p className="text-header-size font-bold text-blue-900">{data.name}</p>
      <p className="sm:text-xl md:text-2xl">{data.value}</p>
    </div>
  ));

  return (
    <div className="flex px-3 py-3 dark:border-0 border-b-2 border-blue-900/50">
      {cityInfoSection}
    </div>
  );
}
