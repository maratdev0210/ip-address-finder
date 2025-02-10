// extract timezone from the given ipData object
export const extractTimezone = function ({ ipData }) {
  return ipData.data.time_zone.offset.substring(0, 3); // example: +03 utc, -01 utc, +00utc
};
