import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useTheme } from "@mui/material";
import MuiAutocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { map, filter, find, isArray } from "lodash";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

import { getOption } from "../utils";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Autocomplete = (props) => {
  const {
    name,
    defaultValue,
    helperText,
    disableCloseOnSelect,
    multiple,
    options,
    optionValueKey,
    optionLabelKey,
    fullOptionReturned,
    ...rest
  } = props;
  const theme = useTheme();
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionValue = getOption(optionValueKey);
  const getOptionLabel = getOption(optionLabelKey);

  const getValue = () => {
    if (fullOptionReturned) {
      return field.value;
    }

    if (isArray(field.value)) {
      return filter(options, (option) =>
        field.value.includes(getOptionValue(option))
      );
    }

    return find(options, (option) => getOptionValue(option) === field.value);
  };

  const handleChange = (_event, newValue) => {
    const changes = {
      name: field.name,
    };

    if (fullOptionReturned) {
      changes.value = newValue;
    } else if (isArray(newValue)) {
      changes.value = map(newValue, getOptionValue);
    } else {
      changes.value = getOptionValue(newValue);
    }

    field.onChange({
      target: changes,
    });
  };

  const renderOption = (optionProps, option, { selected }) => (
    <li {...optionProps}>
      <Checkbox
        icon={icon}
        checkedIcon={checkedIcon}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {getOptionLabel(option)}
    </li>
  );

  const renderInput = (params) => (
    <TextField
      {...params}
      {...rest}
      inputRef={ref}
      error={hasError}
      helperText={hasError ? errorMessage : helperText}
      InputProps={{
        ...params.InputProps,
        ...theme.components.MuiTextField.defaultProps.InputProps,
      }}
    />
  );

  return (
    <MuiAutocomplete
      {...field}
      value={getValue()}
      disableCloseOnSelect={disableCloseOnSelect}
      multiple={multiple}
      onChange={handleChange}
      options={options}
      getOptionLabel={(option) => getOptionLabel(option)}
      renderOption={renderOption}
      renderInput={renderInput}
    />
  );
};

Autocomplete.defaultProps = {
  label: "",
  name: "",
  helperText: "",
  defaultValue: [],
  placeholder: "Please Select",
  disableCloseOnSelect: true,
  multiple: false,
  options: [],
  optionValueKey: "",
  optionLabelKey: "",
  fullOptionReturned: false,
};

export default Autocomplete;
