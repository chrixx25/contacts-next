export interface DataTableProps {
  columns: Array<any>;
  data: Array<any>;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  onPageChange: (pageNumber: number) => void;
  onRowsPerPageChange: (pageNumber: number) => void;
}
