import axios from "axios";

export default function IpLookup({ theme, setIpData }) {
  async function getIpData() {
    let response = await axios.get(
      "https://api.ipdata.co?api-key=93658415b95904ce5c3f606a203a982c3916123cca2dafcd5e0c2529"
    );

    setIpData(response);
  }

  return (
    <div
      className={`fintIpSection bg-[url("../../public/3d-view-map.jpg")] bg-cover bg-no-repeat `}
    >
      <section
        id="findIp"
        className={`bg-white/60 backdrop-saturate-200 flex flex-col lg:flex-row  items-center justify-center w-full h-[60vh] mb-3 sm:h-[70vh] lg:h-[80vh] mx-auto sm:mb-7 lg:mb-12 xl:mb-15`}
      >
        <p className="text-center font-bold text-xl py-3 lg:text-3xl xl:text-4xl 2xl:text-5xl lg:h-full lg:w-1/2 lg:border-r-4 lg:border-r-white lg:flex lg:items-center">
          Click on the button to find out the location of your IP provider
        </p>
        <button
          className={`${theme} bg-blue-700/60 w-1/2 text-white rounded-xl border-2 lg:border-blue-500 lg:w-1/4 dark:bg-black/90 dark:text-white 700/90 mx-auto  py-3 text-2xl font-serif font-bold  lg:text-3xl xl:text-4xl 2xl:text-5xl`}
          onClick={getIpData}
        >
          Get Ip Data
        </button>
      </section>
    </div>
  );
}
