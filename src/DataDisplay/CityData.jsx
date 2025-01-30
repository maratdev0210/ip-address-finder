export default function CityData({ dataValues }) {
  return (
    <div className="city-data flex px-3 py-3 border-b-2 border-blue-900/50">
      <div className="city w-1/2 flex flex-col">
        <span className="text-2xl font-bold text-blue-900">City, State</span>
        <span className="text-xl">{dataValues[6]}</span>
      </div>
      <div className="postal w-1/2 flex flex-col">
        <span className="text-2xl font-bold text-blue-900">Zip Code</span>
        <span className="text-xl">{dataValues[7]}</span>
      </div>
    </div>
  );
}
