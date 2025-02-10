export default function CoordinatesDisplay({ dataValues }) {
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
    <div className="w-full text-center sm:w-1/2 px-3">
      <p className="text-header-size font-bold text-blue-900">{data.name}</p>
      <p className="py-2 text-md md:text-xl italic">{data.value}</p>
    </div>
  ));

  return <div className="sm:flex">{coordinatesSection}</div>;
}
