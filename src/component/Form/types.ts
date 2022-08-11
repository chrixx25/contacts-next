import React from "react";

import { SubmitHandler } from "react-hook-form";

import { TextFieldProps } from "./TextField/types";

export interface FormProps {
  onSubmit: SubmitHandler<any>;
  methods: any;
  children: React.ReactNode;
}

export interface InputProps {
  Autocomplete?: React.FC;
  Checkbox?: React.FC;
  CheckboxGroup?: React.FC;
  RadioGroup?: React.FC;
  Select?: React.FC;
  TextField?: React.FC<TextFieldProps>;
  ToggleButtonGroup?: React.FC;
  DatePicker?: React.FC;
}
