import { ContactByIdResponse } from "apis/contacts/types";

export interface ActionCellParams {
  id: string;
  firstName: string;
  initialState: {
    page: number;
    pageSize: number;
    currentPage: number;
  };
  row: {
    original: ContactByIdResponse;
  };
}
