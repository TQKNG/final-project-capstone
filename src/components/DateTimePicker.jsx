import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTimeSelector() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker />
    </LocalizationProvider>
  );
}
