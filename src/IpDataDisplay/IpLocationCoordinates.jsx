// display the coordinates of a given IP
export default function IpLocationCoordinates({ dataValues }) {
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  return (
    <div className=" py-3 bg-black/10 ip-location flex justify-center">
      <img src={dataValues[3]} alt="country" />
      <span className="px-3 md:text-2xl">
        IP Location:{" "}
        <span className="font-bold">
          {dataValues[4]} ({dataValues[5]})
        </span>
      </span>
    </div>
  );
}
