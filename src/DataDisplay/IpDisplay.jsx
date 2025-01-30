export default function IpDisplay({ dataValues }) {
  return (
    <div className="ip-row flex justify-center">
      <span className="text-center font-bold text-2xl py-3 italic">
        {dataValues[0]}
      </span>
    </div>
  );
}
