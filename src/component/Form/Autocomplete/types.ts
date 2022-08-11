export interface AutocompleteParams {
  label: string;
  name: string;
  helperText: string;
  defaultValue: Array<any>;
  placeholder: string | "Please Select";
  disableCloseOnSelect: true;
  multiple: boolean;
  options: Array<any>;
  optionValueKey: string;
  optionLabelKey: string;
  fullOptionReturned: boolean;
}
