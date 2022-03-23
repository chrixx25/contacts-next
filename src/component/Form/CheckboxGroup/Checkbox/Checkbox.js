import { forwardRef } from "react";

import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Checkbox = forwardRef((props, ref) => {
  const { checked, ...rest } = props;
  return (
    <FormControlLabel
      {...rest}
      control={<MuiCheckbox inputRef={ref} checked={checked} />}
    />
  );
});

Checkbox.displayName = "Checbox";

Checkbox.defaultProps = {
  label: "",
  value: "",
};

Checkbox.propTypes = {};

export default Checkbox;
