import React from "react";

import { SubmitHandler } from "react-hook-form";

import { TextFieldProps } from "./TextField/types";
import { DatePickerProps } from "./DatePicker/types";
import { AutocompleteProps } from "./Autocomplete/types";
import { CheckboxProps } from "./Checkbox/types";
import { CheckboxGroupProps } from "./CheckboxGroup/types";
import { RadioGroupProps } from "./RadioGroup/types";
import { SelectProps } from "./Select/types";
import { ToggleButtonGroupTypeProps } from "./ToggleButtonGroup/types";

export interface FormProps {
  onSubmit: SubmitHandler<any>;
  methods: any;
  children: React.ReactNode;
  Autocomplete?: React.ReactElement<AutocompleteProps>;
  Checkbox?: React.ReactElement<CheckboxProps>;
  CheckboxGroup?: React.ReactElement<CheckboxGroupProps>;
  RadioGroup?: React.ReactElement<RadioGroupProps>;
  Select?: React.ReactElement<SelectProps>;
  TextField?: React.FC<TextFieldProps>;
  ToggleButtonGroup?: React.ReactElement<ToggleButtonGroupTypeProps>;
  DatePicker?: React.ReactElement<DatePickerProps>;
}

export interface InputProps {
  Autocomplete?: React.FC<AutocompleteProps>;
  Checkbox?: React.FC<CheckboxProps>;
  CheckboxGroup?: React.FC<CheckboxGroupProps>;
  RadioGroup?: React.FC<RadioGroupProps>;
  Select?: React.FC<SelectProps>;
  TextField?: React.FC<TextFieldProps>;
  ToggleButtonGroup?: React.FC<ToggleButtonGroupTypeProps>;
  DatePicker?: React.FC<DatePickerProps>;
}
