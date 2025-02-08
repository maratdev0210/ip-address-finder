export default function CoordinatesDisplay({ headersTextStyles, dataValues }) {
  const geopositionData = [
    {
      name: "Latitude",
      value: dataValues[1],
    },
    {
      name: "Longitude",
      value: dataValues[2],
    },
  ];
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  const coordinatesSection = geopositionData.map((data) => (
    <div className="w-full text-center sm:w-1/2 px-3 flex flex-col sm:flex sm:flex-col  coordinates-section">
      <span className={`${headersTextStyles} font-bold text-blue-900`}>
        {data.name}
      </span>
      <span className="py-2 text-md md:text-xl italic">{data.value}</span>
    </div>
  ));

  return <div className="geoposition sm:flex">{coordinatesSection}</div>;
}
