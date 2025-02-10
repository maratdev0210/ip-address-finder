export default function IpValueDisplay({ dataValues }) {
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  return (
    <div className="ip-row flex justify-center">
      <span
        className={`text-header-size text-center font-bold py-3 italic md:py-6`}
      >
        {dataValues[0]}
      </span>
    </div>
  );
}
