export default function IpValueDisplay({ dataValues }) {
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  return (
    <div className="ip-row flex justify-center">
      <span className="text-center font-bold text-2xl py-3 italic md:text-4xl md:py-6">
        {dataValues[0]}
      </span>
    </div>
  );
}
