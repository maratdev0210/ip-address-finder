export default function IpValueDisplay({ headersTextStyles, dataValues }) {
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  return (
    <div className="ip-row flex justify-center">
      <span
        className={`${headersTextStyles} text-center font-bold py-3 italic md:py-6`}
      >
        {dataValues[0]}
      </span>
    </div>
  );
}
