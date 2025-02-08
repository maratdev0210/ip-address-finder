export default function CityInfo({ headersTextStyles, dataValues }) {
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
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  const cityInfoSection = cityInfo.map((data) => (
    <div className="w-1/2 flex flex-col cityInfo-section">
      <span
        className={`${headersTextStyles} text-center font-bold text-blue-900`}
      >
        {data.name}
      </span>
      <span className="text-center sm:text-xl md:text-2xl">{data.value}</span>
    </div>
  ));

  return (
    <div className="city-info   flex px-3 py-3 dark:border-0 border-b-2 border-blue-900/50">
      {cityInfoSection}
    </div>
  );
}

// TO-DO: fix the styles for 600px viewport width
