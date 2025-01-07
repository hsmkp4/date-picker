import moment from "moment-jalaali";

export function objectToDate(dateObject) {
  return moment(
    `${dateObject.year}-${dateObject.month}-${dateObject.day}`,
    "jYYYY-jMM-jDD"
  ).toDate();
}
export function dateToObject(date) {
  const jalaaliDate = moment(date)
    .locale("fa")
    .format("jYYYY-jMM-jDD")
    .split("-");
  return {
    year: parseInt(jalaaliDate[0], 10),
    month: parseInt(jalaaliDate[1], 10),
    day: parseInt(jalaaliDate[2], 10),
  };
}

export function handleDateInput(input) {
  if (input instanceof Date) {
    return dateToObject(input);
  } else if (
    typeof input === "object" &&
    input !== null &&
    "year" in input &&
    "month" in input &&
    "day" in input
  ) {
    return input;
  } else if (typeof input === "string") {
    const dateFromString = new Date(input);
    if (!isNaN(dateFromString.getTime())) {
      return dateToObject(dateFromString);
    } else {
      return null;
    }
  }

  return null;
}

export const getMaxSelectableDate = (startDate, maxRange) => {
  if (!startDate) return undefined;
  const startDateObj = new Date(
    startDate.year,
    startDate.month - 1,
    startDate.day
  );
  const maxDate = new Date(startDateObj);
  maxDate.setDate(startDateObj.getDate() + maxRange);
  return {
    year: maxDate.getFullYear(),
    month: maxDate.getMonth() + 1,
    day: maxDate.getDate(),
  };
};
