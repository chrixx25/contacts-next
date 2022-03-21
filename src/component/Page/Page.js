import Header from './Header';
import Content from './Content'

const Page = ({ children }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
        </>
    )
}

export default Page;