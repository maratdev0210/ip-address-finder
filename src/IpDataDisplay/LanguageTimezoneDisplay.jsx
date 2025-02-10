export default function LanguageTimezoneDisplay({ ipData }) {
  // TO-DO: fix the Tailwind classnames (pass the hardcoded parameters through the props for example)
  return (
    <div className="language-timezone flex px-3">
      <div className={`language w-1/2 flex flex-col sm:py-2`}>
        <span className={`text-header-size font-bold text-center`}>
          Language
        </span>
        <span className="text-center">{ipData.data.languages[0].name}</span>
      </div>
      <div className="timezone w-1/2 flex flex-col sm:py-2">
        <span className={`text-header-size text-center font-bold`}>
          Time Zone
        </span>
        <span className="text-center">
          {ipData.data.time_zone.abbr}
          <span>({ipData.data.time_zone.offset.substring(0, 3)})</span>{" "}
        </span>
      </div>
    </div>
  );
}
