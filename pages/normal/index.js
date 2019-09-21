import Link from 'next/link';
// import Layout from '../layout/Layout';

// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../../layout/BaseLayout'))
import Layout from 'layout/BaseLayout';
import Loading from 'components/Loading/';
const PostLink = (props) => (
    <li>
        <Link href={`/normal/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <Loading></Loading>
        <ul>
            <PostLink title="Hello next.js2222222223333" />
            <PostLink title="next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
        </ul>
    </Layout>
);
