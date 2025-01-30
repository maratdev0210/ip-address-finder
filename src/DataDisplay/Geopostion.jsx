export default function Geoposition({ dataValues }) {
  return (
    <div className="geoposition flex">
      <div className={"latitude w-1/2 px-2 flex flex-col"}>
        <span className="font-bold text-blue-900 text-2xl">Latitude</span>
        <span className="py-2 ">{dataValues[1]}</span>
      </div>
      <div className="longitude w-1/2 px-2 flex flex-col">
        <span className="font-bold text-blue-900 text-2xl">Longitude</span>
        <span className="py-2">{dataValues[2]}</span>
      </div>
    </div>
  );
}
