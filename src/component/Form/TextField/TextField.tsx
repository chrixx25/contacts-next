import MuiTextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

import { useMetaError } from "hooks";

// eslint-disable-next-line import/extensions
import withPassword from "./withPassword";
import { TextFieldProps } from "./types";

const TextField: React.FC<TextFieldProps> = (props) => {
  const { helperText, name, defaultValue, ...rest } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

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

export default withPassword(TextField);
