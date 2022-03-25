
import Page from 'component/Page2'
import Main from '../container/main';
import { withSession } from '../utils/session';

const Home = () => (
    <Page>
        <Main />
    </Page>
);

export const getServerSideProps = withSession({ action: "RINA" });

export default Home;
