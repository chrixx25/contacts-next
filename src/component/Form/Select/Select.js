import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import { keyBy, toString } from "lodash";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

import { getOption } from "../utils";
import styles from "./styles";

const Select = (props) => {
  const {
    name,
    label,
    helperText,
    placeholder,
    defaultValue,
    options,
    optionValueKey,
    optionLabelKey,
    ...rest
  } = props;

  const {
    field: { ref, value, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionValue = getOption(optionValueKey);
  const getOptionLabel = getOption(optionLabelKey);

  const renderSelectIcon = (selectIconProps) => (
    <ExpandMoreIcon {...selectIconProps} />
  );

  const renderSelectValue = (selected) => {
    if (!selected || !selected.length) {
      return (
        <MenuItem sx={styles.placeholder} disabled>
          {placeholder}
        </MenuItem>
      );
    }

    return getOptionLabel(keyBy(options, getOptionValue)[selected]);
  };

  return (
    <FormControl error={hasError} fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <MuiSelect
        {...field}
        {...rest}
        value={toString(value)}
        inputRef={ref}
        id={name}
        labelId={name}
        displayEmpty
        IconComponent={renderSelectIcon}
        renderValue={renderSelectValue}
        disableUnderline
      >
        {/* <MenuItem value="">None</MenuItem> */}
        {options.map((option) => (
          <MenuItem key={getOptionValue(option)} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </MenuItem>
        ))}
      </MuiSelect>
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

Select.defaultProps = {
  label: "",
  name: "",
  helperText: "",
  defaultValue: "",
  placeholder: "Please Select",
  options: [],
  optionValueKey: "",
  optionLabelKey: "",
};

export default Select;
