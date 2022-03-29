import { createContext, useContext } from "react";

const Context = createContext();

const DataTableProvider = ({ initialValue, ...props }) => (
  <Context.Provider value={initialValue} {...props} />
);

export default DataTableProvider;
export const useDataTableContext = () => useContext(Context);
