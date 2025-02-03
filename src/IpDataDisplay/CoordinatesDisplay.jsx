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

  const coordinatesSection = geopositionData.map((data) => (
    <div className="w-1/2 px-3 flex flex-col coordinates-section">
      <span className="font-bold text-blue-900 text-2xl">{data.name}</span>
      <span className="py-2">{data.value}</span>
    </div>
  ));

  return <div className="geoposition flex">{coordinatesSection}</div>;
}
