import React, { useState } from "react";
import MyDatePicker from "./components/MyDatePicker";
import { objectToDate } from "./utils";
export const initState = {
  from: null,
  to: null,
};

const App = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(initState);
  const handleRecievsData = () => {
    console.log({
      selectedDateRange,
      start: objectToDate(selectedDateRange?.from),
      end: objectToDate(selectedDateRange?.to),
    });
  };
  return (
    <MyDatePicker
      selectedDateRange={selectedDateRange}
      setSelectedDateRange={setSelectedDateRange}
      parentFn={handleRecievsData}
      disabledBeforeDate={{ year: 1402, month: 10, day: 10 }}
      maxRange={20}
    />
  );
};

export default App;
