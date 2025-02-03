// display the coordinates of a given IP
export default function IpLocationCoordinates({ dataValues }) {
  return (
    <div className=" py-3 bg-black/10 ip-location flex justify-center">
      <img src={dataValues[3]} alt="country" />
      <span className="px-3">
        IP Location:{" "}
        <span className="font-bold">
          {dataValues[4]} ({dataValues[5]})
        </span>
      </span>
    </div>
  );
}
