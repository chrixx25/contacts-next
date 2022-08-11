import { createStateContext } from "react-use";

const [useUser, UserProvider] = createStateContext({});

export default UserProvider;
export { useUser };
