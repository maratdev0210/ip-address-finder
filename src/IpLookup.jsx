import axios from "axios";

export default function IpLookup({ ipData, setIpData }) {
  async function getIpData() {
    let response = await axios.get(
      "https://api.ipdata.co?api-key=93658415b95904ce5c3f606a203a982c3916123cca2dafcd5e0c2529"
    );

    setIpData(response);
  }

  return (
    <>
      <section id="findIp">
        <button onClick={getIpData}>Get Ip Data</button>
      </section>
    </>
  );
}
