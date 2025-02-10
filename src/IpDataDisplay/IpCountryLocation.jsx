// display the coordinates of a given IP
export default function IpCountryLocation({ dataValues }) {
  return (
    <div className="py-5 bg-black/5 text-header-size text-center">
      <img src={dataValues[3]} alt="country" className="mx-auto h-10" />
      <p className="px-3 pt-2">IP Location: </p>
      <p className="font-bold ">
        {dataValues[4]} ({dataValues[5]})
      </p>
    </div>
  );
}
