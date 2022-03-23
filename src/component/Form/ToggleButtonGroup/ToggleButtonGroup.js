import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import ToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

const defaultProps = {
  label: "",
  helperText: "",
  FormControlProps: {},
  FormLabelProps: {},
  ToggleButtonGroupProps: {},
  FormHelperTextProps: {},
};

const propTypes = {};

const ToggleButtonGroup = (props) => {
  const {
    label,
    helperText,
    FormControlProps,
    FormLabelProps,
    ToggleButtonGroupProps,
    FormHelperTextProps,
    children,
  } = props;
  const { field, fieldState } = useController(props);
  const { hasError, errorMessage } = useMetaError(fieldState);

  const handleChange = (_event, newValue) => {
    field.onChange({
      target: {
        name: field.name,
        value: newValue,
      },
    });
  };

  return (
    <FormControl {...FormControlProps} component="fieldset" error={hasError}>
      <FormLabel {...FormLabelProps} component="legend">
        {label}
      </FormLabel>
      <MuiToggleButtonGroup
        {...ToggleButtonGroupProps}
        {...field}
        onChange={handleChange}
      >
        {children}
      </MuiToggleButtonGroup>
      {(helperText || hasError) && (
        <FormHelperText {...FormHelperTextProps}>
          {hasError ? errorMessage : helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

ToggleButtonGroup.ToggleButton = ToggleButton;

ToggleButtonGroup.defaultProps = defaultProps;

ToggleButtonGroup.propTypes = propTypes;

export default ToggleButtonGroup;
