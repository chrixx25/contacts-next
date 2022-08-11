import Page from "component/Page";

import { withSession } from "../utils/session";

const Home: React.FC = () => <Page>main</Page>;

export const getServerSideProps = withSession({ action: "RINA" });

export default Home;
