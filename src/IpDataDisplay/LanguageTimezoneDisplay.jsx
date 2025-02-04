export default function LanguageTimezoneDisplay({ ipData }) {
  return (
    <div className="language-timezone flex px-3">
      <div className="language w-1/2 flex flex-col">
        <span className="font-bold">Language</span>
        <span>{ipData.data.languages[0].name}</span>
      </div>
      <div className="timezone w-1/2 flex flex-col">
        <span className="font-bold">Time Zone</span>
        <span>
          {ipData.data.time_zone.abbr}
          <span>({ipData.data.time_zone.offset.substring(0, 3)})</span>{" "}
        </span>
      </div>
    </div>
  );
}
