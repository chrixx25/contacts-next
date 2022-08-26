import { DataTableResults } from "@/component/DataTable/types";

export interface ContactsParams {
  page: number;
  pageSize: number;
}

export interface ContactParams {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  mobileNo: string;
}

export interface ContactByIdResponse {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  middleName?: string;
  mobileNo: string;
  password: string;
  userName: string;
}

export interface ContactsResponse extends DataTableResults {
  results: ContactByIdResponse[];
}
