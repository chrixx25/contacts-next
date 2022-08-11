import Login from "../container/login";
import { withSession } from "../utils/session";

const login = (): React.ReactElement => <Login />;

export const getServerSideProps = withSession({ action: "RIA" });

export default login;
