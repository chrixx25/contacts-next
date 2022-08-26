import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { useController } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useToggle } from "react-use";

import { useMetaError } from "hooks";

const TextField = (props: TextFieldProps): React.ReactElement => {
  const { helperText, name, defaultValue, type, ...rest } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);
  const [visible, toggleVisibility] = useToggle(false);

  if (type === "password") {
    return (
      <MuiTextField
        {...field}
        {...rest}
        inputRef={ref}
        type={visible ? "text" : "password"}
        InputProps={{
          // disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleVisibility}
                onMouseDown={toggleVisibility}
                edge="start"
              >
                {visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }

  return (
    <MuiTextField
      {...field}
      {...rest}
      inputRef={ref}
      id={name}
      error={hasError}
      helperText={hasError ? errorMessage : helperText}
    />
  );
};

TextField.defaultProps = {
  type: "text",
  label: "",
  name: "",
  placeholder: "Please Input",
  helperText: "",
  defaultValue: "",
};

export default TextField;
