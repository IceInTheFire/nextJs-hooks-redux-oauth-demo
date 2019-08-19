import { withRouter } from 'next/router';
// import Layout from '../layout/Layout';
// import fetch from "../../server-rendered-website-demo/pages/post";

// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../../layout/homeLayout'))

import Layout from 'layout/homeLayout';

// 下面代码通过withRouter将next的router作为一个prop注入到component中，实现对url参数的访问。
const Post = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <h2>{JSON.stringify(props.router)}</h2>
        <h2>props.title</h2>
        <p>This is the blog post content.</p>
    </Layout>
));

Post.getInitialProps = async function (context) {
    const { title } = context.query;    // 获取参数
    return { title };
}


export default Post;
