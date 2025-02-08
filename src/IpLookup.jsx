import axios from "axios";

export default function IpLookup({ theme, setIpData }) {
  async function getIpData() {
    let response = await axios.get(
      "https://api.ipdata.co?api-key=93658415b95904ce5c3f606a203a982c3916123cca2dafcd5e0c2529"
    );

    setIpData(response);
  }

  return (
    <>
      <section
        id="findIp"
        className="w-1/2 my-3 mx-auto sm:w-1/4 sm:mx-3 sm:my-7 lg:my-12 xl:w-1/6 xl:my-15"
      >
        <button
          className={`${theme} text-black dark:bg-black/90 dark:text-white 700/90 mx-auto w-full py-3 border text-xl font-serif bg-white rounded-xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
          onClick={getIpData}
        >
          Get Ip Data
        </button>
      </section>
    </>
  );
}
