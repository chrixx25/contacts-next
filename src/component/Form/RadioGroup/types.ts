import { RefCallBack } from "react-hook-form";

export interface RadioProps {
  label?: string;
  value?: string;
  values?: Array<any>;
  ref?: RefCallBack;
}

export interface RadioGroupProps {
  row?: boolean;
  label?: string;
  name?: string;
  helperText?: string;
  defaultValue?: string;
  options: Array<any>;
  optionValueKey: string;
  optionLabelKey: string;
}
