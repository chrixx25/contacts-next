import Page from 'component/Page'
import Users from '../container/users';
import { withSession } from '../utils/session';

const UsersPage: React.FC = () => (
    <Page>
        <Users />
    </Page>
);

export const getServerSideProps = withSession({ action: "RINA" });

export default UsersPage;