import { createContext, useContext } from "react";

// import { DataTableProps } from "react-table";

interface TableProps {
  page?: Array<any>;
  headerGroups?: Array<any>;
  prepareRow?: (any) => void;
}

const initialState: TableProps = {
  page: [],
  headerGroups: [],
};

const Context = createContext(initialState);

const DataTableProvider = ({ initialValue, ...props }: any): any => (
  <Context.Provider value={initialValue} {...props} />
);

export default DataTableProvider;
export const useDataTableContext = (): TableProps => useContext(Context);
