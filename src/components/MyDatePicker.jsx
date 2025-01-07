import React, { useEffect, useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { getMaxSelectableDate, handleDateInput } from "../utils";

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
    <div className="flex justify-center items-center h-screen">
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
    </div>
  );
};

export default MyDatePicker;
