import Link from 'next/link';
// import Layout from '../layout/Layout';

// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../../layout/baseLayout'))
import Layout from 'layout/baseLayout';
// link 的as是url地址， href是跳转地址
const PostLink = (props) => (
    <li>
        <Link as={`/normal/p/${props.title}`} href={`/normal/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello next.js" />
            <PostLink id="learn-nextjs" title="next.js is awesome" />
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
    </Layout>
);
