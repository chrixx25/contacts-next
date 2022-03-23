import { useState, useEffect } from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import MuiDesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

const DatePicker = (props) => {
  const { formatReturned, format, helperText, name, defaultValue, ...rest } =
    props;
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    field: { ref, value, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const handleChange = (date) => {
    field.onChange({
      target: {
        name: field.name,
        value: moment(date).isValid()
          ? moment(date).format(formatReturned)
          : date,
      },
    });
  };

  useEffect(() => {
    if (moment(value).isValid()) {
      setSelectedDate(new Date(value));
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDesktopDatePicker
        {...field}
        {...rest}
        value={selectedDate}
        onChange={handleChange}
        inputRef={ref}
        inputFormat={format}
        InputProps={{
          "data-testid": name,
          disableUnderline: true,
        }}
        InputAdornmentProps={{
          position: "start",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            error={hasError}
            helperText={hasError ? errorMessage : helperText}
          />
        )}
      />
    </LocalizationProvider>
  );
};

DatePicker.defaultProps = {
  formatReturned: "YYYY-MM-DD",
  format: "MM-DD-YYYY",
  mask: "__-__-____",
  defaultValue: null,
};

export default DatePicker;
