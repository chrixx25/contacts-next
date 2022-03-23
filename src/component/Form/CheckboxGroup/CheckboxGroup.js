import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { xor } from "lodash";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

import { getOption } from "../utils";
import Checkbox from "./Checkbox";

const CheckboxGroup = (props) => {
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

  const handleChange = (event) => {
    field.onChange({
      target: {
        name: field.name,
        value: xor(field.value, [event.target.value]),
      },
    });
  };

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row={row}>
        {options.map((option) => (
          <Checkbox
            key={getOptionValue(option)}
            ref={ref}
            checked={field.value.includes(getOptionValue(option))}
            label={getOptionLabel(option)}
            value={getOptionValue(option)}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

CheckboxGroup.defaultProps = {
  row: false,
  label: "",
  name: "",
  helperText: "",
  defaultValue: [],
  options: [],
  optionValueKey: "",
  optionLabelKey: "",
};

CheckboxGroup.propTypes = {};

export default CheckboxGroup;
