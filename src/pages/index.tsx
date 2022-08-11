import Page from "component/Page";

import Main from "../container/main";
import { withSession } from "../utils/session";

const Home = (): React.ReactElement => (
  <Page>
    <Main />
  </Page>
);

export const getServerSideProps = withSession({ action: "RINA" });

export default Home;
