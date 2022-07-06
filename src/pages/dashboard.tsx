import Page from 'component/Page';
import Users from '../container/users';
import { withSession } from '../utils/session';

const UsersPage = (): React.ReactElement => <Page>dash board</Page>;

export const getServerSideProps = withSession({ action: 'RINA' });

export default UsersPage;
