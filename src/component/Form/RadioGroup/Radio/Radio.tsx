import { forwardRef } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";
import { useRadioGroup } from "@mui/material/RadioGroup";

import { RadioProps } from "../types";

const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <FormControlLabel
      {...props}
      control={<MuiRadio inputRef={ref} checked={checked} />}
    />
  );
});

Radio.displayName = "Radio";

Radio.defaultProps = {
  label: "",
  value: "",
};

Radio.propTypes = {};

export default Radio;
