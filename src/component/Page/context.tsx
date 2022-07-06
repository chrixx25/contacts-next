import { createReducerContext } from 'react-use';

const initialState = {
  sidebarCollapsed: true,
};

interface State {
  sidebarCollapsed: boolean;
}

type Action = string;

const reducer = (state: State, action: Action) => {
  switch (action) {
    case 'sidebarCollapsed':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    default:
      return state;
  }
};

const [useAppState, AppStateProvider] = createReducerContext(
  reducer,
  initialState
);

export default AppStateProvider;
export { useAppState };
export { initialState };
