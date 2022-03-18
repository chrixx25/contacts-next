import Login from '../container/login';
import { withSession } from '../utils/session';

const login = () => <Login />;

export const getServerSideProps = withSession({ action: "RIA" });

export default login;