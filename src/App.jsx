import React from "react";
import MyDatePicker from "./components/MyDatePicker";

const App = () => {
  return (
    <MyDatePicker
      disabledBeforeDate={{ year: 1402, month: 10, day: 10 }}
      maxRange={20}
    />
  );
};

export default App;
