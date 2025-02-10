// display the coordinates of a given IP
export default function IpCountryLocation({ dataValues }) {
  return (
    <div className="py-5 bg-black/5 ip-location  justify-center">
      <img src={dataValues[3]} alt="country" className="mx-auto h-10" />
      <span
        className={`text-header-size px-3 flex flex-col items-center py-3`}
      >
        IP Location:{" "}
        <span className="font-bold">
          {dataValues[4]} ({dataValues[5]})
        </span>
      </span>
    </div>
  );
}
