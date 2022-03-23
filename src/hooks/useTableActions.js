import { reduce, pickBy, identity } from "lodash";
import { useMethods } from "react-use";

const initialState = {
  page: 1,
  size: 10,
  filters: {},
};

const createMethods = (state) => ({
  setFilters: (newFilters) => ({
    ...state,
    filters: {
      ...state.filters,
      filters: reduce(
        pickBy(newFilters, identity),
        (result, value, key) => ({ ...result, [key]: `start:${value}` }),
        {}
      ),
    },
    page: 1,
  }),
  setPageSize: (newSize) => ({
    ...state,
    size: newSize,
    page: 1,
  }),
  setPage: (newPage) => ({
    ...state,
    page: newPage,
  }),
});

const useTableActions = () => useMethods(createMethods, initialState);

export default useTableActions;
