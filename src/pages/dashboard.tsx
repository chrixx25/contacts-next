import Page from "component/Page";

import { withSession } from "../utils/session";

const UsersPage = (): React.ReactElement => <Page>dash board</Page>;

export const getServerSideProps = withSession({ action: "RINA" });

export default UsersPage;
