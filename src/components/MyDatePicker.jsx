import React, { useEffect, useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { getMaxSelectableDate, handleDateInput, objectToDate } from "../utils";

const initState = {
  from: null,
  to: null,
};

const MyDatePicker = ({ disabledBeforeDate, maxRange }) => {
  const [selectedDateRange, setSelectedDateRange] = useState(initState);
  const [maxDate, setMaxDate] = useState(undefined);
  const handleChange = (date) => {
    setSelectedDateRange(date);
  };

  useEffect(() => {
    setMaxDate(getMaxSelectableDate(selectedDateRange.from, maxRange));
  }, [selectedDateRange]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Calendar
        value={selectedDateRange}
        onChange={handleChange}
        shouldHighlightWeekends={true}
        colorPrimary="#222"
        colorPrimaryLight="#d194f044"
        locale="fa"
        minimumDate={
          handleDateInput(disabledBeforeDate) ?? {
            year: 1400,
            month: 12,
            day: 11,
          }
        }
        maximumDate={maxDate}
      />
      <div className="flex justify-center items-center gap-14 mt-12">
        <button
          className="border shadow-sm px-12 pt-2 pb-3 rounded-full text-white bg-gray-900 hover:bg-gray-100 hover:text-black"
          onClick={() =>
            console.log({
              selectedDateRange,
              start: objectToDate(selectedDateRange?.from),
              end: objectToDate(selectedDateRange?.to),
            })
          }
        >
          تایید
        </button>
        <button
          className="border shadow-sm px-12 pt-2 pb-3 rounded-full hover:bg-gray-100"
          onClick={() => setSelectedDateRange(initState)}
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default MyDatePicker;
