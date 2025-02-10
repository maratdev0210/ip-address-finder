import { extractTimezone } from "./utilities/extractTimezone";

export default function LanguageTimezoneDisplay({ ipData }) {
  const timeZone = extractTimezone({ ipData });

  const languageTimezoneData = [
    {
      name: "Language",
      value: ipData.data.languages[0].name,
    },
    {
      name: "Time Zone",
      value: ipData.data.time_zone.abbr.concat(" (" + timeZone + ")"),
    },
  ];

  return (
    <div className="flex px-3 text-center">
      {languageTimezoneData.map((data) => {
        return (
          <div className="w-1/2 sm:py-2">
            <p className="text-header-size font-bold">{data.name}</p>
            <p>{data.value}</p>
          </div>
        );
      })}
    </div>
  );
}
