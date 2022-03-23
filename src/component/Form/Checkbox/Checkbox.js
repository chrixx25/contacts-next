import MuiCheckbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

const Checkbox = (props) => {
  const { label, helperText, name, defaultValue } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            {...field}
            inputRef={ref}
            inputProps={{
              "aria-label": name,
            }}
            checked={field.value}
          />
        }
      />
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

Checkbox.defaultProps = {
  label: "",
  name: "",
  helperText: "",
  defaultValue: "",
};

Checkbox.propTypes = {};

export default Checkbox;
