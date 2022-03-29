import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

import { xor, castArray } from "lodash";
import PropTypes from "prop-types";

const Context = createContext();

const ToggleProvider = (props) => {
  const { initialValue, children } = props;

  const [openKeys, setOpenKeys] = useState(initialValue);

  const checkIfOpen = useCallback(
    (keys) => openKeys.some((openKey) => castArray(keys).includes(openKey)),
    [openKeys]
  );

  const checkIfClose = useCallback((keys) => !checkIfOpen(keys), [checkIfOpen]);

  const toggle = useCallback((keys) => {
    setOpenKeys((currentOpenKeys) => xor(currentOpenKeys, castArray(keys)));
  }, []);

  const value = useMemo(
    () => ({ checkIfOpen, checkIfClose, toggle }),
    [checkIfClose, checkIfOpen, toggle]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useToggleContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useToggleContext must be used within a ToggleProvider");
  }

  return context;
};

ToggleProvider.defaultProps = {
  initialValue: [],
};

ToggleProvider.propTypes = {
  initialValue: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export { useToggleContext };
export default ToggleProvider;
