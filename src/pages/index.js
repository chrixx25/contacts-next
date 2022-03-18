import Main from '../container/main';
import { withSession } from '../utils/session';

const Home = () => <Main />;

export const getServerSideProps = withSession({ action: "RINA" });

export default Home;
