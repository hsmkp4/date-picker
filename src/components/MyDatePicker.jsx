import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const initState = {
  from: null,
  to: null,
};

const MyDatePicker = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(initState);
  const handleChange = (date) => {
    setSelectedDateRange(date);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Calendar
        value={selectedDateRange}
        onChange={handleChange}
        shouldHighlightWeekends={true}
        colorPrimary="#222"
        colorPrimaryLight="#d194f044"
        locale="fa"
      />
    </div>
  );
};

export default MyDatePicker;
