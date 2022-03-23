import { createReducerContext } from "react-use";

const initialState = {
    sidebarCollapsed: true,
};

const reducer = (state, action) => {
    switch (action) {
        case "sidebarCollapsed":
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
