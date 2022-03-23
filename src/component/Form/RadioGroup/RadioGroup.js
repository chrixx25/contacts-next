import React from "react";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import MuiRadioGroup from "@mui/material/RadioGroup";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

import { getOption } from "../utils";
import Radio from "./Radio";

const RadioGroup = (props) => {
  const {
    name,
    row,
    label,
    helperText,
    defaultValue,
    options,
    optionValueKey,
    optionLabelKey,
  } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionValue = getOption(optionValueKey);
  const getOptionLabel = getOption(optionLabelKey);

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup {...field} row={row}>
        {options.map((option) => (
          <Radio
            key={getOptionValue(option)}
            ref={ref}
            value={getOptionValue(option)}
            label={getOptionLabel(option)}
          />
        ))}
      </MuiRadioGroup>
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

RadioGroup.defaultProps = {
  row: true,
  label: "",
  name: "",
  helperText: "",
  defaultValue: "",
  options: [],
  optionValueKey: "",
  optionLabelKey: "",
};

RadioGroup.propTypes = {};

export default RadioGroup;
